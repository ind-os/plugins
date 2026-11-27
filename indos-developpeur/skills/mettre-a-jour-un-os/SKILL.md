---
name: mettre-a-jour-un-os
description: Mettre l'OS d'une entreprise à jour depuis Indos - copier dans son dépôt, par le pilotage, les chemins de son verrou à la version de main d'ind-os/indos, ouvrir la pull request, la fusionner, puis déployer. À suivre quand un changement d'Indos est fusionné et qu'un OS doit le recevoir, ou qu'un OS reçoit une app du catalogue.
---

# Mettre un OS à jour depuis Indos

Les règles du geste : `pilotage/README.md` du poste, sections « Les gestes » (`flotte`, `mettre-a-jour`) et « Mettre à jour un OS ». Le nom de l'OS est celui de `pilotage/flotte.json`, comme `boulimos`. Chaque commande se lance dans `pilotage/`, après `git pull --ff-only`.

1. **L'écart.** `./pilotage flotte` dit, pour chaque OS, la version d'Indos d'où viennent les chemins de son verrou, et les pull requests d'`ind-os/indos` fusionnées depuis. Le dire à l'utilisateur.
2. **À blanc.** `./pilotage mettre-a-jour <os> --a-blanc`, avec `--avec <chemin>` pour une app du catalogue que l'OS reçoit, comme `--avec apps/agenda`. Le geste prépare le commit dans `pilotage/.depots/` sans rien pousser ; montrer ce qu'il change. Un arrêt parce que le dépôt de l'OS a changé un chemin du verrou se dit à l'utilisateur, sans le contourner.
3. **La pull request**, sur l'accord de l'utilisateur : le même geste sans `--a-blanc` pousse la branche `mise-a-jour-<version>` et ouvre la pull request dans le dépôt de l'OS.
4. **La fusion.** `gh pr checks <n> --repo <dépôt>` au vert, puis la fusion sur l'accord de l'utilisateur, jamais par `gh pr merge --auto`. La CI de `main` range les images de la version.
5. **Le déploiement**, par la skill `deployer-une-version` du plugin `indos-os`.
6. **La vérification.** `./pilotage flotte` dit l'OS à jour, et ce qui répond. Le clone de l'OS dans `entreprises/` rattrape `main` au début de la prochaine session.
