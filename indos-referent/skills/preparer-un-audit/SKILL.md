---
name: preparer-un-audit
description: Préparer l'audit gratuit d'un prospect - créer son dossier et sa fiche dans le kDrive, préparer l'invitation qui demande l'accord d'enregistrer. À suivre quand le référent a un nouveau prospect ou fixe un audit.
---

# Préparer un audit

Le parcours, le rangement et les rôles : `${CLAUDE_PLUGIN_ROOT}/methode/accompagnement.md`. Les données : `accompagnement/` du poste (sans lui, skill `preparer-le-poste`). La personne du poste et ses rôles : les consignes du poste.

1. **Pas de doublon.** Chercher l'entreprise dans `accompagnement/Entreprises/`. Si elle y est déjà, s'arrêter et le dire.
2. **Le dossier.** Créer `accompagnement/Entreprises/<entreprise>/fiche.md` au modèle `${CLAUDE_PLUGIN_ROOT}/modeles/fiche.md` : étape 2, le rôle qui attend `referent`, le référent, ses contacts. Ce que les premiers échanges disent déjà va dans ses besoins, avec ce qui reste à demander, et dans son historique. Créer `accompagnement/Entreprises/<entreprise>/audit/`, `offres/` et `echanges/`.
3. **L'invitation.** Préparer le mail, ou la confirmation quand la date est déjà fixée : la durée (1 h 30), le déroulé, ce que l'entreprise recevra, la demande d'accord pour l'enregistrement, et qui doit être là. Il part sur l'accord du référent.
4. **La fiche.** Noter la date de l'audit dans le prochain geste, et une ligne d'historique.
