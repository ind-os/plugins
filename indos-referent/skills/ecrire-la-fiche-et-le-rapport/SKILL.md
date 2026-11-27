---
name: ecrire-la-fiche-et-le-rapport
description: Après l'audit gratuit, tirer du transcript ou des notes les besoins de la fiche et le rapport d'audit de l'entreprise. À suivre dès que le transcript est dans le dossier audit de l'entreprise.
---

# Écrire la fiche et le rapport d'audit

Le parcours et le rangement : `${CLAUDE_PLUGIN_ROOT}/methode/accompagnement.md`. Les données : `accompagnement/` du poste (sans lui, skill `preparer-le-poste`). La personne du poste et ses rôles : les consignes du poste.

1. **La source.** Le transcript ou les notes, dans `accompagnement/Entreprises/<entreprise>/audit/`. Un enregistrement se transcrit d'abord sur le poste : `faster-whisper`, modèle `medium`, en français (environ une heure pour une séance de 1 h 30) ; le transcript se range dans `audit/`, puis l'enregistrement s'efface. Lire le transcript en entier.
2. **La fiche.** Remplir les besoins de `accompagnement/Entreprises/<entreprise>/fiche.md`, section par section, comme le dit `${CLAUDE_PLUGIN_ROOT}/modeles/fiche.md` : dans les mots de l'entreprise, avec les heures par semaine et le coût d'une heure. Ne rien recopier de la conversation au-delà de ce qu'il faut pour chiffrer.
3. **Le rapport.** Écrire `accompagnement/Entreprises/<entreprise>/rapport-d-audit.md` au modèle `${CLAUDE_PLUGIN_ROOT}/modeles/rapport-d-audit.md`, avec son ton.
4. **La vérification.** Chaque besoin du rapport se retrouve dans la fiche ; aucun prix dans le rapport ; aucune donnée du transcript qui ne serve pas.
5. **La fiche avance.** Étape 4 ; le rôle qui attend : `referent`, ou `proprietaire` si le référent demande une relecture ; une ligne d'historique.
