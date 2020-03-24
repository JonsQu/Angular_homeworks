import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'firstcharuppercase'})
export class FirstCharUpperCasePipe implements PipeTransform {
  transform(giventext: string): string {
    let ret : string = '';
    for(let i = 0;i < giventext.length; i++){
        let str : string = giventext.charAt(i);
        if(i === 0 || giventext.charAt(i - 1).match(' ')){
            ret += str.toUpperCase();
        }else{
            ret += str.toLowerCase();
        }
        console.log(str);
        
    }
    return ret;
  }
}