import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-component',
  template: '<img src="{{path}}" (click)="toggleLights()" width="30" alt=""/>'
})
export class LightComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
