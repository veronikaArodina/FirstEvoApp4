import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',
  standalone: true
})
export class FirstPipePipe implements PipeTransform {


  transform(value: number): number {  
    return value + 5;
  }

}