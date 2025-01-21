import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}
 ngOnInit() {
   console.log('Hola Mundo');
   let numero = 0;

   
   numero = 6;
   numero = 6;   
   numero = numero * 2;
   numero = numero + 2;
   
  

  console.log('Hola Mundo1');
  console.log('Hola Mundo2');
   console.log('Hola Mundo3');
   

  console.log('Hola Mundo4');
 }
}
