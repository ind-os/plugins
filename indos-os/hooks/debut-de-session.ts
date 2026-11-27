// Le début d'une session : le hook donne à l'IA les consignes du plugin, consignes.md, avec le chemin
// de la méthode, puis l'état de main de chaque dépôt d'OS sous le dossier ouvert, par le
// kit/src/main-a-jour.ts de ce dépôt. Un dépôt d'OS est un dossier qui a verrou.json ; il se cherche
// dans le dossier ouvert, ses parents, et jusqu'à deux niveaux dessous. Sans dépôt d'OS, le hook ne
// dit rien : la session travaille sur autre chose.
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

const PROFONDEUR = 2;

function depotsDOS(dossier: string, profondeur: number): string[] {
  if (existsSync(join(dossier, 'verrou.json'))) {
    return [dossier];
  }
  if (profondeur === 0) {
    return [];
  }
  let entrees;
  try {
    entrees = readdirSync(dossier, { withFileTypes: true });
  } catch {
    return [];
  }
  return entrees
    .filter((e) => (e.isDirectory() || e.isSymbolicLink()) && !e.name.startsWith('.') && e.name !== 'node_modules')
    .flatMap((e) => depotsDOS(join(dossier, e.name), profondeur - 1));
}

// Le dépôt d'OS qui contient le dossier ouvert, quand la session s'ouvre dans l'un de ses dossiers.
function depotParent(dossier: string): string | undefined {
  for (;;) {
    if (existsSync(join(dossier, 'verrou.json'))) {
      return dossier;
    }
    const parent = dirname(dossier);
    if (parent === dossier) {
      return undefined;
    }
    dossier = parent;
  }
}

function etatDeMain(depot: string): string | undefined {
  const script = join(depot, 'kit', 'src', 'main-a-jour.ts');
  if (!existsSync(script)) {
    return undefined;
  }
  const r = spawnSync('node', [script], { encoding: 'utf8', timeout: 25_000, env: { ...process.env, CLAUDE_PROJECT_DIR: depot } });
  const message = (r.stdout ?? '').trim();
  return message ? `${basename(depot)} (${depot}) : ${message}` : undefined;
}

function main(): void {
  const racineDuPlugin = process.env.CLAUDE_PLUGIN_ROOT ?? join(import.meta.dirname, '..');
  const ouvert = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
  const consignes = readFileSync(join(racineDuPlugin, 'consignes.md'), 'utf8').replaceAll('{methode}', join(racineDuPlugin, 'methode'));
  const parent = depotParent(ouvert);
  const depots = parent ? [parent] : depotsDOS(ouvert, PROFONDEUR);
  if (!depots.length) {
    return;
  }
  const parties = [consignes.trim()];
  if (depots.length) {
    parties.push(`Les dépôts d'OS sous le dossier ouvert :\n${depots.map((d) => `- ${d}`).join('\n')}`);
  }
  const etats = depots.map(etatDeMain).filter((m): m is string => Boolean(m));
  if (etats.length) {
    parties.push(`L'état de main :\n${etats.map((m) => `- ${m}`).join('\n')}`);
  }
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: parties.join('\n\n') } }));
}

main();
