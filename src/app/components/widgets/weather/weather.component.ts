import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { IWidget } from 'src/app/services/firestore.service';

export const weatherDefault: IWidget = {
  id: 'weather',
  name: 'Wetter',
  height: 2,
  width: 1,
  "properties": {
    "longitude": 13.4115,
    "latitude": 52.5235
  },
  classes: 'bg-gradient-to-r from-blue-400 to-blue-600',
  style: '',
  description: 'Displays the current weather from a specified location.',
};

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() properties: Record<string, any> = weatherDefault.properties;

  weatherData!: Observable<any>;
  weatherIcon!: string;

  constructor(private http: HttpClient) {}

  ngAfterContentInit() {
    const latitude = this.properties['latitude'];
    const longitude = this.properties['longitude'];
    this.weatherData = this.http
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin`
      )
      .pipe(share());
  }
}
