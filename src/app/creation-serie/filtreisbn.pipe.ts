import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreisbn'
})
export class FiltreIsbnPipe implements PipeTransform {

  public transform(values: any[], filtre: string): any[] {
    // console.log(values[0], filtre);
    if (!values || !values.length) return [];
    if (!filtre) return values;

    // return values.filter(v => String(v).toLowerCase().indexOf(filtre.toLowerCase()) >= 0);
    return values.filter(v => {
      // Filtre sur le titre
      if(v.ISBN13){
        return v.ISBN13.indexOf(filtre) >=0 ;
      }
      // Filtre sur la description
      /*if(v.description){
        return v.description.indexOf(filtre) >=0 ;
      }*/
    });
  }

}
