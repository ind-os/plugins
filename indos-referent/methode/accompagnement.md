# L'accompagnement d'AVQN

Ce document est la méthode d'accompagnement d'AVQN, que porte le plugin `indos-referent` avec ses modèles et ses skills : le parcours d'une entreprise, du premier contact à la fin de la relation, et les rôles de l'équipe. L'équipe travaille avec Claude Code, chacun par son siège dans l'équipe Claude d'AVQN : aucun autre compte d'IA ne traite les données des entreprises. Les données des entreprises sont dans le kDrive d'AVQN, section « Les données ». Les mots sont ceux d'Indos, `docs/lexique.md` dans `ind-os/indos`. Un membre de l'équipe propose un changement de la méthode par une pull request ; le propriétaire la fusionne.

L'accompagnement est la relation d'AVQN avec une entreprise, menée par son référent. Il est compris dans tout ce qu'elle achète.

## Les rôles

- **Le référent** est l'interlocuteur de l'entreprise, du premier contact à la fin de la relation. Il écrit son offre, dans ses mots, en consultant le développeur et le propriétaire. Entre les étapes, il tient avec elle les points qu'il juge utiles et lui propose de nouveaux chantiers.
- **Le coach** donne les formations.
- **Le développeur** conçoit les chantiers et leur taille, et tient l'OS de l'entreprise, par le pilotage.
- **Le propriétaire** tient la grille des prix, les remises, les devis, les factures et les accès de l'équipe.

Le référent travaille en indépendant, selon `contrats/referent.md` du plugin ; ses taux sont dans une annexe propre à chacun, dans `Accompagnement/Proprietaire/annexes/` du kDrive. Une personne peut tenir plusieurs rôles. Chaque entreprise a un référent et un développeur, et un coach quand elle suit une formation. Un prospect est au référent qui a créé sa fiche.

L'entreprise parle à son référent. Le coach la forme. Une panne va à la fois à son référent et au développeur de son OS. Le référent est au courant de tout ce qui se dit avec l'entreprise.

## Le parcours d'une entreprise

| | Étape | Qui | Entre | Sort |
|---|---|---|---|---|
| 1 | Le premier contact | le référent | un prospect | le dossier de l'entreprise et sa fiche |
| 2 | L'invitation à l'audit | le référent | la fiche | la date, et l'accord ou le refus de l'enregistrement |
| 3 | L'audit gratuit | le référent | le plan de séance | le transcript, ou les notes |
| 4 | La fiche et le rapport d'audit | le référent, avec Claude | le transcript | les besoins dans la fiche ; le rapport d'audit, qu'un membre de l'équipe relit quand le référent le demande |
| 5 | L'offre | le référent ; le développeur et le propriétaire, qu'il consulte | la fiche, le rapport d'audit, la grille des prix | la conception et ses chantiers, par le développeur ; l'offre, par le référent ; le prix, la remise et le devis, par le propriétaire |
| 6 | L'envoi et la négociation | le référent ; le propriétaire pour une remise | le rapport, l'offre, le devis | l'accord, ou « sans suite » |
| 7 | La signature | le référent ; le propriétaire pour la facture | le devis accepté, les conditions générales, la licence | la facture d'acompte |
| 8 | La naissance de l'OS | le développeur | la conception et ses chantiers | le dépôt de l'OS, son plan, les chantiers en issues |
| 9 | Chaque chantier | le développeur, le référent | les issues du chantier | le chantier vérifié, recetté, en ligne ; la facture du solde |
| 10 | La garantie, puis les mises à jour ou la maintenance | le développeur ; le référent pour le contact | l'OS en ligne | les factures de la formule |
| 11 | Une nouvelle demande | le référent | ce que l'entreprise demande | la demande écrite, puis l'étape 5 |
| 12 | La fin de la relation | le référent, le propriétaire | les conditions générales, la licence | |

Le référent propose l'audit gratuit à qui il veut.

Un chantier passe par deux contrôles. **La vérification** : le développeur montre le chantier au référent, critère par critère. **La recette** : le référent la mène avec l'entreprise, qui vérifie chaque critère d'acceptation ; sa fin déclenche la facture du solde. Quand l'entreprise est son propre développeur, la recette est la seule.

À la mise en ligne de l'OS, le coach donne la formation du pack de départ.

## L'audit gratuit

L'audit gratuit est une séance d'une heure et demie, en visio ou sur place, où le référent recueille les besoins de l'entreprise. Son déroulé et ses questions : `modeles/plan-de-seance.md`. La séance s'enregistre au téléphone ; Whisper la transcrit sur le poste du référent, sans que l'enregistrement le quitte. Le transcript va dans `audit/`, et l'enregistrement s'efface. Ce qu'est Indos vient après le recueil, pour que l'entreprise parle d'abord de ses besoins, et avant le budget, pour qu'elle sache ce qu'elle chiffre.

L'entreprise reçoit ensuite deux documents :

- **le rapport d'audit**, au modèle `modeles/rapport-d-audit.md` : ce que l'IA peut faire pour elle, à partir de ses besoins réels, avec Indos ou d'autres outils ;
- **l'offre**, au modèle `modeles/offre.md` : ce qu'AVQN propose d'en réaliser avec Indos, en phases et en chantiers S, M ou L, au prix de la grille.

