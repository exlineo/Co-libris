
import { SerieModele } from './serie.modele';

export interface EditionModele {
    title:string;
    author:string;
    publisher:number;
    collection:number;
    language:string;
    publishedDate:string;
    pages:number;
    cover:string;
    ISBN10?:number;
    ISBN13:number;
    series?:Array<SerieModele>;
}
