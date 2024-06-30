<div align = center>

<img src="https://i.pinimg.com/736x/17/79/83/177983f3e806df254b8099b1d191f848.jpg" width="100%" height="">

</div>

<div align = center>


# **Daidokoro**
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)
</div>

# Daidokoro

## Lancer l'application

Pour lancer l'application, veuillez suivre les étapes suivantes :
1. Cloner le repository du projet.
2. Se rendre dans le dossier `daidokoro`.
3. Exécuter la commande suivante : `ng serve --open`.

  
  
## Présentation rapide du projet

Daidokoro est un projet réalisé en Angular. Il s'agit d'une application web de gestion de recettes et d'ingrédients.   
Les fonctionnalités incluent la gestion des utilisateurs, la consultation, l'ajout, la modification et la suppression d'ingrédients, ainsi que la création et la commande de recettes.  
Le projet est conçu pour être intuitif et facile à utiliser, avec une interface utilisateur agréable et des fonctionnalités robustes.

## Prérequis demandés

Pour ce projet, les fonctionnalités suivantes étaient requises :
- Une barre de navigation commune à tout le site avec :
    - Une page de connexion (/login) permettant de créer un cookie ou un local storage avec une valeur `isAdmin = true` et une redirection vers la page des ingrédients. Le bouton de connexion n'apparaît que si la valeur `isAdmin` est `false` ou inexistante.
    - Une page de déconnexion (/logout) ayant le comportement inverse de la connexion.
    - Un bouton vers la page des ingrédients avec une guard qui vérifie la valeur `isAdmin`. Si `true`, l'accès est permis, sinon, redirection vers la page d'accueil.
        - Listing des ingrédients existants.
        - Ajout d'un ingrédient.
        - Modification d'un ingrédient.
        - Connexion à une API pour les ingrédients, remplaçant le stub actuel.
- Sur la page d'accueil :
    - Liste de recettes chargées depuis le local storage avec une image enregistrée ou un placeholder (`placehold.co/50x50`).
        - Pagination de la liste de recettes.
    -  Un bouton pour ajouter une recette, faisant apparaître un formulaire avec :
        - Nom
        - Image
        - Description
        - Liste d'ingrédients avec possibilité de rajouter et de supprimer des ingrédients, au moins un devant être sélectionné.
  - Un bouton "Commander" sur chaque recette qui ajoute la recette commandée à une liste "Commande en cours" sur la page d'accueil.
  - Un bouton "Détail" redirigeant vers `/recettes/:id` et affichant la recette avec tous ses attributs.

## Réalisation des prérequis

Nous avons mis en œuvre toutes les fonctionnalités demandées :
- **Barre de navigation :** Elle est présente sur toutes les pages et comprend les boutons de connexion et de déconnexion. La gestion de `isAdmin` est effectuée via le local storage.
- **Guard d'accès aux ingrédients :** Nous avons implémenté une guard qui vérifie si l'utilisateur est connecté avant de permettre l'accès à la page des ingrédients.
- **Gestion des ingrédients :** Nous avons créé des pages pour lister, ajouter et modifier les ingrédients via l'API.
- **Page d'accueil :** La liste des recettes est chargée depuis le local storage et paginée. Un formulaire d'ajout de recette permet de créer de nouvelles recettes avec tous les champs requis. Chaque recette a des boutons "Commander" et "Détail".

## Fonctionnalités supplémentaires

En plus des fonctionnalités de base demandées, nous avons :
- Implémenté un style personnalisé pour l'application afin d'améliorer l'expérience utilisateur.

## Difficultés 

Nous avons aussi rencontrer certaines difficultés : 
- L'application a du mal à stocker dans le local storage à partir d'un certain quota, il est limité.
- Nous avons tenté de déployer l'application mais sans succès, le hub de codefirst était surchargé.

## Organisation du travail

Nous avons utilisé un système de branches et de merge requests pour organiser notre travail de manière efficace. Chaque fonctionnalité a été développée sur une branche dédiée et intégrée dans la branche principale via des merge requests. Cela nous a permis de travailler en parallèle tout en maintenant un code base stable et propre.

## Conclusion

Le projet Daidokoro a été une expérience enrichissante, nous permettant d'acquérir des connaissances en Angular et en gestion de projets.


# :construction: Développeurs

- Corentin RICHARD : corentin.richard@etu.uca.fr
- Dorian HODIN : dorian.hodin@etu.uca.fr

<div align="center">
<a href = "https://codefirst.iut.uca.fr/git/corentin.richard">
<img src="https://codefirst.iut.uca.fr/git/avatars/37008ec8b164225fb699e2efac55a6e3?size=870" width="50" >
</a>
<a href = "https://codefirst.iut.uca.fr/git/dorian.hodin">
<img src="https://codefirst.iut.uca.fr/git/avatars/1987ef0b5b65f4d208cb3250a24b4794?size=870" width="50" >
</a>
</div>