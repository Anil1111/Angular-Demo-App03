import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Fernanda';
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi = Math.PI;
  a = 0.234;
  salary = 1234.5;
  jsonExample = {
    name: 'John',
    age: 30,
    cars: {
      car1: 'Ford',
      car2: 'BMW',
      car3: 'Fiat'
    }
   };
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Data is here!'), 3500);
  })
  theDate = new Date();

}
