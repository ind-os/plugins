---
name: ecrire-une-offre
description: Écrire l'offre d'une entreprise après son audit, à partir de sa fiche, de son rapport d'audit et de la conception du développeur, puis la rendre en PDF. À suivre quand le référent prépare une offre.
---

# Écrire une offre

Le parcours et les rôles : `${CLAUDE_PLUGIN_ROOT}/methode/accompagnement.md`. Le modèle et ses règles : `${CLAUDE_PLUGIN_ROOT}/modeles/offre.md`. Les données : `accompagnement/` du poste (sans lui, skill `preparer-le-poste`). La personne du poste et ses rôles : les consignes du poste.

1. **Ce qu'il faut avant.** La fiche et le rapport d'audit dans `accompagnement/Entreprises/<entreprise>/` ; la conception du développeur dans `chantiers/`, avec les chantiers et leur taille. Sans conception, demander au développeur et s'arrêter : la fiche attend `developpeur`.
2. **L'offre.** Écrire `accompagnement/Entreprises/<entreprise>/offres/offre-<AAAA-MM-JJ>.md` au modèle, dans les mots du référent : l'objectif, les défis et les citations viennent de la fiche ; les prix, de `accompagnement/Commun/grille-des-prix.xlsx`, au palier de l'entreprise.
3. **Le propriétaire.** Lui soumettre le prix et la remise ; la fiche attend `proprietaire` jusqu'à son accord.
4. **Le rendu.** Skill `rendre-un-pdf`, gabarit `offre`, avec l'équipe de `accompagnement/Commun/equipe/`.
5. **La fiche avance.** Étape 6 quand l'offre part, sur l'accord du référent ; une ligne d'historique.
