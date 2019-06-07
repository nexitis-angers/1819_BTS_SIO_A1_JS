/**
 * Déclaration du module (l'élément racine d'un projet Angularjs)
 * 2 arguments : 
 *  - Nom de votre application
 *  - Un tableau de librairies externes à injecter (dépendances)
 */
var app = angular.module('plusoumoins', []);

/**
 * Déclaration d'un controller qui va gérer la logique métier
 * du jeu (interactions, ...)
 * 2 arguments : 
 *  - Nom du contrôleur (ici gameCtrl)
 *  - 1 tableau qui contient : 
 *      - la déclaration des dépendances à injecter
 *      - la fonction qui contiendra notre code
 */
app.controller('gameCtrl', ['$scope', function($scope){ 

    $scope.username = undefined;
    $scope.try = undefined; // Tableau des essais
    $scope.numberToFind = undefined; // Le nombre à trouver

    /**
     * Demande le nom d'utilisateur
     */
    $scope.askUsername = function(){
        $scope.username = prompt('Qui es-tu ?');
        privateFunction();
    }

    /**
     * Cette fonction n'est pas utilisable depuis la vue HTML,
     * mais utilisable au sein du contrôleur.
     * Elle est comme privée
     */
    var privateFunction = function()
    {
        alert('Ma fonction "privée"');
    }

    /**
     * Démarre le jeu
     */
    $scope.play = function(){
        $scope.numberToFind = Math.floor(Math.random() * 100) + 1;
        $scope.try = [];
    }

    /**
     * Soumission de la valeur testée par l'utilisateur
     * @param inputValue {number} La valeur saisie par l'utilisateur
     */
    $scope.submitValue = function(inputValue)
    {
        if(inputValue < $scope.numberToFind){
            $scope.try.push('La valeur recherchée est supérieure à ' + inputValue);
        }else if(inputValue > $scope.numberToFind){
            $scope.try.push('La valeur recherchée est inférieure à ' + inputValue);
        }else {
            $scope.try.push('Bravo, tu as trouvé la valeur ' + $scope.numberToFind);
        }
    }

}]);