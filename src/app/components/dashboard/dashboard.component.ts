import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData?: any = {};
  userComponents?: any;
  positions?: any = [];

  if(): void {
    console.log(this.userComponents);
  }

  gugus?: any = []; 

  constructor() {
    this.userData = {
      "name": "Anna",
      "birthday": "1920-01-01T00:00:0.000Z",
      "mailAddress": "anna.sulzer@shinternet.ch"
    };

    this.userComponents = [
        {
            "id": "weather",              // response depends on the component type, feel free to change 
            "position": 1,
            "size": [2, 1],
            "locationString": "Dübendorf"
        },
        {
            "id": "clock",
            "position": 2,
            "size": [2, 1],
            "clockType": "analog"
        },
        {
          "id": "empty",
          "position": 3,
          "size": [2, 1]
      }
    ];

    for (const component of this.userComponents) {
      this.gugus.push(component.id);
    }

    console.log(this.gugus);
   }

  ngOnInit(): void {
    for (let position in this.userComponents) {
      if (this.userComponents[position].pos === 'clock') {
        this.positions.push(this.userComponents[position].position);
      }
    }
  }

  

  

}
