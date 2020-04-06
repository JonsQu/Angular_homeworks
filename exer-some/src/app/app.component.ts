import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input #myvalue (keyup.enter)="saveData(myvalue.value); myvalue.value=''" placeholder="Programming language" 
              (blur)="saveData(myvalue.value); myvalue.value=''">
            <ul><li *ngFor="let item of pList">{{item}}</li></ul>`
})
export class AppComponent {
  title = 'exer-some';
  pList : String[] = [];

  saveData(myvalue: String){
    this.pList.push(myvalue);
  }
}
