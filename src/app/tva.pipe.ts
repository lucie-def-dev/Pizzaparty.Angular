import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let conv = 2;
    return conv * value;
  }

}
