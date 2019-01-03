import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatusfilter'
})
export class UserstatusfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value=='0') return 'Not Approved';
else if(value=='1') return 'Approved';
    else return null;
  }

}
