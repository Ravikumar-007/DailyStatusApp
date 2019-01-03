import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolefilter'
})
export class RolefilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
console.log(value);
    if(value=='1')
      return 'User';
    else if(value=='2') return 'Admin';
    else if(value=='3') return 'SuperAdmin';
else 
    return null;
  }

}
