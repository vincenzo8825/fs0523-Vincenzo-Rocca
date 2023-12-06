
import { Component } from '@angular/core';
import { RegistrazioneService } from '../registrazione.service';
import { Utente } from '../utente';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  utente: Utente = {
    nome: '',
    cognome: '',
    password: '',
    confermaPassword: '',
    genere: '',
    immagineProfilo: undefined,
    biografia: '',
    username: ''
  };

  passwordConfermaError: string = '';
  registrazioneError: string = '';

  constructor(private registrazioneService: RegistrazioneService) {}

  submitRegistrazione() {

    if (this.utente.password !== this.utente.confermaPassword) {
      this.passwordConfermaError = 'Le password non corrispondono.';
      return;
    }




    this.registrazioneService.registrati(this.utente).subscribe(
      (risposta: any) => {
        console.log(risposta);

      },
      (errore: any) => {
        console.error(errore);

        this.registrazioneError = 'Errore durante la registrazione.';
      }
    );
  }
}
