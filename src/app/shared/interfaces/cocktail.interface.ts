import {Ingrediant} from "./ingrediant.interface"
export interface Cocktail {
    name: String;
    img: String;
    description: String;
    ingrediant?: Ingrediant[];
}
