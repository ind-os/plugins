# indos-poste

Le plugin `indos-poste` tient le poste d'un membre de l'équipe d'AVQN, quel que soit son rôle : les entreprises chargées, chacune avec ses dépôts et son projet, le lien vers l'accompagnement dans le kDrive, et la personne du poste. Les plugins `indos-developpeur` et `indos-referent` l'exigent.

## Ce qu'il porte

| Dossier | Ce qu'il tient |
| --- | --- |
| `skills/preparer-le-poste` | Le poste : `entreprises/`, `accompagnement/`, les clones selon les rôles, `poste.json` |
| `skills/charger-une-entreprise` | Le dossier d'une entreprise : ses clones et `projet/` |
| `consignes.md` | Les consignes que l'IA reçoit au début de chaque session, sur le poste |
| `hooks/consignes.ts` | Le début de session, qui donne les consignes avec le chemin du poste et sa personne |

## Le poste

```
<poste>/
  entreprises/
    <entreprise>/
      <dépôt>/          un clone par dépôt de l'entreprise, comme os-boulimos
      projet/           lien vers accompagnement/Entreprises/<entreprise>
  accompagnement/       lien vers Accompagnement/ du kDrive d'AVQN : Commun/, Entreprises/, Proprietaire/
  produit/
    indos/              ind-os/indos
    charte/             ind-os/charte
  pilotage/             ind-os/proprietaire
  poste.json            la personne du poste et ses rôles
```

Le poste est le dossier qui tient `entreprises/`, celui qu'on ouvre ou l'un de ses parents. Hors d'un poste, les hooks ne disent rien.
