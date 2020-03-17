import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
            <app-lights (lightsSituation)="whenAllLightsAreOn($event)"></app-lights>
            <h3 *ngIf="isVisible">All on</h3>` 
})
export class AppComponent {
  title = 'Lights app';
  isVisible : boolean = false;
  whenAllLightsAreOn(event){
    console.log(event);
    if(event){
      this.isVisible = true;
    }else{
      this.isVisible = false;
    }
    
  }
}
