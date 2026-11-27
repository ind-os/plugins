---
name: charger-une-entreprise
description: Charger une entreprise sur le poste - son dossier dans entreprises/, un clone par dépôt, et projet/, le lien vers son dossier du kDrive. À suivre quand une entreprise est confiée à la personne du poste, qu'elle reçoit son dépôt, ou quand son dossier manque.
---

# Charger une entreprise

Ce que tient le poste et le dossier d'une entreprise : les consignes du poste, données au début de la session. Sans `accompagnement/` : skill `preparer-le-poste`.

1. **Le dossier du kDrive.** L'entreprise a son dossier dans `accompagnement/Entreprises/`, sous son nom, avec `fiche.md`. Un nom qui n'y est pas arrête le geste : le dire.
2. **Le dossier de l'entreprise.** `entreprises/<entreprise>/`, sous le nom exact de son dossier du kDrive, et dedans `projet`, le lien symbolique vers ce dossier, par son chemin réel : `ln -s "$(cd "accompagnement/Entreprises/<entreprise>" && pwd -P)" "entreprises/<entreprise>/projet"`.
3. **Les dépôts.** Un clone par dépôt que dit la fiche, `depot` dans son en-tête, sous le nom du dépôt, comme `os-boulimos` : `git clone <depot> "entreprises/<entreprise>/<dépôt>"`. Un dépôt déjà cloné se met à jour par `git -C <clone> pull --ff-only`. Un dépôt dont la personne n'a pas l'accès se dit, et le reste se charge. Un référent qui n'est pas développeur lit le clone, et n'y écrit pas.
4. **La vérification.** `projet/fiche.md` se lit depuis le dossier de l'entreprise ; chaque clone est sur `main`, à jour avec GitHub, et `git status` n'y montre rien.

Le dossier de l'entreprise s'ouvre ensuite dans Claude Code ; `entreprises/` s'ouvre pour en travailler plusieurs.
