import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFiltre'
})
export class UsersPipe implements PipeTransform {

  transform(values: any, filtre?: any): any {
    // console.log(values[0], filtre);
    if (!values || !values.length) return [];
    if (!filtre) return values;
    
    // return values.filter(v => String(v).toLowerCase().indexOf(filtre.toLowerCase()) >= 0);
    return values.filter(v => {
      console.log(v.profil[0].droit == filtre, v.profil.droit, filtre);
      // Filtre sur le titre
      if(v.profil[0].droit){
        return v.profil[0].droit == filtre;
      }
    });
  }

}