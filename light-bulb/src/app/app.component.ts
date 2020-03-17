import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
            <app-lights></app-lights>` 
})
export class AppComponent {
  title = 'Lights app';
}
