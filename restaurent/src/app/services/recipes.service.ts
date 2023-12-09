import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../component/recipes/recipes.interface";

@Injectable({
    providedIn:'root'
})
export class RecipeService{
    public onRecipeSelection=new EventEmitter<Recipe>();
    private recipe:Recipe[]=[
        {
          id: '01',
          name:'MLA French' ,
          description: 'This is simply a test',
          image:'https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2022/12/05171743/MLA_French.png',
          ingridient:[
            {
                name: 'onion',
                ammount: 2
            },
            {
                name: 'potato',
                ammount: 2
            },
          ]
        },
        {
          id: '02',
          name:'Idli' ,
          description: 'Idli is the  South Indian breakfast dish',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMdHtT7yykZlFgdzgHjfrJm0IwvjGaqK2Bg&usqp=CAU',
          ingridient:[
            {
                name: 'rice',
                ammount: 2
            },
            {
                name: 'water',
                ammount: 2
            },
          ]
        },
        {
          id: '03',
          name:'Homemade Cannoli' ,
          description: 'seriously strong coffee and a cannoli',
          image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/24/2/ED0203_homemade-cannoli_s4x3.jpg.rend.hgtvcom.511.288.suffix/1433592011573.jpeg',
          ingridient:[
            {
                name: 'milk',
                ammount: 2
            },
            {
                name: 'potato',
                ammount: 2
            },
          ]
        }
      ];

    getRecipes(){
        return[...this.recipe]
    }
    getSelectedRecipes(recipeId:number){
      return this.recipe[recipeId]
    }

}