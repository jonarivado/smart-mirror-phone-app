import { Component, Input, OnInit } from '@angular/core';
import { IWidget } from 'src/app/services/firestore.service';

export const clockDefault: IWidget = {
  id: 'clock',
  name: 'Uhr',
  height: 1,
  width: 1,
  properties: {},
  classes: 'aspect-w-1 aspect-h-1 bg-gradient-to-r from-white to-gray-200',
  style: '',
};

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  timeString: string = '';

  refreshTime() {
    let now: Date = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let secondsString = seconds < 10 ? '0' + seconds : seconds;
    let minutesString = minutes < 10 ? '0' + minutes : minutes;
    this.timeString = hours + ':' + minutesString + ':' + secondsString;
  }

  //call refreshTime() every second
  ngAfterViewInit() {
    this.refreshTime();
    setInterval(() => {
      this.refreshTime();
    }, 1000);
  }
}
