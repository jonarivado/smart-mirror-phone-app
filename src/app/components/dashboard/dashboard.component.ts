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
  height?: any = [];
  width?: any = [];
  occupiedPositions: number = 0;
  emptyPositions?: any;

  deleteComponent(position: string) {
    for(let i in this.userComponents) {
      if(this.userComponents[i].position == position) {
        let newEmpty = this.userComponents[i].size[0] * this.userComponents[i].size[1];
        this.userComponents.splice(i, 1);
        for(let j = 0; j < newEmpty; j++) {
          this.emptyPositions.push(0);
        }
    }
    }
  }

  showDeleteButton(id: string) {
    document.getElementById(id)!.style.display = 'block';
  }


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
            "position": 3,
            "size": [1, 2],
            "clockType": "analog"
        },
    ];

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

      let width: any = this.userComponents[i].size[0];
      let height: any = this.userComponents[i].size[1];
      switch(this.userComponents[i].size[0]) {
        case 1:
          this.width[key] = 'col-span-1';
          break;
        case 2:
          this.width[key] = 'col-span-2';
          break;
        case 3:
          this.width[key] = 'col-span-3';
          break;
      }
      switch(this.userComponents[i].size[1]) {
        case 1:
          this.height[key] = 'row-span-1';
          break;
        case 2:
          this.height[key] = 'row-span-2';
          break;
        case 3:
          this.height[key] = 'row-span-3';
          break;
      }
      this.occupiedPositions += this.userComponents[i].size[0] * this.userComponents[i].size[1];
    }

    this.emptyPositions = Array(6-this.occupiedPositions).fill(0);
  }

  

  

}
