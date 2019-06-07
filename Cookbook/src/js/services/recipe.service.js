app.service('recipeSvc',['$window', function($window){

    /**
     * Charge la liste des recettes depuis le localstorage
     * @returns {array} liste des recettes
     */
    this.loadRecipes = function(){
        let recipesString = $window.localStorage.getItem('recipes');

        if(recipesString === null || recipesString === undefined){
            return [];
        }else{
            // Converti la chaine de caractère en objet
            return JSON.parse(recipesString);
        }
    }

    /**
     * Sauvegarde le tableau de recettes
     * @param recipestoSave {array} liste des recettes
     */
    this.saveRecipes = function(recipestoSave){
        $window.localStorage.setItem('recipes',
            JSON.stringify(recipestoSave));
    }

    /**
     * Met à jour une recette dans le tableau de recettes
     */
    this.updateRecipe = function(recipeToUpdate){

        let recipes = this.loadRecipes();
        
        // Recherche de la recette
        for(let i = 0; i < recipes.length; i++){
            if(recipes[i].name === recipeToUpdate.name){
                // Remplacement de la recette dans le tableau à la même position
                recipes.splice(i, 1, recipeToUpdate);
                this.saveRecipes(recipes);
                break;
            }
        }

    }

}]);