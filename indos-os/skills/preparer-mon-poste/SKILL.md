---
name: preparer-mon-poste
description: >-
  Prépare le poste d'un utilisateur qui travaille sur l'OS - les outils, l'identité git, la clé de
  l'entreprise rangée sur le poste et cachée à l'IA, le clone du dépôt de l'OS, où le connecteur du
  vrai OS est bloqué. À suivre quand
  l'utilisateur dit « prépare mon poste », « je veux travailler sur mon OS », ou qu'une commande
  du kit dit que la clé manque.
---

Les règles : `${CLAUDE_SKILL_DIR}/../../methode/methode.md`, sections « La clé de l'entreprise sur le poste » et « Le vrai OS
hors du dépôt ». Ce qui existe déjà se vérifie et se garde.

## Les étapes

1. **Les outils.** Vérifier chacun ; en installer un demande l'accord de l'utilisateur :
   - `git --version`, `gh auth status` (sinon l'utilisateur lance `gh auth login`) ;
   - `node -v`, qui rend 24 ou plus ; `docker info` ; `age --version`.

   Sur Mac : `brew install git gh node age`, et `brew install --cask orbstack` pour Docker, que
   l'utilisateur ouvre une fois. Sous Windows, tout se fait dans WSL 2 (Ubuntu), le dépôt cloné
   dans le disque de WSL, avec Docker Desktop relié à WSL.
2. **L'identité git.** `git config --global user.name` et `user.email` rendent une valeur ; sinon
   la demander et la poser. Puis `gh auth setup-git`.
3. **La clé cachée à l'IA.** Avec l'accord de l'utilisateur, ajouter à `permissions.deny` de
   `~/.claude/settings.json`, sans rien retirer : `Read(~/.config/indos/**)`,
   `Edit(~/.config/indos/**)` et, pour `cat`, `head`, `tail`, `less`, `more`, `sed`, `awk`, `grep`,
   `base64`, `xxd`, `od` et `cp`, `Bash(<commande> *.config/indos*)`. L'utilisateur relance l'IA.
4. **Le dépôt de l'OS.** Le propriétaire de l'OS l'ouvre à l'utilisateur sur GitHub ; l'utilisateur
   accepte l'invitation. Puis `gh repo clone <propriétaire>/<dépôt>`.
5. **La clé de l'entreprise.** Dans le clone, le nom à donner au fichier :
   `node -p "Object.keys(JSON.parse(fs.readFileSync('configuration.json')).cles)"`. L'utilisateur
   copie la clé que le propriétaire lui a donnée, puis la range lui-même, dans son terminal :

       mkdir -p -m 700 ~/.config/indos && pbpaste > ~/.config/indos/<nom>.txt \
         && chmod 600 ~/.config/indos/<nom>.txt

   Sous Windows, dans Ubuntu, `pbpaste` devient `powershell.exe -NoProfile -Command Get-Clipboard
   | tr -d '\r'`.
6. **Le connecteur du vrai OS, bloqué dans le clone.** Parmi ses outils, l'IA cherche ceux du
   connecteur de l'OS de l'entreprise : leurs consignes commencent par « Indos : les apps de
   l'entreprise », et chacun se nomme `mcp__<serveur>__<outil>`. Avec l'accord de l'utilisateur,
   ajouter `mcp__<serveur>` à `permissions.deny` de `.claude/settings.local.json`, dans le clone,
   sans rien retirer. L'utilisateur relance l'IA dans le clone. Sans ce connecteur parmi ses outils,
   l'étape se refait quand l'utilisateur le connecte, dans l'app de bureau comme dans le terminal.

## Les vérifications

- `git config --global user.name` et `user.email` rendent une valeur.
- `gh auth status` dit que l'utilisateur est connecté.
- Les droits de `~/.config/indos/<nom>.txt` sont 600 (`stat -f %Lp` sur Mac, `stat -c %a` sous
  Ubuntu) ; l'IA n'en a rien lu.
- `age-keygen -y ~/.config/indos/<nom>.txt` rend la clé publique que `configuration.json` porte
  pour `<nom>`.
- `node kit/src/commande.ts local voir` fait tourner l'OS à `http://localhost:8400`, sans rien
  installer d'autre, et `node kit/src/commande.ts local ia` y connecte l'IA avec le compte d'essai
  du propriétaire.
- Relancée dans le clone, l'IA n'a aucun outil du connecteur du vrai OS ; hors du clone, elle les
  a.
