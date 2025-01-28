import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ItemChatComponent } from './item-chat/item-chat.component';
ItemChatComponent



@NgModule({
  declarations: [
    ItemChatComponent,

  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ItemChatComponent
  ]
})
export class ComponentsModule { }
