---
name: faire-la-recette
description: >-
  Fait la recette de l'étape développée d'un chantier - la montrer sur l'OS en local, faire
  vérifier chaque critère d'acceptation, renvoyer au développement ce qui est refusé, cocher
  l'étape, puis, à la dernière, fusionner la pull request et fermer le chantier au statut « Fait ».
  À suivre quand une étape est prête pour sa recette, ou que l'utilisateur dit « montre-moi
  l'étape », « on valide » ou « on fait la recette ».
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, sections « Le cycle », « Un chantier » et « Ce que l'IA propose,
ce que l'utilisateur décide ». Le projet et ses champs :
la skill `planifier-les-chantiers`, section « Le projet et ses champs ».

## Les étapes

1. **L'aperçu.** Sur la branche du chantier : `node kit/src/commande.ts local voir`. Ouvrir
   `http://localhost:8400` à l'utilisateur, dans le panneau navigateur de l'app Claude quand la
   session en a un, et afficher ce panneau. Lui dire le compte d'essai à prendre, parmi ceux que
   le kit affiche.
2. **Les critères d'acceptation.** Pour chaque sous-issue de l'étape, ses critères, un par un,
   sur l'OS en local : l'utilisateur regarde et dit oui ou non.
   - Un critère qui passe par l'IA connectée : l'IA lance elle-même
     `node kit/src/commande.ts local ia`, avec le compte d'essai du critère (`--compte`), pour les
     consignes et les outils, puis avec l'outil et ses arguments en JSON, pour son appel. Elle
     montre à l'utilisateur ce qu'elle a reçu, et il dit oui ou non. Jamais le connecteur du vrai
     OS (`${CLAUDE_SKILL_DIR}/../../methode/methode.md`, section « Le vrai OS hors du dépôt »).
   - Un critère qui passe par un compte réel attend le déploiement : il se note dans un commentaire
     de l'issue du chantier.
3. **Un non.**
   - Une correction de ce qui était convenu : la noter dans la sous-issue, et l'étape repart au
     développement (skill `developper-un-chantier`).
   - Une envie nouvelle : un brouillon, avec le lien du chantier (skill `noter-une-idee`).
4. **L'étape recettée**, quand chaque critère vérifiable en local est validé : sa case se coche
   dans la section « Étapes ». Une étape reste : dire à l'utilisateur laquelle vient (skill
   `developper-un-chantier`), et s'arrêter là.
5. **La fusion**, à la dernière étape : `gh pr merge <numéro> --squash`, puis
   `git switch main && git pull --ff-only`.
6. **Fermer.** Les sous-issues se ferment, puis le chantier : `gh issue close <n>`. Le chantier
   passe au Status « Fait ». Une branche `prototype-<chantier>` se supprime :
   `git push origin --delete prototype-<chantier>`. Dire à l'utilisateur que le chantier attend
   son déploiement (skill `deployer-une-version`), et les critères qui restent à refaire en ligne.

## Les vérifications

- Chaque critère vérifiable en local de l'étape est validé ; ceux qui demandent l'OS réel sont
  notés dans l'issue du chantier.
- L'étape est cochée quand le chantier en a plusieurs.
- À la dernière étape, la pull request est fusionnée, et le chantier fermé au Status « Fait ».
