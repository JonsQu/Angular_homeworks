import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<form>
  <div>
    <input placeholder="Name">
  </div>
  <div>
    <input placeholder="E-mail">
  </div>
  <div>
    <input placeholder="Programming language">
  </div>
  </form>`
})
export class AppComponent {
  title = 'form-app';
}
