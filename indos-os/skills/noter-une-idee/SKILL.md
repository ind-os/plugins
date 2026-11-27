---
name: noter-une-idee
description: >-
  Note une idée en un brouillon du projet GitHub de l'OS, en quelques secondes, sans la travailler.
  À suivre quand l'utilisateur dit « note cette idée », « garde ça pour plus tard », « ajoute ça
  aux idées », ou qu'une idée vient pendant un chantier.
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, section « Une idée ». Le projet et ses champs :
la skill `planifier-les-chantiers`, section « Le projet et ses champs ».

## Les étapes

1. **La phrase**, celle de l'utilisateur, au plus près de ses mots. Aucune question : la travailler
   est le rôle du plan (skill `planifier-les-chantiers`).
2. **Le brouillon** :
   `gh project item-create <n> --owner <p> --title "<phrase>" --body "<corps>"`. Le corps est vide,
   ou une ligne de l'utilisateur ; venue pendant un chantier, l'idée porte « Venue du chantier
   #<numéro> ».
3. **Dire** à l'utilisateur la phrase notée, en une ligne.

## Les vérifications

- Le brouillon est dans la vue « Idées », sans Status.
- Rien d'autre n'a changé : aucune issue, aucun chantier.
