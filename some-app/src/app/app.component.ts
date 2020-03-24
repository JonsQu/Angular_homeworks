import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div *ngFor="let p of somePersons; let i = index" >
              <p *ngIf="p.name != 'Jussi'"[class.myBackground]="i % 2 === 0">{{i}} {{p.name}}</p></div>`,
  styles: [
    `.myBackground{
      background-color: gray;
    }`
  ] 
})
export class AppComponent {
  title = 'some-app';
  isBackground : boolean = false;
  somePersons : Person[] = [{name: 'Jussi'},
  {name: 'Jack'}, {name: 'George'}, {name: 'Julian'}, {name: 'Peter'}];
  constructor(){
    console.log(5 % 2);
  }
  change() : void{
    this.isBackground = !this.isBackground;
  }
  
}
interface Person{
  name : string;
}
