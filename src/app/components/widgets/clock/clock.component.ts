import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() type?: string = '';
  @Input() colPosition?: string;
  @Input() rowPosition?: string;
  @Input() colSpan?: string;
  @Input() rowSpan?: string;

  time: any;


  refreshTime() {
    let now: Date = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let secondsString = seconds < 10 ? '0' + seconds : seconds;
    let minutesString  = minutes < 10 ? '0' + minutes : minutes;
    this.time =  hours + ':' + minutesString + ':' + secondsString;
  }

  //call refreshTime() every second
  ngAfterViewInit() {
    this.refreshTime();
    setInterval(() => {
      this.refreshTime();
    }, 1000);
  }


  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
