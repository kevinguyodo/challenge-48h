# challenge-48h

## **YMazone**



## **Infrastructure :**

Suite à une mauvaise compréhention du sujet et du manque d'un B3 Cyber-sécurité, nous n'avons pas pu faire cetet partie. Cependant nous avons eu quelques idées.

Ce qu'on aurait aimé faire : 

Nous aurions aimé faire un docker composé de 2 conteneurs. Un conteneur aurait servis à mettre la base de donnée et l'autre aurait permis de mettre le front et le back.


## **Back :**

Pour le back de notre projet , nous avons choisis le framework AdonisJs. Nous avons fait ce choix car des membres de notre groupe l'avait déjà expérimenté dans des projets personnels ou lors de projets YDays. À cela nous avons choisis de faire notre base de données sous PostgreSQL. 

Tout d'abords nous avons déterminé les différentes tables et attributs qui aller composé notre base de donnée.
Voici un model conceptuel de notre base. 


![Challenge48h](https://user-images.githubusercontent.com/106623578/217267985-16025115-fb87-43b9-b7fe-08107c260966.png)

Suite à cela nous avons pu commencer la création de nos migrations. Pour cela nous avons utilisés la commande : 

```
node ace make:migration role
```

Ensuite nous pouvons voir le status des migrations avec la commande :

```
node ace make:migration role
```

Pour créer la base de donnée il faut faire la commande :

```
node ace migration:run 
```

Et en cas de modification il faut la rollback et la recréer enf faisant : 

```
node ace migration:rollback
```

```
node ace migration:run
```

Nous avons géré pour chaque table un CRUD (si il n'était pas nécessaire, ils n'ont pas été fait) et nous avons créé les routes qui correspondaient.

### **Ce qu'on aurait aimé faire en plus :** 

- Nous aurions aimé sécurisé les données de la base en ajoutant un token. Lorsque l'utilisateur se connecte on lui affecte un JWT token qui lui sera utile pour récupérer "ses" données. Par exemple lorsqu'il fait un panier, cela enregistre son token et lui permet de retrouver son panier grace à son token. Les autres utilisateurs ne peuvent pas avoir accès à son panier sans son token. De même pour récupérer les données de l'utilisateur.

### **Point fort de notre back :**

- Toutes nos routes sont fonctionnels
- Mise en place de Seeder


## **Front :** 

Nous sommes partie dans un premier temps sur figma pour faire une maquette général du site.

***
</br> <img src="https://zupimages.net/up/23/06/2gyf.png" width= 780px>  <br>


***

Nous avons mis les b1 et b2 sur la mise en place du front. La technologie que nous avons utilisé est NODE JS en REACT avec vite.

Nous avons installé la dépendance SASS pour utiliser SCSS qui nous a permis de centraliser les feuilles de styles en cascade.

### **Nous avons séparé le code en plusieurs parties :**

- assets : images utilisées en front

- views : des fonctions qui appellent des composants

- components : création des composants de chaque page

- scss : le visuel

- ways : permet de faire les routes entre les pages de notre site

- main : permet d'importer le SCSS et base du serveur


Notre site se retrouve avec les pages élémentaires pour le bon POC.

### **Points forts :**

- Une bonne organisation de nos fichiers

- Un design qui retient l'attention

- Mise à part quelques execptions de liens, toutes nos pages sont reliées entre elles

- prédisposition à la base de données

### **Améliorations possibles :**

- Créer les liens entre le front et la base de données

- Pages responsives

- Finir le liens entre les pages et améliorer l'ux et l'ui

- proposer plus de fonctionnalités (filtres, dernières commandes, etc...)


### **Notre ressenti :** 

Nous sommes plutôt satisfait du travail réalisé par l'équipe malgrés les différences de niveaux. Nous sommes quand même frustrés car nous avons fait l'api, le front et la bdd, mais il nous restait à mettre en place les liens entre ces trois éléments. Sans affichage sur notre site, nous avons l'impression de rien avoir de concret même si tout cela n'est qu'une question de présentation des données.
    
## **Pour lancer notre site web :**

1. se placer dans le dossier front 
2. dans le terminal : 
```
npm install
```
3. toujours dans le terminal : 
```
npm run dev 
```
4. faire de même dans le dossier back
5. sur internet aller au localhost ! (vous pouvez à présent vous balader sur notre site )


## **Notre team :** 

b1 : BIGOT Lucas, NICOLAS Gurvan, HAMON Mathéo

b2 : FAVENNEC Mélaine, RAYNAUD Adrien

b3 : GUYODO Kevin (IA DATA), DESMOULIN Théo (DEV)
