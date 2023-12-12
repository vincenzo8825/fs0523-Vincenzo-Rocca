import { IWeathObj } from './../pages/auth/Models/i-weath-obj';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  private cityUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private apiKey = environment.apiKey;

  getData(city:string):Observable<any>{

  const params = new HttpParams()
      .set('q', city)
      .set('limit', '5')
      .set('appid', this.apiKey);

      const apiUrlWithParams = `${this.cityUrl}?${params.toString()}`;

    return this.http.get(apiUrlWithParams);
  }

  getCityWeather(lat:number,lon:number):Observable<IWeathObj>{

  const params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('appid', this.apiKey);

  const apiUrlWithParams = `${this.weatherUrl}?${params.toString()}`;


  return this.http.get<IWeathObj>(apiUrlWithParams);
  }

}



