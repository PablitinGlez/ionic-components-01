import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  Nombre: string = '';
  Ciudad: string = '';
  Telefono: string = '';
  Correo: string = '';
  FechaNacimiento: string = '';
  Contrasena: string = '';
  ConfirmacionContrasena: string = '';

  constructor(private navController: NavController) {}

  ngOnInit() {}

  register() {
    // Verificar que todos los campos están completos
    if (
      !this.Nombre ||
      !this.Ciudad ||
      !this.Telefono ||
      !this.Correo ||
     
      !this.Contrasena ||
      !this.ConfirmacionContrasena
    ) {
      console.log('Todos los campos son requeridos');
      return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.Correo)) {
      console.log('El correo electrónico no es válido');
      return;
    }

    // Validar el formato del número de teléfono
    if (this.Telefono.length < 10 || !/^\d+$/.test(this.Telefono)) {
      console.log('El número de teléfono no es válido');
      return;
    }

    // Verificar que las contraseñas coincidan
    if (this.Contrasena !== this.ConfirmacionContrasena) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    // Registro completado
    console.log('Registro completado con éxito');
    console.log({
      Nombre: this.Nombre,
      Ciudad: this.Ciudad,
      Telefono: this.Telefono,
      Correo: this.Correo,
      FechaNacimiento: this.FechaNacimiento,
    });

    // Navegar a la página de inicio
    this.navController.navigateForward('/inicio');
  }
}
