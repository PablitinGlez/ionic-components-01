import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

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

  constructor(
    private navController: NavController
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    

    //obtener los valores de formulario
    console.log(form.value)
    console.log('valid', form.valid);
    

    //so form es invalido
    //console.log(todos los campos son requeridos return
    if (!form.valid) {
      console.log('Todos los campos son requeridos');
      return;
    }



    //si usaurio = admin y password = admin
    //entonces con sole .log  login correcto
    //si no console.log login incorrecto
    if (this.email === 'admin' && this.password === 'admin') {
      this.navController.navigateForward('/inicio')
    } else {
      console.log('login incorrecto');
    }

    
  }
}