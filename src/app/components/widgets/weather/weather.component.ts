import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, share } from 'rxjs/operators';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData!: Observable<any>;
  weatherIcon!: string;

  constructor(private http:HttpClient) { 
    this.weatherData = this.http.get('https://api.open-meteo.com/v1/forecast?latitude=52.5235&longitude=13.4115&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin')
    .pipe(share());
  }

  ngOnInit(): void {
  }

}
