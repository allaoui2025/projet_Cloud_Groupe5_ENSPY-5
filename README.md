# PROJET DE PIPELINE CI/CD 
Pour le projet nous avons 02 applications dont nous voulons automatiser les taches d'integration et de deploiement.

# Description des apps
  *l'app_1, API REST en python (FLASK)* : une API REST simple qui renvoie un message de bienvenue et accepte une entree utilisateur 
  pour renvoyer une reponse.
  *l'app_2, une application web statique en HTML/CSS avec un backend simple en Node.js* : Une page web affichant une liste de taches ou un backend Node.js 
  gere les ajouts de taches via un formulaire.
 Les differents codes sources se trouvent en local, nous avons travaille sur VS code 

 # LES DIFFERENTES ETAPES DU PROJETS 

   # Etape 1: DEVELOPPER LES APPLICATIONS ET PUSH
   
  * Nous avons developpe nos appli sur Vs code ensuite nous avons creer un depot Git dans lequel nous avons pousser (push) nos differents code sources. 
    Ces applications sont organisées dans des branches GitHub distinctes:
       -main, pour l'application Flask.
       -app2, pour l'application Node.js.

    # etape 2. Configuration des fichiers Docker
  Pour chaque application, nous avons créé un fichier Dockerfile permettant de définir l'environnement d'exécution de l'application.
