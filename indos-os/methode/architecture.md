# L'architecture d'Indos

Ce document dit comment Indos est pensé : pourquoi l'OS d'une entreprise tient dans un seul dépôt, où se range un besoin, et comment il se découpe en apps génériques et en apps métier. Les règles, `docs/regles.md`, disent comment l'OS est fait ; le contrat d'une app, `docs/contrat.md`, dit ce qu'une app et le core se doivent. Ce document dit pourquoi, et aide à décider. Les mots sont ceux de `docs/lexique.md`.

## Le dépôt

Chaque principe dit ce qu'il protège, et renvoie à la règle qui le pose.

- **L'OS tient dans un dépôt qui appartient à l'entreprise.** Sa configuration, ses secrets chiffrés, son code et sa méthode y sont réunis, sur son GitHub (règles 1 et 2). L'entreprise lit tout ce qui fait son OS, et le réinstalle seule sur un nouveau serveur (règle 23).
- **Le core est petit et commun à toutes les apps.** Il tient les comptes, les permissions, la connexion de l'IA, le journal d'audit, les notifications et les fichiers (règles 5 à 7). Une app ne refait aucune de ces fonctions, et une permission se vérifie à un seul endroit.
- **Les apps sont isolées.** Chacune a sa base et son image, et ne parle qu'au core et aux services dont elle se sert (règles 5 et 20). Ajouter une app ou un service, c'est ajouter son dossier ; le retirer, c'est le supprimer (contrat, « Le dossier d'une app », « Un service »). Une app en panne n'arrête qu'elle.
- **La bibliothèque partage le code, jamais les données.** Une app importe les modules dont elle a besoin (règle 18) ; ses données restent dans sa base.
- **Une app sert d'abord l'IA.** Ses outils sont ce qu'elle sait faire, et ses écrans appellent les mêmes outils, par le core (contrat, « Ce qu'une app doit au core »). Ce que l'utilisateur fait d'un clic, l'IA le fait aussi, et le journal d'audit écrit l'un et l'autre.
- **Les données restent chez leur fournisseur quand elles en ont un.** Courrier lit les mails sur le serveur IMAP, Contacts les fiches sur le serveur CardDAV, kDrive les documents par l'API d'Infomaniak. La base de l'app garde les comptes connectés. Aucune copie n'est à synchroniser.
- **Ce qui est en ligne est testé ensemble.** Une version réunit le core, la bibliothèque et chaque app, construits et testés ensemble (règle 21). Ce qui marche sur le poste marche en ligne : ce sont les mêmes images (règle 20).

## Où se range un besoin

| Le besoin | Où il va |
| --- | --- |
| Une app du catalogue le couvre déjà | Cette app : il ne se développe pas |
| L'accès à un fournisseur ou à un standard, ou une fonction que toute entreprise demande, sans rien de son métier | Une app générique |
| Ce que fait l'entreprise, qu'aucune app générique ne tient | Une app métier |
| Du code dont plusieurs apps ont besoin, sans donnée : un composant d'écran, la connexion d'un compte | Un module de la bibliothèque |
| Ce dont toute app a besoin, sur les comptes, les permissions, le journal d'audit, les notifications ou les fichiers | Le core |
| Ce qui n'existe qu'avec plusieurs utilisateurs | L'option Équipe (règle 9) |
| Ce qu'un tiers développe sans accès au dépôt de l'OS | Un dépôt à part (règle 4) |

AVQN maintient le core, le catalogue, la bibliothèque et le kit (règle 27) : dans l'OS d'une entreprise, un besoin qui y revient se demande à AVQN.

## Le découpage en apps

Toutes les apps ont la même forme et les mêmes possibilités (règle 12), et rien ne distingue une app générique d'une app métier dans son manifeste. Chacune se découpe selon sa logique ; pour l'une comme pour l'autre, une app réunit les objets qui changent ensemble.

### Une app générique

