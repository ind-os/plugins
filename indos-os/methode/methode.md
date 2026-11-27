# La méthode de développement

La méthode de développement réunit les étapes et les consignes que suit l'IA pour faire évoluer l'OS. Elle est celle du plugin `indos-os`, qu'AVQN maintient ; l'entreprise l'enrichit de ses propres skills, à la section « Les skills de l'entreprise ». L'IA la lit avant de changer le dépôt de l'OS. Les mots sont ceux de `docs/lexique.md` du dépôt de l'OS.

La méthode guide le développement. Ce que l'entreprise achète ou vend se décide ailleurs : rien dans le projet GitHub ne fait foi pour un contrat. Une phase, une taille ou un ordre sont des repères pour travailler.

## Le cycle

1. **L'idée.** Une idée se note en un brouillon du projet GitHub de l'OS. Elle ne promet rien.
2. **Le plan.** Un chantier prévu porte un but et une taille estimée. Les idées qu'on pense y mettre s'écrivent dans son issue. Les chantiers prévus se suivent, dans un ordre que l'utilisateur fixe, et une phase en réunit plusieurs.
3. **La préparation.** Chaque idée du chantier devient une issue, avec ses critères d'acceptation ; une maquette ou un prototype, au besoin, montre l'écran avant que ses critères s'écrivent. Le chantier se découpe en étapes, et sa taille se confirme. L'utilisateur dit oui : le chantier passe « En cours ».
4. **Le développement.** L'IA développe l'étape suivante sur la branche du chantier. Elle écrit d'abord les tests de chaque critère d'acceptation, puis le code, et fait tourner l'OS sur le poste par le kit. Le chantier a une pull request, dont la CI construit le core et chaque app et passe leurs tests.
5. **La recette.** L'utilisateur vérifie chaque critère d'acceptation de l'étape sur l'OS en local, sur la branche du chantier ; un critère qui passe par l'IA connectée se vérifie par ce que l'IA du dépôt reçoit de l'OS en local (section « Le vrai OS hors du dépôt »). Recettée, l'étape laisse place à la suivante.
6. **La fusion.** La recette de la dernière étape fusionne la pull request dans `main` : le chantier passe « Fait » et se ferme.
7. **Le déploiement.** Le kit met en ligne la version de `main`, sa CI verte, et la version devient une release du dépôt. L'utilisateur refait sur l'OS en ligne les critères qui demandent l'OS réel.

Ce qui n'est dans aucun chantier ne se développe pas. Les chantiers se font l'un après l'autre : la méthode le conseille, sans l'imposer. Une fusion dans `main` avant la fin d'un chantier se fait sur la décision de l'utilisateur.

Un changement des textes pour qui travaille sur le dépôt se fait sans chantier : `docs/`, un `README.md`, un `CLAUDE.md`, une skill de l'entreprise. Aucun ne fait reconstruire une image, et rien ne se déploie. C'est une pull request, que l'utilisateur relit avant sa fusion.

Un concept nouveau prend le mot que le métier emploie, en français, et entre dans `docs/lexique.md` du dépôt de l'OS.

Les dossiers que nomme `verrou.json` sont maintenus par AVQN : l'IA ne les écrit pas.

## Les skills de l'entreprise

La méthode et les skills du plugin `indos-os` sont la base commune à tous les OS. L'entreprise les enrichit de ses propres skills, pour les gestes qui lui sont propres, comme préparer une saison ou ouvrir un nouveau site.

- Une skill de l'entreprise se range dans `.claude/skills/<nom>/SKILL.md` du dépôt de son OS, hors du verrou : une mise à jour d'Indos n'y touche pas.
- Elle s'appuie sur les skills du plugin, qu'elle nomme avec leur préfixe, comme `indos-os:preparer-un-chantier`, plutôt que de refaire leurs gestes. Son nom dit ce qu'elle fait, et diffère de ceux du plugin.
- Elle suit la méthode, sans la contredire. Une entreprise qui veut changer la méthode elle-même le propose à AVQN, par une pull request sur `ind-os/plugins`.
- Elle se change comme un texte, sans chantier : une pull request, que l'utilisateur relit avant sa fusion.

Par exemple, la skill `preparer-la-saison` d'un théâtre réunit les besoins de la saison avec l'utilisateur, puis suit `indos-os:planifier-les-chantiers` pour les placer au plan, et `indos-os:preparer-un-chantier` pour le premier.

## Le projet GitHub de l'OS

Le projet range les idées et les chantiers du dépôt de l'OS. Il est lié au dépôt, et l'entreprise le nomme comme elle veut. Les issues d'un chantier sont ses sous-issues : elles ne sont pas dans le projet.

