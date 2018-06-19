import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demandeFiltre'
})
export class DemandeSeriesPipe implements PipeTransform {
  tab:Array<object>=[]; // Tableau pour sauvegarder les données traitées

  transform(values: any, filtres: any): any {
    if (!values || !values.length) return [];
    if (!filtres || !filtres.length) return [];

    // Croisement des tableaux de données entre les codebars des séries et des demandes
    values.filter(v => {
      // Filtre sur le titre
      for(let vs of v.series){
        filtres.filter(f => {
          if(vs.codeBar === f.codeBar){
              this.tab.push(v);
            }
        });
      }

    });
    return this.tab;
  }

}
