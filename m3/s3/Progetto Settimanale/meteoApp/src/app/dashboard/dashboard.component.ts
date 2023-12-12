

import { WeatherService } from './../services/weather.service';
import { Component } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ICityW } from '../pages/auth/Models/i-cityW';
import { IWeathObj } from '../pages/auth/Models/i-weath-obj';
import { PreferitiService } from '../services/preferiti.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  isFavIconClicked: boolean = false;

  searchQuery: string = '';
  cityData: ICityW[] = [];
  weatherData!: IWeathObj | undefined;
  cityName: string = '';
  http: any;
  authService: any;
  buttonDisabled: boolean = true;

  // Aggiunta delle nuove variabili
  favIconStates: { [key: number]: boolean } = {};

  constructor(private weatherSvc: WeatherService, public preferitiSvc: PreferitiService) {}

  findCity() {
    this.weatherData = undefined;
    this.weatherSvc.getData(this.cityName)
      .pipe(
        tap((data: ICityW[]) => {
          this.cityData = data;
        }),
        catchError((error) => {
          console.error('Errore durante la chiamata API:', error);
          throw error;
        })
      )
      .subscribe();
  }

  getWeather(lat: number, lon: number) {
    this.cityData = [];
    this.weatherSvc.getCityWeather(lat, lon)
      .pipe(
        tap((data: any) => {
          this.weatherData = data;
        })
      )
      .subscribe();
  }

  isEmpty() {
    this.buttonDisabled = this.cityName.trim() === '';
  }

  getImageUrl(identifier: string): string {
    switch (identifier.toLowerCase()) {
      case 'sole':
      case 'neve':
      case 'vento':
      case 'pioggia':
        return this.getRandomLoremPicsumUrl();
      default:
        return '';
    }
  }

  getRandomLoremPicsumUrl(): string {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/id/${randomImageId}/500/300`;
  }

  aggiungiAiPreferiti() {
    const cittaPreferita = this.weatherData?.city.name;
    if (cittaPreferita) {
      this.preferitiSvc.aggiungiAiPreferiti(cittaPreferita);
      this.isFavIconClicked = !this.isFavIconClicked;
    }
  }

  rimuoviDaPreferiti() {
    const cittaPreferita = this.weatherData?.city.name;
    if (cittaPreferita) {
      this.preferitiSvc.rimuoviDaPreferiti(cittaPreferita);
      this.isFavIconClicked = !this.isFavIconClicked;
    }
  }

  isCittaPreferita(): boolean {
    const cittaPreferita = this.weatherData?.city.name;
    return cittaPreferita ? this.preferitiSvc.getPreferiti().includes(cittaPreferita) : false;
  }

  toggleFavIcon(index: number) {
    const cittaPreferita = this.weatherData?.city.name;
    if (cittaPreferita) {
      this.favIconStates[index] = !this.favIconStates[index];

      if (this.favIconStates[index]) {
        this.preferitiSvc.aggiungiAiPreferiti(cittaPreferita);
      } else {
        this.preferitiSvc.rimuoviDaPreferiti(cittaPreferita);
      }
    }
  }
}
