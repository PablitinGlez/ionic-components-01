import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: false,
})
export class AlertsPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  // Alerta simple
  async presentSimpleAlert() {
    const alert = await this.alertController.create({
      header: 'Este es el título',
      subHeader: 'Subtítulo opcional',
      message: 'Este es un mensaje corto y completo.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  // Alerta con botones personalizados
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancelar',
      handler: () => {
        console.log('Alerta cancelada');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  // Manejar el cierre de la alerta
  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

  // Alerta con entradas de radio
  public alertInputs = [
    {
      label: 'Red',
      type: 'radio' as 'radio', // Especificar el tipo como 'radio'
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio' as 'radio', // Especificar el tipo como 'radio'
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio' as 'radio', // Especificar el tipo como 'radio'
      value: 'green',
    },
  ];

  // Alerta con opciones de color
  async presentColorAlert() {
    const alert = await this.alertController.create({
      header: 'Selecciona tu color favorito',
      buttons: ['OK'],
      inputs: this.alertInputs,
    });

    await alert.present();
  }

  // Alerta con botones simples
  async presentSimpleButtonAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Mensaje de alerta simple.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
