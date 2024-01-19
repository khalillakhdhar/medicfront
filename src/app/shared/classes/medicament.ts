import { Rappel } from "./rappel";

export interface Medicament {
    id: number;
    createdAt: any;
    updatedAt: any;
    titre: string;
    description: string;
    debut: any;
    fin: any;
    rappels:Rappel[];
}
