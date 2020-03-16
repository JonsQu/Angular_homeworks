import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<form>
    <input  type="number" 
            placeholder="mass" 
            name="mass" 
            [(ngModel)]="mass"/>
    <input  type="number" 
            placeholder="heigth" 
            name="heigth" 
            [(ngModel)]="heigth"/>
  </form>
  <button (click)="calculateBMI()">Calculate BMI</button>
  <p>{{bmi}}</p>`
})
export class AppComponent {
  //title = 'bmi-app';
  //testing : string = '';
  mass : number = 0;
  heigth : number = 0;
  bmi : number = 0;
  public calculateBMI() : void{
    this.bmi = this.mass / (this.heigth * this.heigth);
  }
}