- Elle ne sait rien du métier de l'entreprise : elle sert chaque entreprise telle quelle, et les apps métier l'appellent.
- Elle couvre un périmètre net : un fournisseur, par son API, comme kDrive ; un standard, par son protocole, comme Courrier pour IMAP et Contacts pour CardDAV ; ou une fonction, comme produire une facture QR. Une app d'un standard sert chaque fournisseur qui le parle.
- Elle est complète sur ce périmètre, et n'en sort pas. kDrive tient les documents du kDrive ; les DNS d'Infomaniak n'y sont pas, bien que le fournisseur soit le même.
- Chaque fournisseur a son app : un Google Drive a la sienne, à côté de kDrive. Quand un fournisseur change son API, seule son app change, et seules les entreprises qui l'ont la mettent à jour.
- Un logiciel tiers que l'OS fait tourner est un service (contrat, « Un service »), comme Baïkal, le serveur CalDAV et CardDAV de l'OS. Une app dit dans son manifeste les services dont elle se sert, et leur parle comme à tout serveur du standard.

### Une app métier

Elle tient ce que fait l'entreprise, ce qu'aucune app générique ne tient, et appelle les apps génériques pour le reste. L'entreprise la développe sur mesure, ou AVQN la met au catalogue. Elle se découpe par quatre questions, dans cet ordre.

1. **Qui y a accès ?** Une app s'ouvre entière, à toute l'équipe, à des groupes ou au propriétaire seul (contrat, « L'accès à une app »). Ce qui est réservé à quelques-uns va dans une app à part.
2. **Qu'est-ce qui change ensemble ?** Les objets liés dans une même base, qui se créent, se modifient et se suppriment ensemble, vont dans la même app : une app ne lit pas la base d'une autre.
3. **Qu'est-ce qui est à quelqu'un ?** Les données d'une app ne sont à personne ; ce qui est à quelqu'un est une ressource (règle 17). Cette question ne coupe pas une app : elle dit ce que l'app déclare au core.
4. **Qu'est-ce qu'une app générique tient déjà ?** Ce qu'une app générique ou un standard tient y reste : un rendez-vous dans un agenda, une personne dans un carnet d'adresses, une facture dans une app de facturation. L'app métier tient ce qu'ils n'ont pas.

Chaque chose fait foi à un seul endroit. Quand plusieurs apps la montrent, une seule l'écrit ; les autres la lisent.

Par exemple, une école qui vend des formations :

- Les formations, leurs sessions, leurs cours, les inscriptions, les présences et les certificats sont liés les uns aux autres : ils font une app métier, Formations. Son site public, qui montre les formations et prend les inscriptions, est son hôte public.
- Les factures et leurs paiements sont dans l'app de facturation, que Formations appelle pour facturer une inscription.
- Les dates des sessions sont dans l'agenda de l'OS. Seule Formations les écrit ; les téléphones de l'équipe les lisent.
- Les finances de l'école, réservées à la direction, sont une app à part.

### Une app qui grandit, une app nouvelle, deux apps reliées

- **Une app grandit** quand le besoin porte sur ses objets, ou sur des objets liés aux siens : les brouillons de Courrier vivent avec leur boîte. Une app générique grandit dans son périmètre.
- **Une app nouvelle naît** quand les objets du besoin ne changent avec ceux d'aucune app : un fournisseur, un standard ou une fonction qu'aucune app ne couvre, une part du métier qu'aucune app ne tient, ou ce qui est réservé à d'autres utilisateurs.
- **Deux apps se relient** quand l'une se sert de ce que l'autre tient. Celle qui appelle nomme l'autre dans le `appelle` de son manifeste, et l'appel passe par le core (contrat, « Appeler l'outil d'une autre app »). Un outil qu'une autre app appelle est un engagement : il évolue sans casser les apps qui l'appellent (règle 28). Deux apps qui s'appellent l'une l'autre à chaque geste sont une seule app.
