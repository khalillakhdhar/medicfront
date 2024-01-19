import { Medicament } from "./medicament";

export interface Maladie {
    id: number;
    createdAt: any;
    updatedAt: any;
    titre: string;
    description: string;
    gravite: string;
    type: string;
    debut: any;
    fin: any;
    medicaments: Medicament[];
}
