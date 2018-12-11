import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientService } from './client.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientPage } from './client';

@NgModule({
  declarations: [
    ClientPage,
    ClientCreateComponent
  ],
  entryComponents:[
    ClientCreateComponent
  ],
  imports: [
    IonicPageModule.forChild(ClientPage),
  ],
  providers: [
    ClientService
  ],
  exports: [
    ClientCreateComponent
  ]
})
export class ClientPageModule {}
