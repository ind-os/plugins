// Le début d'une session sur un poste d'AVQN : le hook donne à l'IA les consignes du plugin,
// consignes.md, où {poste} devient le chemin du poste, {plugin} celui du plugin, et {personne} la
// personne du poste et ses rôles, lus dans poste.json. Le poste est le dossier qui tient
// `entreprises/`, le dossier ouvert ou l'un de ses parents. Hors d'un poste, le hook ne dit rien : la
// session travaille sur autre chose.
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

function racineDuPoste(dossier: string): string | undefined {
  for (;;) {
    const entreprises = join(dossier, 'entreprises');
    if (existsSync(entreprises) && statSync(entreprises).isDirectory()) {
      return dossier;
    }
    const parent = dirname(dossier);
    if (parent === dossier) {
      return undefined;
    }
    dossier = parent;
  }
}

function personneDuPoste(poste: string): string {
  const fichier = join(poste, 'poste.json');
  if (!existsSync(fichier)) {
    return "inconnue : le poste n'a pas de poste.json, que fait la skill `preparer-le-poste`";
  }
  const { nom, roles } = JSON.parse(readFileSync(fichier, 'utf8')) as { nom?: string; roles?: string[] };
  return `${nom ?? 'sans nom'}, ${roles?.length ? `rôles : ${roles.join(', ')}` : 'sans rôle'}`;
}

function main(): void {
  const racineDuPlugin = process.env.CLAUDE_PLUGIN_ROOT ?? join(import.meta.dirname, '..');
  const poste = racineDuPoste(process.env.CLAUDE_PROJECT_DIR ?? process.cwd());
  if (!poste) {
    return;
  }
  let consignes = readFileSync(join(racineDuPlugin, 'consignes.md'), 'utf8').trim();
  consignes = consignes.replaceAll('{poste}', poste).replaceAll('{plugin}', racineDuPlugin);
  if (consignes.includes('{personne}')) {
    consignes = consignes.replaceAll('{personne}', personneDuPoste(poste));
  }
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: consignes } }));
}

main();
