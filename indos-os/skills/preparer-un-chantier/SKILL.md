---
name: preparer-un-chantier
description: >-
  Prépare le chantier suivant du plan - écrire avec l'utilisateur chaque issue et ses critères
  d'acceptation, découper les étapes, confirmer la taille, jusqu'au statut « En cours ». À suivre
  quand l'utilisateur dit « préparons le chantier suivant », « je veux développer ça », ou nomme
  un chantier à ouvrir.
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, sections « Le cycle », « Un chantier », « Écrire une issue » et
« Ce que l'IA propose, ce que l'utilisateur décide ». Les critères de la
taille : `${CLAUDE_SKILL_DIR}/../../methode/taille-d-un-chantier.md`. Le projet et ses champs :
la skill `planifier-les-chantiers`, section « Le projet et ses champs ».

## Les étapes

1. **Le chantier.** Celui que nomme l'utilisateur ; sinon le premier « Prévu » du plan. Aucun
   chantier prévu : skill `planifier-les-chantiers`. Un autre chantier « En cours » : le dire, et
   conseiller de le finir d'abord ; l'utilisateur décide.
2. **Les issues**, une par ligne de « Ce qu'on pense y mettre », avec l'utilisateur : ce que ça
   fait, qui s'en sert, quand, ce qui reste dehors. Chaque issue prend la forme de « Écrire une
   issue », avec des critères d'acceptation qu'on vérifie en regardant l'OS. Un besoin qui ne
   revient à aucune app existante : une issue de plus, pour l'app nouvelle (skill
   `creer-une-app`). Chaque issue se crée hors du projet, puis devient une sous-issue du chantier :

       gh issue create --title "<titre>" --body-file <fichier>
       gh api repos/{owner}/{repo}/issues/<chantier>/sub_issues \
         -F sub_issue_id=$(gh api repos/{owner}/{repo}/issues/<n> -q .id)

3. **Une maquette ou un prototype**, si l'utilisateur le veut (`${CLAUDE_SKILL_DIR}/../../methode/methode.md`, section « Une
   maquette, un prototype ») :
   - la maquette : un wireframe en gris, une page HTML simple montrée dans la conversation ;
   - le prototype : `git switch main && git switch -c prototype-<chantier>`, puis
     `node kit/src/commande.ts local travailler <app>` et l'écran sur `http://localhost:8400`, dans
     le panneau navigateur de l'app Claude. Le plus court chemin vers l'écran voulu, sans tests ni
     souci du contrat ; l'utilisateur manipule et demande, l'IA change, jusqu'à son oui. Puis
     `git push -u origin prototype-<chantier>`, et le lien de la branche dans l'issue du chantier.

   Ce que l'utilisateur valide s'écrit dans l'issue, en critères d'acceptation précis : ce que
   montre chaque écran, où, dans quel ordre, avec quels mots.
4. **Les étapes.** L'IA propose un découpage : ce que l'utilisateur recette en une fois, chaque
   étape avec ce qu'elle livre. Une seule étape : aucune section. Plusieurs : la section
   « Étapes » du chantier, une case par étape avec ses sous-issues.
5. **L'issue du chantier**, réécrite à la forme d'un chantier préparé : le but, puis « Étapes »
   s'il en a plusieurs ; la section « Ce qu'on pense y mettre » sort. La taille se confirme, ou se
   corrige au champ « Taille » ; un chantier qui dépasse un L se découpe en plusieurs chantiers
   (skill `planifier-les-chantiers`).
6. **Le oui.** L'utilisateur relit les titres, les critères d'acceptation et les étapes, et dit
   oui : le chantier passe au Status « En cours ».

## Les vérifications

- Le chantier a sa taille, et chaque sous-issue ses critères d'acceptation.
- Chaque sous-issue est dans une étape, quand le chantier en a plusieurs.
- Le Status « En cours » est posé après le oui de l'utilisateur.
