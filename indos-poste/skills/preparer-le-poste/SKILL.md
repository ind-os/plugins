---
name: preparer-le-poste
description: Préparer le poste d'un membre de l'équipe d'AVQN - entreprises/, accompagnement/, le lien vers le kDrive, produit/, pilotage/ selon ses rôles, et poste.json. À suivre une fois par poste, quand un rôle s'ajoute, ou quand une skill ne trouve pas accompagnement/ ou poste.json.
---

# Préparer le poste

Ce que tient le poste : les consignes du poste, données au début de la session.

1. **Le dossier du poste.** Sans poste, demander où il naît, et y créer `entreprises/`.
2. **La personne et ses rôles.** Demander son nom, tel que l'écrivent les fiches (`referent`, `developpeur`, `coach`), et ses rôles parmi `referent`, `developpeur`, `coach`, `proprietaire`. Écrire `poste.json` : `{"nom": "<nom>", "roles": ["<rôle>", …]}`.
3. **Le kDrive.** Demander où l'app kDrive synchronise `Accompagnement/` sur ce poste : sous le dossier du kDrive pour le propriétaire ; dans le dossier « Partagé » pour un autre membre de l'équipe, qui y reçoit `Commun/` et `Entreprises/`. Créer `accompagnement`, le lien symbolique vers le dossier qui les tient : `ln -s "<dossier>" accompagnement`.
4. **Les clones.** `git clone https://github.com/ind-os/charte.git produit/charte`. Pour le développeur et le propriétaire, aussi `git clone https://github.com/ind-os/indos.git produit/indos` et `git clone https://github.com/ind-os/proprietaire.git pilotage`. Un clone déjà là se met à jour par `git -C <clone> pull --ff-only`.
5. **La vérification.** `ls accompagnement/Entreprises` montre les entreprises, `accompagnement/Commun/grille-des-prix.xlsx` existe, et `poste.json` dit la personne et ses rôles.