- **Status**, sur un chantier : Prévu, En cours, Fait.
- **Taille**, sur un chantier : S, M, L.
- **Milestone**, sur un chantier, facultatif : sa phase.

Le projet a trois vues, que l'utilisateur voit dans un navigateur :

- « Idées » : les brouillons, que rien n'a encore placés ;
- « Plan » : les chantiers en cours et prévus, dans leur ordre, réunis par phase ;
- « Fait » : les chantiers faits, le plus récent en haut.

Un chantier se lit dans son issue, avec ses sous-issues et leur avancement.

## Une idée

Une idée est un brouillon du projet : une phrase de l'utilisateur, une ligne de plus au besoin. Elle se note à tout moment, aussi pendant un chantier ; venue d'un chantier, elle porte son lien.

Au plan, une idée entre dans un chantier prévu : elle s'écrit en une ligne dans son issue, et son brouillon s'archive. Une idée écartée s'archive aussi.

## Un chantier

**L'issue d'un chantier** : le titre « Chantier : » suivi du but, une phrase à la règle des titres d'issue ; le but redit en une ligne. Un chantier prévu a ensuite la section « Ce qu'on pense y mettre », une idée par ligne. Préparé, il a ses issues en sous-issues, et la section « Étapes » quand il en a plusieurs.

**La taille** (champ « Taille ») : S, M ou L, d'après les critères de `taille-d-un-chantier.md`, à côté de cette méthode. Elle s'estime au plan et se confirme à la préparation. Un chantier qui dépasse un L se découpe en plusieurs chantiers.

**Une étape** est ce que l'utilisateur recette en une fois : un rendez-vous avec lui. Un chantier a une étape ou plusieurs ; leur nombre se décide à la préparation et change avec l'accord de l'utilisateur. La section « Étapes » en fait une case par étape, avec ce qu'elle livre et ses sous-issues ; la case se coche à sa recette.

> Étapes :
> - [x] la liste des factures à relancer : #41, #42
> - [ ] le mail de relance : #43

**Une phase** est un milestone du dépôt : une feuille de route, qui réunit des chantiers dans l'ordre où ils viennent. Sa date reste vide. Un chantier change de phase librement, et un chantier sans phase est un chantier comme un autre.

## Une maquette, un prototype

À la préparation, l'utilisateur peut voir un écran avant d'en écrire les critères. Les deux sont facultatifs.

- **Une maquette** décide de ce que l'écran montre : un wireframe en gris, une page HTML simple montrée dans la conversation, faite en quelques minutes.
- **Un prototype** décide de comment l'écran se présente et s'enchaîne : de vrais écrans sur l'OS en local, par `local travailler`, que l'utilisateur manipule jusqu'à ce qu'ils lui conviennent. Il sert au design fin d'une interface.

Le prototype vit sur une branche `prototype-<chantier>`, qui ne se fusionne jamais. Il ne suit ni le contrat d'une app, ni les règles d'architecture, ni l'ordre des tests : l'IA y prend le plus court chemin vers l'écran voulu. Seuls tiennent ce qui protège l'entreprise : le vrai OS reste hors d'atteinte, et aucun secret n'entre dans le dépôt.

Ce que l'utilisateur valide dans le prototype s'écrit avec précision dans les critères d'acceptation : ce que montre chaque écran, où, dans quel ordre, avec quels mots. La branche reste poussée, liée dans l'issue du chantier, jusqu'à ce qu'il soit fait : le développement la fait tourner et refait la même chose, dans le code du chantier, tests d'abord. Le chantier fait, la branche se supprime.

## Écrire une issue

Une issue s'écrit pour l'utilisateur qui la lira : ses mots, des phrases courtes, aucun nom de fichier, de table ni de fonction. Le détail technique va dans la pull request.

**Le titre** est une phrase complète au présent, qui dit ce que l'utilisateur verra une fois l'issue faite. Jamais une image, jamais deux mots.

| Titre à éviter | Titre juste |
| --- | --- |
| Un carnet se tient tout seul | Les contacts ajoutés sur le téléphone apparaissent dans l'OS |
| Refonte facturation | Une facture se crée en trois clics depuis la fiche du client |
| Fix bouton | Le bouton « Nouvelle facture » est en haut de la liste |
| Amélioration UX des relances | Les factures en retard sont relancées par mail, après mon accord |

