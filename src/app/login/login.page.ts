import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  //forma 1 inicialozacion directa = '',
  //2da en el constructur acceder a this.password = ''
  //3 decir al compilador que se encarga despues de la varaible un
  //cuando kiero  enlazar a un evento un  ()
  //y los corchetes

  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {}

  login() {
    //si usaurio = admin y password = admin
    //entonces con sole .log  login correcto
    //si no console.log login incorrecto
    if (this.email === 'admin' && this.password === 'admin') {
      console.log('login correcto');
    } else {
      console.log('login incorrecto');
    }
  }
}