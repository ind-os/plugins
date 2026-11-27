# ind-os/plugins

Ce dépôt est le marketplace `indos` : les plugins Claude Code d'Indos, un par rôle, et le poste qu'ils partagent. Ce que porte chaque plugin et ce qu'il exige : `README.md`. Les mots sont ceux de `docs/lexique.md` d'`ind-os/indos`.

## Ce qui va où

- Un plugin porte un rôle, ou un socle que plusieurs rôles exigent, comme `indos-poste`. Un rôle est la liste des plugins qu'il installe. Ce qui sert plusieurs rôles va dans le plugin qu'ils exigent tous, par `dependencies` de son `plugin.json`.
- Un plugin se décrit sans le métier d'un autre : `indos-os` sert aussi l'entreprise qui développe son propre OS, et ne parle ni du kDrive, ni du poste, ni d'AVQN.
- Les règles d'un OS, son kit, son core et son catalogue sont dans `ind-os/indos` ; les commandes de la flotte, dans le pilotage, `ind-os/proprietaire`. Ce dépôt n'en tient aucune copie, et ses plugins y renvoient.
- `hooks/consignes.ts` est le même dans chaque plugin qui en a un, car un hook ne lit pas les fichiers d'un autre plugin. Il change dans tous à la fois, et `diff` les montre identiques.

## Comment un plugin est fait

- Les consignes du plugin sont dans `consignes.md`. Son hook de début de session les donne à l'IA, avec `{poste}` (le chemin du poste), `{plugin}` (celui du plugin) et `{personne}` (la personne de `poste.json`) remplacés. Une consigne dit une règle du rôle, et renvoie à la méthode pour le reste.
- Un hook ne dit rien hors de ce qui le concerne : hors d'un poste pour les plugins de l'équipe, hors d'un dépôt d'OS pour `indos-os`. Les plugins sont activés pour tout le compte.
- Les skills d'`indos-os` sont la base qu'enrichissent les skills des entreprises, dans le `.claude/skills/` de leur dépôt : chacune fait un geste net, sous un nom stable, pour qu'une skill d'entreprise la suive par ce nom. Un renommage ou un geste retiré casse les skills des entreprises, et se fait comme un remplacement : la nouvelle skill d'abord, l'ancienne une fois les entreprises prévenues.
- Une skill dit les gestes et leurs vérifications, et renvoie à la méthode pour les règles. Un fichier du plugin s'y écrit `${CLAUDE_PLUGIN_ROOT}/…`, un dossier du poste par son chemin depuis le poste, comme `accompagnement/Entreprises/<entreprise>/`.
- Un hook est en TypeScript, lancé par Node 24 sans construction (`node fichier.ts`) : 2 espaces, des fonctions déclarées, des commentaires en français, aucune dépendance.

## Changer un plugin

- Le poste lit les plugins depuis ce clone : une modification compte à la session suivante, sur le poste qui la fait.
- Chaque changement fait monter `version` dans le `plugin.json` du plugin, et jamais dans `marketplace.json` : un autre poste garde sa version tant qu'elle ne monte pas.
- Avant le commit, `claude plugin validate .` passe, ainsi que `claude plugin validate <plugin>` pour chaque plugin changé. Un hook changé se lance à la main, avec `CLAUDE_PLUGIN_ROOT` et `CLAUDE_PROJECT_DIR` posés, et pour le verrou un appel d'outil en JSON sur l'entrée. On le lance dans un dossier d'entreprise du poste, et dans `/tmp`, où il ne dit rien.
- Un changement passe par une pull request que le propriétaire fusionne. Ses commits portent 🤖.
- Le dépôt est public : aucun secret, aucune donnée d'une entreprise, aucun taux ni aucune annexe d'un référent.
- La documentation décrit l'état cible, comme s'il avait toujours été ainsi. Le pourquoi d'un changement va dans son commit.
