---
numero: D-AAAA-NNN
date: AAAA-MM-JJ
valable_jusqu_au: AAAA-MM-JJ
objet: <Phase 1 · son résultat, ou ce que la commande livre>
referent: <prénom nom>
entreprise:
  nom: <nom de l'entreprise>
  adresse: |
    <rue et numéro>
    <NPA localité>
  contact: <prénom nom, courriel>
lignes:
  - designation: Le pack de départ
    detail: <le palier>
    montant: 0
  - designation: <Chantier S, M ou L · son résultat>
    montant: 0
remise:
  raison: <Remise de lancement, et sa raison>
  montant: 0
suivi_mensuel:
  formule: <Les mises à jour, ou La maintenance>
  montant: 0
licence: <date de la version de la licence>
---

<!--
Le devis engage l'entreprise : signé, avec les conditions générales et la licence, il fait contrat.
Un devis couvre un engagement : une phase de l'offre, ou une petite commande sans phases.
Le propriétaire l'écrit à partir de l'offre retenue, dans le dossier `offres/` du référent.

- numero : D, l'année, puis un numéro à trois chiffres que le propriétaire attribue.
- lignes : une ligne par prestation de la grille, au prix de la grille ; le total se calcule.
- remise, suivi_mensuel : à retirer quand le devis n'en a pas.
- paiement : à ajouter quand le devis prévoit un autre paiement que celui des conditions générales.

Le texte sous l'en-tête, facultatif, dit ce que contient l'engagement ; il s'affiche sous l'objet.
Le rendu : skill `rendre-un-pdf`, gabarit `devis`.
-->
