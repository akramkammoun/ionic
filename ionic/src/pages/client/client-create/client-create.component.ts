import { ToastController, NavController, NavParams } from 'ionic-angular';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

import { HttpResponse } from '@angular/common/http';
import { ClientPage } from '../client';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html'
})
export class ClientCreateComponent implements OnInit {

  client: Client;
  constructor(private clientService: ClientService,
    private navController: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController) { }

  ngOnInit() {

    this.client = new Client();

    const id = this.navParams.get('id');

    // Edit
    if (id !== undefined) {

      this.clientService.findClient(id).subscribe((client: HttpResponse<Client>) => {
        this.client = client.body;
      });
    }
  }

  save() {
    console.log(this.client);

    if (this.client.id === null) {
      this.clientService.createClient(this.client).
        subscribe((client: HttpResponse<Client>) => {

          const toast = this.toastCtrl.create({
            message: 'Le client est sauvegardé: ' + client.body.id,
            duration: 3000
          });
          toast.present().then(() => {
            this.navController.setRoot(ClientPage);
          });
        });
    } else {
      this.clientService.updateClient(this.client).
        subscribe((client: HttpResponse<Client>) => {

          const toast = this.toastCtrl.create({
            message: 'Le client est sauvegardé: ' + client.body.id,
            duration: 3000
          });
          toast.present().then(() => {
            this.navController.setRoot(ClientPage);
          });
        });
    }
  }

}
