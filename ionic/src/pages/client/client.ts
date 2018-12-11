import { ClientCreateComponent } from './client-create/client-create.component';
import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { HttpResponse } from '@angular/common/http';
import { ToastController, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage implements OnInit {

  clients: Client[];

  constructor(
    private clientService: ClientService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    public alertCtrl: AlertController) {
  }
  ngOnInit(): void {

    this.loadAll();
  }

  loadAll(){
    this.clientService.findClients().subscribe((clients: HttpResponse<Client[]>) => {

      this.clients = clients.body;
      const toast = this.toastCtrl.create({
        message: 'La liste de clients est chargé',
        duration: 3000
      });
      toast.present();

    });
  }

  createClient() {
    this.navCtrl.setRoot(ClientCreateComponent);
  }

  editClient(id: number) {
    this.navCtrl.setRoot(ClientCreateComponent, { 'id': id });
  }

  deleteClient(id: number) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Client',
      message: 'Do you agree to delete',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {

            this.clientService.deleteClient(id).subscribe((response) => {

            //   console.log(result);
            //   const toast = this.toastCtrl.create({
            //     message: 'Le client est supprimé: ' + id,
            //     duration: 3000
            //   });
            //   toast.present();
            //   // this.loadAll();
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
