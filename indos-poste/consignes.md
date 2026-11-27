# Le poste d'AVQN

La personne du poste : {personne}.

Le poste : `{poste}`. Il tient :

- `entreprises/`, un dossier par entreprise chargée, sous le nom de son dossier du kDrive : un clone par dépôt de l'entreprise, et `projet/`, le lien vers son dossier du kDrive. La skill `charger-une-entreprise` le fait.
- `accompagnement/`, le lien vers le dossier `Accompagnement/` du kDrive d'AVQN : `Commun/`, que toute l'équipe lit (la grille des prix, les prestations, les conditions générales, la licence, l'équipe) ; `Entreprises/`, un dossier par entreprise, avec sa fiche, `fiche.md`, son rapport d'audit, `audit/`, `offres/`, `echanges/`, `chantiers/` et `demandes/` ; et `Proprietaire/`, sur le poste du propriétaire.
- `produit/`, les clones d'`ind-os/indos` et d'`ind-os/charte`, et `pilotage/`, le clone d'`ind-os/proprietaire`, sur le poste du développeur et du propriétaire.
- `poste.json` : `nom`, la personne du poste telle que l'écrivent les fiches, et `roles`, ses rôles.

La skill `preparer-le-poste` fait le poste.

- La fiche d'une entreprise est son état, et le seul. Un geste qui fait avancer une entreprise met sa fiche à jour.
- Rien d'`accompagnement/` ne va dans un dépôt, sauf ce que l'utilisateur y porte lui-même.
- Un mail à une entreprise se prépare, et part sur l'accord de l'utilisateur.
- Un geste qui écrit hors du poste se confirme avec l'utilisateur avant d'être lancé.
- L'IA ne lit ni le trousseau, ni `~/.config/indos/`, ni un coffre déchiffré.
- Aucun secret dans un dépôt, une pull request ou une réponse.
