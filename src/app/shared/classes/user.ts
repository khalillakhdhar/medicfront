import { Maladie } from "./maladie";
import { Profile } from "./profile";

export interface User {
    id: number;
    createdAt: any;
    updatedAt: any;
    nom:string;
    prenom:string;
    email:string;
    password:string;
    age:number;
    genre:string;
    profile:Profile;
    maladies:Maladie[];

}
