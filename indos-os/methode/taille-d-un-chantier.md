# La taille d'un chantier

La taille d'un chantier, S, M ou L, mesure le travail qu'il demande. Ce document en fixe les critères. La méthode de développement, `methode.md`, à côté de ce document, s'y réfère pour estimer un chantier au plan et confirmer sa taille à la préparation.

## La base : ce que le chantier construit

- **S** : une app existante, améliorée ;
- **M** : une app nouvelle, ou deux apps existantes reliées ;
- **L** : plusieurs apps nouvelles, ou plus de deux apps reliées.

## Les facteurs

Chaque facteur monte la taille d'un cran :

- **les droits** : des personnes qui ne voient pas ou ne font pas la même chose, par un partage ou des rôles ;
- **l'enjeu** : l'argent, des données personnelles, un envoi vers l'extérieur, comme un mail à un client ;
- **un service extérieur nouveau** : l'API d'un fournisseur que l'OS ne connaît pas encore ;
- **un design fin**, qui demande un prototype.

Un chantier qui dépasse un L se découpe en plusieurs chantiers.

## Des exemples

| Chantier | Base | Facteurs | Taille |
| --- | --- | --- | --- |
| La liste des factures de l'année se télécharge en Excel | S | aucun | S |
| Chacun télécharge en Excel ses propres factures | S | les droits | M |
| Les factures en retard sont relancées par mail, après mon accord | S | l'enjeu | M |
| Un rendez-vous se pose depuis la fiche du client | M | aucun | M |
| Une app de notes de frais, remboursées par virement | M | l'enjeu | L |
