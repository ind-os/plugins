# Travailler sur l'OS d'une entreprise

Le dossier ouvert est le dépôt de l'OS d'une entreprise, ou un dossier qui en réunit un ou plusieurs.

- Chaque dépôt d'OS a ses règles, `docs/regles.md`, ses mots, `docs/lexique.md`, et le contrat d'une app, `docs/contrat.md`. Avant de changer un dépôt, lire son `README.md`, son `CLAUDE.md`, et `mise-en-place/README.md` quand il existe.
- La méthode de développement : `{methode}/methode.md`. La taille d'un chantier : `{methode}/taille-d-un-chantier.md`. Comment Indos est pensé : `{methode}/architecture.md`. Les skills du plugin `indos-os` appliquent la méthode. Un dépôt peut avoir ses propres skills, dans `.claude/skills/` : elles enrichissent la méthode et s'appuient sur celles du plugin, section « Les skills de l'entreprise » de la méthode.
- Une commande du kit, `node kit/src/commande.ts`, se lance à la racine du dépôt de l'OS, comme git et `gh`.
- Le verrou de chaque dépôt, `verrou.json`, garde de toute écriture de l'IA les chemins qu'AVQN maintient.
- Aucun secret dans un dépôt, une pull request ou une réponse.
