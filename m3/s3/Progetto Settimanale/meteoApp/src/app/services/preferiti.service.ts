import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreferitiService {
  preferiti: string[] = [];



  aggiungiAiPreferiti(citta: string) {
    if (!this.preferiti.includes(citta)) {
      this.preferiti.push(citta);
    }
  }

  rimuoviDaPreferiti(citta: string) {
    const index = this.preferiti.indexOf(citta);
    if (index !== -1) {
      this.preferiti.splice(index, 1);
    }
  }

  getPreferiti(): string[] {
    return this.preferiti;
  }
}
