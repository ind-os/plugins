---
name: deployer-une-version
description: >-
  Met en ligne la version de main - attendre sa CI, la déployer par le kit, vérifier l'OS en
  ligne, refaire avec l'utilisateur les critères qui demandent l'OS réel, puis en faire une release
  qui dit les chantiers qu'elle porte. À suivre quand un chantier vient de passer « Fait », ou que
  l'utilisateur dit « déploie », « mets en ligne » ou « on publie ».
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, section « Le cycle ». Le projet et ses champs :
la skill `planifier-les-chantiers`, section « Le projet et ses champs ». Le poste
est prêt, la clé de l'entreprise rangée (skill `preparer-mon-poste`).

## Les étapes

1. **La version.** `git switch main && git pull --ff-only`. Les chantiers qu'elle porte : ceux
   fusionnés depuis la dernière release (`gh release view --json tagName,createdAt`, puis
   `gh pr list --state merged --search "merged:>=<date>"`), et les critères notés dans leur issue
   pour l'OS réel.
2. **La CI de `main`** pour ce commit, qui range les images :
   `gh run list --branch main --limit 1 --json databaseId,headSha` donne le run du commit
   (`git rev-parse HEAD`), puis `gh run watch <id> --exit-status`. Une CI rouge : rien ne se
   déploie, et l'utilisateur le sait.
3. **Le déploiement.** `node kit/src/commande.ts deployer`. Le kit dit le nom de la version
   déployée.
4. **L'OS en ligne.** Pour chaque app des chantiers, `https://<domaine>/<app>/sante` rend 200, le
   domaine venant de `configuration.json`
   (`node -p "JSON.parse(fs.readFileSync('configuration.json')).domaine"`). Puis les critères
   notés pour l'OS réel, refaits avec l'utilisateur. Au besoin,
   `node kit/src/commande.ts journaux <app>`. Un non en ligne rouvre le chantier
   (`gh issue reopen`) au Status « En cours » : la correction repart sur une nouvelle branche et
   une nouvelle pull request (skill `developper-un-chantier`).
5. **La release** : `gh release create <version> --target <commit> --title "<version>"
   --generate-notes`, avec le nom de version que le kit a dit. Ses notes listent les pull requests
   des chantiers.

## Les vérifications

- La CI de `main` est verte pour le commit déployé.
- Chaque app des chantiers répond sur l'OS en ligne.
- Chaque critère noté pour l'OS réel est refait, et la version a sa release.
