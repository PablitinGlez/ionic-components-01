import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonAccordionGroup
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.page.html',
  styleUrls: ['./acordion.page.scss'],
  standalone: false,
})
export class AcordionPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  @ViewChild('accordionGroup', { static: true })
  accordionGroup!: IonAccordionGroup;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
}
