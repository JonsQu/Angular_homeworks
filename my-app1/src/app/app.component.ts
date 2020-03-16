import { Component } from '@angular/core';


@Component({
  selector: 'my-selector',
  template: `<button (click)="toggle()">Toggle Component</button>
             <app-nameform [forbiddenName]="doNotAllowThisName" *ngIf="isVisible"></app-nameform>`
})
export class AppComponent  { 
  isVisible : boolean = true
  doNotAllowThisName : string = 'Pekka';
  toggle() {
      this.isVisible = !this.isVisible
  }
}