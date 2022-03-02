import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let serviceUrl: string = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin';

@Injectable({
  providedIn: 'root'
})


export class WeatherdataService {

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get(serviceUrl);
  }

}
