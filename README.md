# Les plugins d'Indos

Ce dépôt est le marketplace `indos` : les plugins Claude Code du travail sur Indos et sur les OS des entreprises, un plugin par rôle. Un rôle s'active en installant son plugin, qui amène ceux qu'il exige.

| Plugin | Exige | Ce qu'il porte |
| --- | --- | --- |
| `indos-os` | | Le travail sur le dépôt de l'OS d'une entreprise : ses apps, ses chantiers, sa recette, son déploiement, et le verrou |
| `indos-poste` | | Le poste d'un membre de l'équipe d'AVQN : ses entreprises, leurs dépôts et leur projet, l'accompagnement dans le kDrive |
| `indos-developpeur` | `indos-os`, `indos-poste` | Le rôle de développeur : la mise à jour d'un OS depuis Indos |
| `indos-referent` | `indos-poste` | Le rôle de référent : la méthode d'accompagnement, ses modèles et ses skills |

Une entreprise qui développe son propre OS installe `indos-os`. Le développeur d'AVQN installe `indos-developpeur`, le référent `indos-referent`, le propriétaire les deux.

## Installer

```bash
claude plugin marketplace add ind-os/plugins
```

```bash
claude plugin install indos-developpeur@indos --scope user
```

Puis, sur un poste d'AVQN, la skill `preparer-le-poste`. Les mises à jour du marketplace s'activent dans `/plugin`, onglet des marketplaces.

## Changer un plugin

Un changement passe par une pull request que le propriétaire fusionne. La version de son `plugin.json` monte avec chaque changement : sans elle, un poste garde la version qu'il a.
