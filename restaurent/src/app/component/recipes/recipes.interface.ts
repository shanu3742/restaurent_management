import { Ingredient } from "src/app/shared/ingredient.interface";

export interface Recipe {
    id: string;
    name: string;
    description: string;
    image: string;
    ingridient:Ingredient[]
}