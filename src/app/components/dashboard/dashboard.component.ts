import {
  AfterContentInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FireAuthService } from 'src/app/services/fireauth.service';
import {
  FirestoreService,
  IComponent,
} from 'src/app/services/firestore.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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
  selectorOpen: boolean = false;
  selectedPosition: number = 1;

  allComponents = [
    {
      "id": "weather",
      "name": "Wetter",
      "height": 2,
      "width": 1,
      "properties": {}
    },
    {
      "id": "clock",
      "name": "Uhr",
      "height": 1,
      "width": 1,
      "properties": {}
    },
    {
      "id": "sbb",
      "name": "SBB",
      "height": 1,
      "width": 2,
      "properties": {
        "start": "Limmatplatz",
        "destinations": ["Zürich HB", "ETH", "Schaffhausen"]
      }
    },
    {
      "id": "meme",
      "name": "Meme",
      "height": 1,
      "width": 1,
      "properties": {}
    }
  ]
  
  deleteComponent(component: IComponent) {
    this.firestoreService.deleteComponent(component);
  }

  showDeleteButton(id: string) {
    const component = document.getElementById(id);

    if (!component) return;

    if (component.style.display == '') {
      component.style.display = 'block';
    } else {
      component.style.display = '';
    }
  }

  openSelector(position: number) {
    this.selectorOpen = true;
    this.selectedPosition = position;
  }

  addComponent(component: any) {
    this.selectorOpen = false;
    component['position'] = this.selectedPosition;
    this.firestoreService.addComponent(component);
  } 

  augmentComponentClasses() {
    const occupiedPositions = [];

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

      classes += ` row-span-${component.height} col-span-${component.width}`;

      component.classes = classes;

      const x0 = (component.position - 1) % 3;
      const y0 = Math.floor((component.position - 1) / 3);

      for (let x = 0; x < component.width; x++) {
        for (let y = 0; y < component.height; y++) { 
          occupiedPositions.push(3*(y + y0) + (x + x0) + 1);
        }
      }
    }

    this.emptyPositions = [];
    for (let position = 1; position <= 6; position++) {
      if (!occupiedPositions.includes(position)) {
        let classes = '';

        switch (+position) {
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

        this.emptyPositions.push({
          "position": position,
          "classes": classes
        })
      }
    }
  }

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  constructor(
    private authService: FireAuthService,
    private firestoreService: FirestoreService,
    private modalService: ModalService
  ) {
    this.userData = {
      name: 'Anna',
      birthday: '1920-01-01T00:00:0.000Z',
      mailAddress: 'anna.sulzer@shinternet.ch',
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

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  async login(): Promise<void> {
    this.authService.login();
  }

  subscribe(): void {
    this.firestoreService.getAll()?.subscribe((data) => {
      this.userComponents = data;
      this.augmentComponentClasses();
    });
  }
}
