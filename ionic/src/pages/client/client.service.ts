
import { Injectable } from '@angular/core';
import { SERVEUR_URL } from '../../app/app.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Client } from './client.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

    Client_URL = SERVEUR_URL + 'api/';

    constructor(private http: HttpClient) {

    }

    findClients(): Observable<HttpResponse<Client[]>> {
        return this.http.
            get<Client[]>(this.Client_URL +
                'clients', { observe: 'response' });
    }

    createClient(client: Client): Observable<HttpResponse<Client>> {

        return this.http.post<Client>(this.Client_URL +
            'clients', client, { observe: 'response' });
    }

    updateClient(client: Client): Observable<HttpResponse<Client>> {

        return this.http.put<Client>(this.Client_URL +
            'clients', client, { observe: 'response' });
    }

    findClient(id: number): Observable<HttpResponse<Client>> {
        return this.http.get<Client>(`${this.Client_URL}clients/${id}`, { observe: 'response' });
    }

    deleteClient(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.Client_URL}clients/${id}`, { observe: 'response' });
    }
}