# indos-os

Le plugin `indos-os` sert à travailler sur le dépôt de l'OS d'une entreprise avec Claude Code : créer une app, planifier, préparer et développer un chantier, faire la recette et déployer une version, selon la méthode de développement d'Indos.

Il sert à l'entreprise qui développe son propre OS comme au développeur d'AVQN, dont le plugin `indos-developpeur` l'exige.

## Ce qu'il porte

| Dossier | Ce qu'il tient |
| --- | --- |
| `skills/` | Les skills, qui appliquent la méthode |
| `methode/` | La méthode de développement, la taille d'un chantier, et comment Indos est pensé |
| `consignes.md` | Les consignes que l'IA reçoit au début de chaque session |
| `hooks/` | Le début de session et le verrou |

Au début d'une session, `hooks/debut-de-session.ts` donne à l'IA les consignes, avec le chemin de la méthode, et l'état de `main` de chaque dépôt d'OS du dossier ouvert : un dossier qui a `verrou.json`, dans le dossier ouvert ou jusqu'à deux niveaux dessous.

Avant chaque écriture de l'IA, `hooks/verrou.ts` passe l'appel au verrou du dépôt du fichier, `kit/src/verrou.ts`, qui garde les chemins qu'AVQN maintient.

## Le dossier à ouvrir

Le dossier d'une entreprise, qui tient le dépôt de son OS, ou un dossier qui en réunit plusieurs. Le dépôt de l'OS seul s'ouvre aussi.
