---
name: creer-une-app
description: >-
  Crée une app nouvelle dans le dépôt de l'OS, d'après le contrat d'une app, ses tests passant par
  l'OS en local. À suivre quand l'utilisateur demande une nouvelle app, un nouvel outil pour l'IA
  ou un nouvel écran qui ne revient à aucune app existante.
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, section « Une app nouvelle ». Le contrat d'une app :
`docs/contrat.md`, lu en entier.

## Les étapes

1. **Le besoin.** `ls apps/` : aucune app existante n'y répond ; sinon, la changer (skill
   `preparer-un-chantier`).
2. **Le nom**, qui dit ce que fait l'app, à la règle de `docs/contrat.md`, section « Le dossier
   d'une app ». Un nom déjà pris dans `apps/` : en proposer un autre.
3. **Le chantier.** L'app nouvelle est une issue d'un chantier : sinon, skill
   `preparer-un-chantier`. Puis la branche du chantier (skill `developper-un-chantier`).
4. **L'app**, dans `apps/<nom>/`, en suivant le contrat, avec `apps/kdrive/` ouvert comme
   modèle. Son `Dockerfile` est la copie de `bibliotheque/Dockerfile-d-une-app` ; ce que ses
   tests demandent de plus va dans la zone prévue (`docs/contrat.md`, « La construction et les
   tests »). Le cas ordinaire est une app sans ressource : ses données ne sont à personne, et ses
   outils ne nomment aucune ressource. Une sorte de données qui est à quelqu'un est une ressource
   (`docs/contrat.md`, « Les données d'une app »). `node kit/src/commande.ts local travailler
   <nom>` la fait tourner pendant qu'on l'écrit.
5. **Les tests.** Ceux de chaque critère d'acceptation, écrits d'abord.
   `node kit/src/commande.ts local voir` construit l'app, tests compris, et montre ses écrans sur
   `http://localhost:8400/<nom>`.
6. **La suite** est celle du chantier : skills `developper-un-chantier`, `faire-la-recette` puis
   `deployer-une-version`.

## Les vérifications

- `apps/<nom>/manifeste.json` porte le nom du dossier.
- `apps/<nom>/Dockerfile` est le modèle, hors de sa zone : `diff bibliotheque/Dockerfile-d-une-app
  apps/<nom>/Dockerfile` ne montre que ce qui y est ajouté.
- Rien ne reste du modèle : chaque fichier repris de `apps/kdrive/` sert l'app, et ses textes
  parlent d'elle.
- `local voir` construit l'app, et `http://localhost:8400/<nom>/sante` rend 200.
