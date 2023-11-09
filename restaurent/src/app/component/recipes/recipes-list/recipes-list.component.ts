import { Component ,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../recipes.interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes:Recipe[]=[
    {
      id: '01',
      name:'A Test Recipe' ,
      description: 'This is simply a test',
      image:'https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2022/12/05171743/MLA_French.png'
    },
    {
      id: '02',
      name:'Idli' ,
      description: 'Idli is the  South Indian breakfast dish',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMdHtT7yykZlFgdzgHjfrJm0IwvjGaqK2Bg&usqp=CAU'
    },
    {
      id: '03',
      name:'Homemade Cannoli' ,
      description: 'seriously strong coffee and a cannoli',
      image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/24/2/ED0203_homemade-cannoli_s4x3.jpg.rend.hgtvcom.511.288.suffix/1433592011573.jpeg'
    }
  ];
  @Output() handleRecipeSelection= new EventEmitter<Recipe>()
  constructor(){}
  ngOnInit(){}
  handleRecipeSelect(selectedRecipe:Recipe){
    this.handleRecipeSelection.emit(selectedRecipe)
  }

}
    