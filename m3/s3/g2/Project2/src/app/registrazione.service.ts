
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {
  registrati(utente: Utente): Observable<any> {

    console.log('Utente registrato:', utente);
    return of({ success: true, message: 'Registrazione avvenuta con successo.' });
  }
}
