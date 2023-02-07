# challenge-48h


Infrastructure : 

Ce qu'on aurait aimé faire : 

Nous aurions aimé faire un docker composé de 2 conteneurs. Un conteneur aurait servis à mettre la base de donnée et l'autre aurait permis de mettre le front et le back.


Back :
Pour le back de notre projet , nous avons choisis le framework AdonisJs. Nous avons fait ce choix car des membres de notre groupe l'avait déjà expérimenté dans des projets personnels ou lors de projets YDays. À cela nous avons choisis de faire notre base de données sous PostgreSQL. 

Tout d'abords nous avons déterminé les différentes tables et attributs qui aller composé notre base de donnée.
Voici un model conceptuel de notre base. 


![Challenge48h](https://user-images.githubusercontent.com/106623578/217267985-16025115-fb87-43b9-b7fe-08107c260966.png)

Suite à cela nous avons pu commencer la création de nos migrations. Pour cela nous avons utilisés la commande : 

{% filename %}node ace make:migration role{% endfilename %}

Ensuite nous pouvons voir le status des migrations avec la commande :

{% filename %}node ace make:migration role{% endfilename %}

Pour créer la base de donnée il faut faire la commande :

{% filename %}node ace migration:run{% endfilename %}

Et en cas de modification il faut la rollback et la recréer enf faisant : 

{% filename %}node ace migration:rollback{% endfilename %}

{% filename %}node ace migration:run{% endfilename %}

Nous avons géré pour chaque table un CRUD (si il n'était pas nécessaire, ils n'ont pas été fait) et nous avons créé les routes qui correspondaient.

Ce qu'on aurait aimé faire en plus : 

- Nous aurions aimé sécurisé les données de la base en ajoutant un token. Lorsque l'utilisateur se connecte on lui affecte un JWT token qui lui sera utile pour récupérer "ses" données. Par exemple lorsqu'il fait un panier, cela enregistre son token et lui permet de retrouver son panier grace à son token. Les autres utilisateurs ne peuvent pas avoir accès à son panier sans son token. De même pour récupérer les données de l'utilisateur.

Front :


