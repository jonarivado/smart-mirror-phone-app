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
      },
      {
        "id": "empty",
        "position": 4,
        "size": [2, 1]
    },
    {
      "id": "empty",
      "position": 5,
      "size": [2, 1]
  },
  {
    "id": "empty",
    "position": 6,
    "size": [2, 1]
}
    ];

    for (const component of this.userComponents) {
      this.gugus.push(component.id);
    }

    console.log(this.gugus);
   }

  ngOnInit(): void {
    for(let i in this.userComponents) {
      let key: any = this.userComponents[i].id;
      switch(this.userComponents[i].position) {
        case 1:
          this.positions[key] = 'col-start-1 row-start-1';
          break;
        case 2:
          this.positions[key] = 'col-start-2 row-start-1';
          break;
        case 3:
          this.positions[key] = 'col-start-3 row-start-1';
          break;
        case 4:
          this.positions[key] = 'col-start-1 row-start-2';
          break;
        case 5:
          this.positions[key] = 'col-start-2 row-start-2';
          break;
        case 6:
          this.positions[key] = 'col-start-3 row-start-2';
          break;
      } 
    }
  }

  

  

}
