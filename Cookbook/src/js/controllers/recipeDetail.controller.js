app.controller('recipeDetailCtrl', ['$scope', 'recipeSvc', function($scope, recipeSvc){
    
    $scope.recipe = undefined;
    
    /**
     * Abonnement au message de sélection d'une nouvelle recette
     * par l'utilisateur
     */
    $scope.$on('recipeWasSelected', function(event, args){
        $scope.recipe = args.data;
    });

    /**
     * Génère un tableau de valeurs comprises entre la valeur min et max
     */
    $scope.populatePartNumbers = function(min, max)
    {
        let result = [];
        for(var i = Number(min); i <= Number(max); i++){
            if(i%2 == 0){
                result.push(i);
            }
        }

        return result;
    }

    /**
     * Ajoute une nouvelle étape à la liste des étapes de la recette
     */
    $scope.addNewStep = function(newStepDescription)
    {
        if($scope.recipe.steps === undefined 
            || $scope.recipe.steps === null){
            $scope.recipe.steps = [];
        }

        $scope.recipe.steps.push({
            position:$scope.recipe.steps.length + 1,
            description:newStepDescription
        });
    }


    /**
     * Sauvegarde la recette
     */
    $scope.save = function(){
        recipeSvc.updateRecipe($scope.recipe);
    }

}]);