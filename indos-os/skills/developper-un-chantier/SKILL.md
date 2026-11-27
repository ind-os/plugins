---
name: developper-un-chantier
description: >-
  Développe l'étape suivante du chantier en cours sur sa branche du dépôt de l'OS - les tests de
  chaque critère d'acceptation d'abord, l'OS en local par le kit, la pull request du chantier, la
  CI verte, jusqu'à la recette de l'étape. À suivre quand l'utilisateur dit « lance le
  développement », « développe le chantier », « passe à l'étape suivante », ou qu'un chantier
  vient de passer « En cours ».
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, sections « Le cycle », « Un chantier » et « Ce que l'IA propose,
ce que l'utilisateur décide ». Le contrat d'une app : `docs/contrat.md`, lu en entier avant
d'écrire ou de changer une app. Le projet et ses champs :
la skill `planifier-les-chantiers`, section « Le projet et ses champs ». Le poste
est prêt (skill `preparer-mon-poste`).

## Les étapes

1. **Le chantier** est au Status « En cours », avec ses sous-issues ; sinon, skill
   `preparer-un-chantier`. **L'étape** : la première case non cochée de la section « Étapes », ou
   toutes les sous-issues quand le chantier n'a pas cette section.
2. **Le prototype**, quand l'issue du chantier lie une branche `prototype-<chantier>` : le faire
   tourner (`git switch prototype-<chantier>`, puis `local travailler <app>`) pour voir ce que
   l'utilisateur a validé. Rien de son code ne se reprend : le chantier refait la même chose, à
   la règle.
3. **La branche du chantier**, le nom en minuscules et tirets :
   - à la première étape : `git switch main && git pull --ff-only && git switch -c <nom>` ;
   - ensuite : `git switch <nom>`, puis `git merge main` quand `main` a avancé.
4. **Le plan de l'étape**, pour l'IA : pour chaque sous-issue de l'étape, ce qui est touché
   (`core/`, `apps/<app>/`, une app nouvelle par la skill `creer-une-app`, une valeur dans
   `configuration.json`), ce qui change et les tests qui prouvent chaque critère d'acceptation. Il
   s'écrit dans la description de la pull request.
5. **Une sous-issue après l'autre**, sur la branche :
   - un test par critère d'acceptation, d'abord, que le kit fait échouer à la construction de
     l'app : `node kit/src/commande.ts local voir` ;
   - le code, jusqu'à ce que `local voir` construise l'app, tests compris ; pour écrire,
     `node kit/src/commande.ts local travailler <app>` relance l'app à chaque changement ;
   - chaque critère d'acceptation refait sur `http://localhost:8400`, ou par
     `node kit/src/commande.ts local ia` pour un critère qui passe par l'IA connectée, avec un
     compte d'essai que le kit affiche ;
   - un commit.
6. **Une idée en chemin**, une amélioration, un découpage remis à plus tard : un brouillon, avec
   le lien du chantier (skill `noter-une-idee`).
7. **Un critère d'acceptation impossible ou ambigu**, ou un dossier que nomme `verrou.json` :
   s'arrêter et demander à l'utilisateur.
8. **La pull request**, une pour le chantier :
   - à la première étape : `git push -u origin <branche>`, puis
     `gh pr create --title "<titre du chantier>" --body-file <fichier>` ; le corps renvoie au
     chantier et à chaque sous-issue par son numéro, et porte le plan de l'étape ;
   - ensuite : `git push`, et le plan de l'étape s'ajoute au corps
     (`gh pr edit <numéro> --body-file <fichier>`).
9. **La CI verte** : `gh pr checks --watch --fail-fast`. Un échec : lire son journal
   (`gh run view <id> --log-failed`), corriger, pousser.
10. **La fin de l'étape.** Dire à l'utilisateur que l'étape est prête pour sa recette (skill
    `faire-la-recette`).

## Les vérifications

- Chaque critère d'acceptation de l'étape a son test, et se refait sur l'OS en local.
- La pull request ne contient que le chantier ; aucune idée notée n'y est développée.
- La CI de la pull request est verte.