**Le corps** dit pourquoi, puis ce qui doit marcher, sous « Ça marche quand » : un critère d'acceptation par ligne, qu'on vérifie en regardant l'OS. Quand on pourrait le croire dedans, il dit aussi ce qui reste dehors. Une vingtaine de lignes au plus.

> Je peux télécharger la liste de mes factures de l'année en Excel
>
> Pour la fiduciaire, qui la demande chaque année en janvier.
>
> Ça marche quand :
> - le fichier a une ligne par facture, avec le client, le montant et la date de paiement ;
> - les factures annulées n'y sont pas.

> Les factures en retard de plus de 30 jours sont relancées par mail, après mon accord
>
> On oublie des relances, et des factures restent impayées des mois.
>
> Ça marche quand :
> - chaque lundi, je reçois la liste des factures à relancer ;
> - je coche celles à relancer, et le mail part avec la facture jointe ;
> - une facture relancée affiche la date de la relance.
>
> Pas dans cette issue : les rappels par SMS, les frais de retard.

Une issue trop grosse pour son chantier devient un chantier.

## Ce que l'IA propose, ce que l'utilisateur décide

L'IA propose une idée à placer, un chantier, un ordre, une phase, une maquette ou un prototype, un découpage en étapes. L'utilisateur décide. Le chantier passe « En cours » après son oui à la préparation, et « Fait » quand il a recetté la dernière étape.

Pendant le développement, l'IA ne crée aucune issue, hors celle d'une réparation urgente. Une idée qui vient se note en brouillon, avec le lien du chantier.

À la recette :

- une correction de ce qui était convenu repart au développement, dans la même étape ;
- une envie nouvelle se note en brouillon, hors de ce chantier.

## Une réparation urgente

Seul l'utilisateur décide qu'une panne passe devant les chantiers en cours. Une amélioration n'est jamais une panne.

La réparation est un chantier d'une étape, sans taille, que l'IA crée sur la décision de l'utilisateur, « En cours » dès sa création. Son issue a un critère d'acceptation : ce qui remarche. Sa branche part de `main` et ne contient que la réparation. Recettée, elle se fusionne et se déploie aussitôt ; l'utilisateur refait le critère sur l'OS en ligne.

La branche de chaque chantier en cours reprend ensuite le nouveau `main`, et le chantier continue.

## Une app nouvelle

Une app nouvelle naît quand un besoin ne revient à aucune app existante : `architecture.md`, à côté de cette méthode, dit où se range un besoin, et comment il se découpe en apps génériques et en apps métier. Elle s'écrit d'après le contrat d'une app, `docs/contrat.md` du dépôt de l'OS, lu en entier : son dossier, son nom et ses fichiers sont dans sa section « Le dossier d'une app ». Son nom dit ce qu'elle fait.

Ses tests passent par `local voir`. L'app entre dans un chantier comme tout changement.

## Les textes du code

- Un commentaire dit ce que fait le code et pourquoi, sans renvoyer à un `CLAUDE.md` ni à une doc : le code se comprend seul.
- Le code, le manifeste, `INSTRUCTIONS.md` et `DOCUMENTATION.md` d'une app disent « l'IA » : l'entreprise connecte l'IA de son choix. Le nom de fichier `CLAUDE.md` reste.

## Le vrai OS hors du dépôt

Dans le dépôt de l'OS, l'IA ne parle qu'à l'OS en local : un essai n'écrit jamais dans le vrai OS de l'entreprise.

- `node kit/src/commande.ts local ia` connecte l'IA à l'OS qui tourne sur le poste, avec un compte d'essai, comme une IA s'y connecte : elle y voit les consignes et les outils qu'elle reçoit, et le résultat d'un appel. L'OS qui tourne est celui de `local voir` ou de `local travailler`, celui de la recette comme celui du prototypage.
- Le connecteur du vrai OS est bloqué dans le dépôt, par les réglages de l'IA du clone, `.claude/settings.local.json`, qui ne se commitent pas. Il reste ouvert hors du dépôt.

## La clé de l'entreprise sur le poste

Le propriétaire de l'OS donne la clé de l'entreprise, une clé age, à chaque utilisateur qui travaille sur l'OS.

- Elle est rangée dans `~/.config/indos/<nom>.txt`, où `<nom>` est l'un des noms de `cles` dans `configuration.json`. Le kit la lit là.
- L'utilisateur la range lui-même, dans son terminal. Elle ne passe jamais par la conversation.
- Les réglages de l'IA sur le poste lui interdisent de lire ce dossier.

Aucun secret n'entre dans un dépôt, une issue, une pull request ou un journal : une valeur secrète se range au coffre par `coffre ranger <nom>`.
