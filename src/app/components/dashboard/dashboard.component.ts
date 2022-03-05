import { Component } from '@angular/core';
import { FireAuthService } from 'src/app/services/fireauth.service';
import { FirestoreService, IWidget } from 'src/app/services/firestore.service';
import {
  addPositionStyles,
  allWidgets,
  applyDefaultStyle,
  cloneWidget,
  getEmptyPositions,
  idToWidgets,
} from '../widgets/widgets';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userData?: any = {};
  userWidgets?: any;
  emptyPositions?: any;

  signedOut: boolean = true;
  selectorOpen: boolean = false;
  selectedPosition: number = 1;

  allWidgets: Array<IWidget> = allWidgets;

  deleteWidget(widget: IWidget) {
    this.firestoreService.deleteComponent(widget);
  }

  toggleDeleteButton(id: string) {
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

  addWidget(widget_id: string) {
    const defaultWidget = idToWidgets[widget_id];
    const newWidget = cloneWidget(defaultWidget);

    newWidget.position = this.selectedPosition;
    this.firestoreService.addComponent(newWidget);

    this.selectorOpen = false;
  }

  constructor(
    private authService: FireAuthService,
    private firestoreService: FirestoreService
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

  async login(): Promise<void> {
    this.authService.login();
  }

  subscribe(): void {
    this.firestoreService.getAll()?.subscribe((data) => {
      this.userWidgets = data;
      applyDefaultStyle(this.userWidgets);
      addPositionStyles(this.userWidgets);

      this.emptyPositions = getEmptyPositions(this.userWidgets);
      addPositionStyles(this.emptyPositions);
    });
  }
}