Le rapport voit large, l'offre choisit. La conception ne part pas chez l'entreprise.

## Les données

Les données de l'accompagnement sont dans le dossier `Accompagnement/` du kDrive d'AVQN. Tout ce qui concerne une entreprise est dans son dossier, que toute l'équipe voit : sa relation avec AVQN comme son OS.

```
Accompagnement/               le propriétaire voit tout
  Commun/                     toute l'équipe, en lecture
    grille-des-prix.xlsx
    prestations.md            ce que contient chaque ligne de la grille
    conditions-generales.md
    licence.md
    equipe/                   une fiche par personne : son nom, sa photo, son texte
  Entreprises/                toute l'équipe, en modification
    <entreprise>/
      fiche.md                au modèle modeles/fiche.md
      rapport-d-audit.md
      audit/                  le transcript ou les notes
      offres/                 les offres, les devis et les contrats, envoyés et signés, avec leurs prix et leurs remises
      echanges/               les mails et les comptes rendus
      chantiers/              la conception, chaque chantier vendu puis livré, sans prix
      demandes/               une demande par fichier, datée
  Proprietaire/               le propriétaire seul
    annexes/                  l'annexe des taux de chaque référent
```

Les factures sont dans AVQNOS, avec leur PDF, et ne se recopient pas dans le kDrive.

La fiche est l'état de l'entreprise, et le seul. kDrive garde les versions et la corbeille de ce que l'équipe modifie. Les taux convenus avec chaque référent et la rémunération de l'équipe sont dans `Proprietaire/`, que le propriétaire ne partage avec personne.

Le plugin `indos-referent` tient la méthode et ses modèles, qui changent avec les skills ; `Commun/` tient l'offre, que l'équipe lit et que le propriétaire change. Un modèle rempli pour une entreprise va dans son dossier. La grille des prix, les prestations et les conditions générales font foi dans `Commun/` ; les conditions générales jointes à un devis en sont le PDF. `licence.md` est une copie du `LICENCE.md` d'`ind-os/indos`, et dit de quel commit : pour une entreprise, fait foi le `LICENCE.md` du dépôt de son OS. Une nouvelle version de la licence se recopie dans `Commun/`.

`Accompagnement/` est dans l'espace privé du propriétaire, et chaque membre de l'équipe est un utilisateur du kDrive d'AVQN. Le partage entre utilisateurs se synchronise sur le poste, dans le dossier « Partagé ». Sur chaque poste, `accompagnement/` est le lien vers ces dossiers : les skills y lisent et y écrivent comme dans des fichiers locaux. `poste.json` dit la personne du poste et ses rôles ; skill `preparer-le-poste` du plugin `indos-poste`. L'espace d'équipe, `Common documents`, est vu de tous les utilisateurs du kDrive : rien de l'accompagnement n'y va.

## Les documents envoyés

Un document part chez l'entreprise en PDF, à la charte d'Indos, signé AVQN : skill `rendre-un-pdf`. La charte et son outil sont le dépôt public `ind-os/charte`, cloné sous `produit/charte/` du poste. `emetteur.json` du plugin dit qui émet les documents.

Le devis signé, avec les conditions générales et la licence, fait contrat ; il couvre un engagement, une phase de l'offre ou une petite commande, au modèle `modeles/devis.md`. Les factures s'émettent dans AVQNOS.

## La frontière entre le kDrive et le dépôt de l'OS

Le kDrive tient la relation avec l'entreprise ; le dépôt de son OS tient son système.

Un document va dans le dépôt de l'OS si l'entreprise en a besoin pour faire vivre son OS : les spécifications, le schéma de la base, la documentation technique, les décisions de conception. Il est à elle, avec le code. Le reste va dans le kDrive, et il est à AVQN.

Le chantier fait le pont. Il naît dans le kDrive, dans la conception d'une offre ou dans une demande ; vendu, il entre dans le plan du dépôt de l'OS, avec ses issues, que le développeur y crée. À la naissance de l'OS, le développeur porte aussi la conception dans le dépôt, où elle devient sa documentation.

Le référent reçoit le dépôt de l'OS de son entreprise en lecture, quand il en a besoin pour l'accompagner : il le clone dans `entreprises/<entreprise>/<dépôt>` du poste, par la skill `charger-une-entreprise`, et Claude l'y aide à comprendre l'OS. Il n'y écrit pas.

## À trancher

- Où se fait la recette, quand l'OS d'un chantier tourne en local sur le poste du développeur.
- Comment l'entreprise signale une panne ou fait un retour, au référent et au développeur à la fois.
- La rémunération du référent et sa commission.
- Le nom de la rubrique « Accompagnement » de la grille des prix, qui réunit des prestations payantes.
- Les tranches de budget que propose l'audit gratuit.
- Le tri des prospects avant l'audit gratuit, quand l'expérience le dira.

## À écrire

- Le support de « Ce qu'est Indos ».
- Le modèle de la conception.
- La skill du développeur : concevoir les chantiers d'une offre.
