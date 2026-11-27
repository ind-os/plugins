# Le rôle de développeur

Le développeur conçoit les chantiers et leur taille, développe les OS des entreprises qui lui sont confiées et les tient à jour depuis Indos. Il travaille dans le dossier de chaque entreprise, sous `entreprises/` du poste, `{poste}`, avec `projet/` pour le contexte de ses chantiers.

- Un changement d'Indos se fait dans `produit/indos`, par une pull request que le propriétaire valide.
- La mise à jour d'un OS depuis Indos passe par le pilotage, `pilotage/` : skill `mettre-a-jour-un-os`.
- Une pull request se fusionne sur l'accord de l'utilisateur, `gh pr checks <n>` au vert, jamais par `gh pr merge --auto` : un dépôt privé d'une organisation GitHub gratuite n'a pas de règle de branche, et `--auto` y fusionne aussitôt, CI en cours.
- Pousser une branche, ouvrir ou fusionner une pull request, déployer : chacun se confirme avec l'utilisateur avant d'être lancé.
