---
name: rendre-un-pdf
description: Rendre un document de l'accompagnement (devis, conditions générales, rapport d'audit, offre) en PDF à la charte d'Indos, signé AVQN, pour l'envoyer à une entreprise. À suivre dès qu'un document doit partir en PDF.
---

# Rendre un document en PDF

La charte, ses gabarits et son outil : `produit/charte/README.md` du poste. L'émetteur : `${CLAUDE_PLUGIN_ROOT}/emetteur.json`.

1. **La charte est là, à jour.** Sans `produit/charte/` : skill `preparer-le-poste`. Sinon : `git -C produit/charte pull --ff-only`. Sans `produit/charte/node_modules/` : `npm install --prefix produit/charte`.
2. **Le rendu.** Depuis la racine du poste :

   ```
   node produit/charte/outils/pdf.mjs <document.md> --gabarit <document, devis ou offre> --emetteur "${CLAUDE_PLUGIN_ROOT}/emetteur.json" --equipe accompagnement/Commun/equipe --sortie <fichier.pdf>
   ```

   Un devis suit `${CLAUDE_PLUGIN_ROOT}/modeles/devis.md`, avec le gabarit `devis` ; une offre, `${CLAUDE_PLUGIN_ROOT}/modeles/offre.md`, avec le gabarit `offre`. Le PDF se range à côté du document, dans le dossier de l'entreprise, sous `accompagnement/Entreprises/` ; jamais dans un dépôt.
3. **La vérification.** Lire chaque page du PDF : aucun texte coupé, aucun titre seul en bas de page, la signature et la pagination en pied de page. Pour un devis : une page, chaque montant au prix de la grille, le total juste. Pour une offre : chaque page tient sans texte coupé, chaque personne de l'équipe une fois, sa photo à jour. Un défaut de la charte se corrige dans `ind-os/charte`, par une pull request.
4. **L'envoi.** Le PDF part sur l'accord du référent ; un devis, avec le PDF des conditions générales.
