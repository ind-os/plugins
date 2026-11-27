# indos-developpeur

Le plugin `indos-developpeur` tient le rôle de développeur d'AVQN : il développe les OS des entreprises qui lui sont confiées et les met à jour depuis Indos. Il exige `indos-os`, le travail sur le dépôt d'un OS, et `indos-poste`, le poste et ses entreprises.

## Ce qu'il porte

| Dossier | Ce qu'il tient |
| --- | --- |
| `skills/mettre-a-jour-un-os` | La mise à jour d'un OS depuis Indos, par le pilotage |
| `consignes.md` | Les consignes du rôle, que l'IA reçoit au début de chaque session sur le poste |
| `hooks/consignes.ts` | Le début de session, qui les donne avec le chemin du poste |
