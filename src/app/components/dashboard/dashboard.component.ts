import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fireauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userData?: any = {};
  userComponents?: any;
  positions?: any = [];
  height?: any = [];
  width?: any = [];
  occupiedPositions: number = 0;
  emptyPositions?: any;

  signedOut: boolean = true;

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

  augmentComponentClasses() {
    let occupiedPositions = 0;

    for (const component of this.userComponents) {   
      let classes;
      
      switch (+component.position) {
        case 1:
          classes = 'col-start-1 row-start-1';
          break;
        case 2:
          classes = 'col-start-2 row-start-1';
          break;
        case 3:
          classes = 'col-start-3 row-start-1';
          break;
        case 4:
          classes = 'col-start-1 row-start-2';
          break;
        case 5:
          classes = 'col-start-2 row-start-2';
          break;
        case 6:
          classes = 'col-start-3 row-start-2';
          break;
      }

      classes += ` row-span-${component.height} col-span-${component.width}`
      
      component.classes = classes;

      occupiedPositions += component.height * component.width
    }

    this.emptyPositions = Array(6 - occupiedPositions).fill(0);
  }

  constructor(
    private authService: FireAuthService,
    private firestoreService: FirestoreService
  ) {
    this.userData = {
      "name": "Anna",
      "birthday": "1920-01-01T00:00:0.000Z",
      "mailAddress": "anna.sulzer@shinternet.ch"
    };
   }


  async ngAfterContentInit(): Promise<void> {    
    this.signedOut = true;

    if (localStorage.getItem('user')) {
      this.subscribe();
      this.signedOut = false;
    } else {
      await this.authService.storeUser();
      
      if (localStorage.getItem('user')) {
        this.signedOut = false;
        this.subscribe();
      }
    }
  }

  async login(): Promise<void> {
    this.authService.login();
  }

  subscribe(): void {
    this.firestoreService.getAll()?.subscribe((data) => {
      this.userComponents = data;
      this.augmentComponentClasses()
    });
  }

}
