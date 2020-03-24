import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1><app-locationtable></app-locationtable>`
})
export class AppComponent {
  title = 'Locations';
}