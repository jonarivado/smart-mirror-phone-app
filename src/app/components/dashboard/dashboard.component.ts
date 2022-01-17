import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userComponents, event.previousIndex, event.currentIndex);
  }

  
  userData = {
    "name": "Anna",
    "birthday": "1920-01-01T00:00:0.000Z",
    "mailAddress": "anna.sulzer@shinternet.ch"
  };

  userComponents = [
    {
        "id": "weather",              // response depends on the component type, feel free to change 
        "x": 0,
        "y": 0,
        "size": [2, 1],
        "locationString": "Dübendorf"
    },
    {
        "id": "clock",
        "x": 0,
        "y": 1,
        "size": [2, 1],
        "clockType": "analog"
    }
];



  constructor() {
   }

  ngOnInit(): void {
    
  }

  

}
