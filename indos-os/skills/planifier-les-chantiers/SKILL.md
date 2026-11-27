---
name: planifier-les-chantiers
description: >-
  Tient le plan de l'OS avec l'utilisateur - placer les idées dans des chantiers prévus ou les
  écarter, créer un chantier prévu, ordonner les chantiers, réunir des chantiers en phases - ou
  ouvre le projet GitHub de l'OS dans un navigateur. À suivre quand l'utilisateur dit « trions les
  idées », « planifions », « qu'est-ce qu'on fait ensuite », « crée une phase », « ouvre le plan »,
  « montre les idées » ou « montre ce qui est fait ».
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, sections « Le projet GitHub de l'OS », « Une idée », « Un
chantier » et « Ce que l'IA propose, ce que l'utilisateur décide ». Les critères de la
taille : `${CLAUDE_SKILL_DIR}/../../methode/taille-d-un-chantier.md`.

## Le projet et ses champs

Les autres skills renvoient à cette section.

1. **Le projet.** Celui qui est lié au dépôt :
   `gh repo view --json projectsV2 -q '.projectsV2.Nodes[0] | "\(.number) \(.title)"'` rend son
   numéro `<n>` et son titre `<titre>`. Le propriétaire `<p>` :
   `gh repo view --json owner -q .owner.login`. Aucun projet lié : le dire à l'utilisateur, rien ne
   se crée.
2. **Les éléments** : `gh project item-list <n> --owner <p> --limit 200 --format json`. Une idée y
   a `.content.type` à `DraftIssue` ; un chantier y est une issue, avec son numéro.
3. **Le champ « Status » ou « Taille » d'un chantier `<i>`**, avec les trois identifiants :
   - le projet : `gh project view <n> --owner <p> --format json -q .id` ;
   - le champ et ses options :
     `gh project field-list <n> --owner <p> --format json -q '.fields[] | select(.name=="Status")'`
     rend l'identifiant du champ et celui de chaque option ;
   - l'élément du chantier :
     `gh project item-list <n> --owner <p> --limit 200 --format json -q '.items[] |
     select(.content.number==<i>) | .id'`.

   Puis `gh project item-edit --id <élément> --project-id <projet> --field-id <champ>
   --single-select-option-id <option>`.
4. **La phase d'un chantier** : `gh issue edit <i> --milestone "<phase>"`, ou
   `--remove-milestone`.

## Planifier

1. **Lire** les idées, puis les chantiers « En cours » et « Prévu » dans leur ordre, avec leur
   phase.
2. **Proposer**, en une liste courte, avant de rien changer :
   - chaque idée : le chantier prévu où elle irait, un chantier nouveau, ou l'écarter ;
   - un chantier nouveau : son but, sa taille estimée, sa phase ;
   - un ordre conseillé des chantiers prévus, chaque place avec sa raison en une ligne ;
   - une phase, quand des chantiers vont ensemble vers un même but.
3. **Faire ce que l'utilisateur accepte**, et rien de plus :
   - créer un chantier prévu :
     `gh issue create --title "Chantier : <but>" --body-file <fichier> --project "<titre>"`, le
     corps à la forme de « L'issue d'un chantier », puis le Status « Prévu » et sa taille ;
   - placer une idée : une ligne dans la section « Ce qu'on pense y mettre » du chantier
     (`gh issue view <i> --json body -q .body`, puis `gh issue edit <i> --body-file <fichier>`),
     puis archiver son brouillon : `gh project item-archive <n> --owner <p> --id <élément>` ;
   - écarter une idée : archiver son brouillon ;
   - créer une phase :
     `gh api repos/{owner}/{repo}/milestones -f title="<phase>" -f description="<but>"`, sans date ;
   - réordonner :

         gh api graphql -f query='mutation($p:ID!,$i:ID!,$a:ID){
           updateProjectV2ItemPosition(input:{projectId:$p,itemId:$i,afterId:$a}){
             clientMutationId}}' -f p=<projet> -f i=<élément> -f a=<élément précédent>

     Sans `a`, l'élément passe en tête.

## Ouvrir le projet

1. **L'adresse** : `gh project view <n> --owner <p> --format json -q .url`, suivie de
   `/views/<numéro de la vue>`. Les vues et leurs numéros :

       gh api graphql -f query='query($o:String!,$n:Int!){repositoryOwner(login:$o){
         ... on ProjectV2Owner{projectV2(number:$n){views(first:20){nodes{number name}}}}}}' \
         -f o=<p> -F n=<n> -q '.data.repositoryOwner.projectV2.views.nodes[]'

   La vue ouverte : celle que l'utilisateur demande, « Plan » sinon.
2. **L'ouvrir** dans un nouvel onglet du panneau navigateur de l'app Claude, puis afficher ce
   panneau. Le projet est privé : une page 404 ou de connexion veut dire que ce navigateur n'est
   pas connecté à GitHub. L'utilisateur s'y connecte, puis l'IA recharge la vue. Sans ce panneau,
   `gh project view <n> --owner <p> --web` l'ouvre chez l'utilisateur.
3. **Dire** à l'utilisateur quelle vue est ouverte.

## Les vérifications

- Chaque chantier touché a un titre à la règle, un Status et une taille.
- Une idée placée est une ligne de son chantier, et son brouillon est archivé.
- Rien n'a changé que l'utilisateur n'ait accepté.
