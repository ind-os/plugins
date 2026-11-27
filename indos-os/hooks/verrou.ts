// Le verrou de chaque dépôt d'OS, où qu'il soit sous le dossier ouvert : avant chaque outil d'écriture
// de l'IA, le hook cherche le dépôt du fichier, le dossier le plus proche qui a verrou.json, et lui
// passe l'appel de l'outil par son propre verrou, kit/src/verrou.ts. Le kit de chaque dépôt reste
// seul juge de ce qu'il garde. Un fichier hors d'un dépôt verrouillé s'écrit librement.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

function racineDuVerrou(fichier: string): string | undefined {
  let dossier = dirname(fichier);
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

function main(): void {
  const entree = readFileSync(0, 'utf8');
  const appel = JSON.parse(entree || '{}') as { cwd?: string; tool_input?: { file_path?: unknown; notebook_path?: unknown } };
  const chemin = appel.tool_input?.file_path ?? appel.tool_input?.notebook_path;
  if (typeof chemin !== 'string') {
    return;
  }
  const racine = racineDuVerrou(resolve(appel.cwd ?? process.cwd(), chemin));
  if (!racine) {
    return;
  }
  const verrou = join(racine, 'kit', 'src', 'verrou.ts');
  if (!existsSync(verrou)) {
    process.stderr.write(`${racine} a un verrou.json sans kit/src/verrou.ts pour l'appliquer. Rien n'est écrit.\n`);
    process.exit(2);
  }
  const r = spawnSync('node', [verrou], { input: entree, encoding: 'utf8', env: { ...process.env, CLAUDE_PROJECT_DIR: racine } });
  process.stderr.write(r.stderr ?? '');
  process.exit(r.status ?? 2);
}

main();
