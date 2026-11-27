---
entreprise: <nom de l'entreprise>
date: AAAA-MM-JJ
objectif: <son objectif en une phrase, dans ses mots>
equipe:
  referent: <fiche de l'équipe, comme chloe>
  developpeur: <fiche de l'équipe>
  coach: <fiche de l'équipe, ou à retirer>
defis:
  - titre: <le défi, en quelques mots>
    citation: <ce qu'elle en a dit pendant l'audit>
    detail: <ce que ça lui coûte>
avant_apres:
  - avant: <ce qui se passe aujourd'hui>
    apres: <ce qu'elle fera avec son OS, en gestes>
os:
  outils: [<ses outils d'aujourd'hui, branchés à l'OS>]
  apps_metier: [<les apps développées pour elle>]
  apps_catalogue: [<les apps du catalogue qu'elle reçoit>]
  explication: <comment son OS marche, en deux phrases>
phases:
  - resultat: <le résultat de la phase, dit en gestes>
    chantiers:
      - { taille: S, nom: <le chantier> }
    prix: 0
    ferme: true
    options:
      - { nom: <l'option>, prix: 0 }
  - resultat: <le résultat de la phase suivante>
    chantiers:
      - { taille: M, nom: <le chantier> }
    prix: 0
remise:
  raison: <Remise de lancement, et sa raison>
  montant: 0
suivi_mensuel:
  formule: <Les mises à jour, ou La maintenance>
  montant: 0
gain:
  heures_par_semaine: 0
  cout_horaire: 0
references: []
licence: <date de la version de la licence>
---

<!--
Le référent écrit l'offre, dans ses mots, dans le dossier `offres/` de l'entreprise. Il consulte le
développeur pour la conception, les chantiers et leur taille, et le propriétaire pour le prix et la
remise. Elle part chez l'entreprise avec le rapport d'audit ; le rendu : skill `rendre-un-pdf`,
gabarit `offre`.

L'offre part de l'entreprise : son objectif, ses défis et ses citations viennent de la fiche et du
rapport d'audit. Elle montre ce que l'entreprise pourra faire avant de parler de technique.

- objectif : la couverture ; une phrase.
- defis : trois au plus ; la citation dans ses mots, entre guillemets à l'affichage.
- avant_apres : trois au plus ; « après » dit un geste, jamais une fonctionnalité.
- equipe : les fiches de `Commun/equipe/` ; une personne qui tient plusieurs rôles s'affiche une fois.
- os : le schéma de son OS ; les apps développées pour elle en jaune, celles du catalogue en charbon.
- gain : les heures par semaine que l'OS lui rend, et le coût d'une heure de travail, tirés de la
  fiche ; l'offre en tire le temps rendu par an, sa valeur, et le nombre de mois du retour. Sans ces
  chiffres, la page ne s'affiche pas.
- references : les entreprises qui ont accepté d'être citées ; vide sans leur accord.
- phases : trois au plus ; chaque chantier avec sa taille, au prix de la grille ; « ferme » pour la
  première phase, les suivantes au prix estimé.

Les phases. Une phase est un bout de chemin qui se termine par quelque chose que l'entreprise
utilise. Elle a un résultat, dit en gestes, et un prix en un seul montant.
- La première phase fait entrer : le pack de départ et un premier chantier utile.
- Chaque phase suivante commence par son atelier de conception, qui confirme la taille de ses
  chantiers. Les prix des phases suivantes tiennent six mois.
- L'entreprise s'engage phase par phase : chaque engagement a son devis.
- Une petite vente se fait en une seule commande, sans phases : une seule phase, au prix ferme.

Les options. Une option vit dans une phase : AVQN développe les chantiers de la phase, à la place de
l'entreprise ; une app du catalogue ; la cession de ce qu'AVQN développe pour elle ; de la formation
en plus.

La remise de lancement se décide à chaque offre, avec le propriétaire : son taux, les phases qu'elle
couvre, sa durée. Le prix de la grille reste visible, et la remise tient sur une ligne, avec sa raison.

Ce que l'entreprise lit : des résultats, des chantiers S, M ou L, et des montants. Le prix d'une
journée reste chez AVQN.
-->
