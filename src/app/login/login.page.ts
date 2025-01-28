import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async login(form: NgForm) {
    // Obtener los valores del formulario
    console.log(form.value);
    console.log('valid', form.valid);

    // Si el formulario es inválido
    if (!form.valid) {
      await this.presentAlert('Error', 'Todos los campos son requeridos');
      return;
    }

    // Validar credenciales
    if (this.email === 'admin' && this.password === 'admin') {
     
      this.navController.navigateForward('/inicio'); // Navegar a la página de inicio
    } else {
      await this.presentAlert('Error', 'Credenciales incorrectas');
    }
  }
}
