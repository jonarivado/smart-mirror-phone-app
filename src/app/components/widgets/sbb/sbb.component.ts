import { Component, OnInit } from '@angular/core';
import { IWidget } from 'src/app/services/firestore.service';

export const sbbDefault: IWidget = {
  id: 'sbb',
  name: 'SBB',
  height: 1,
  width: 2,
  "properties": {
    "start": "Limmatplatz",
    "destinations": ["Zürich HB", "ETH", "Schaffhausen"]
  },
  classes: 'bg-gradient-to-r from-red-500 to-red-700',
  style: '',
  description: 'Displays the next SBB departures from a specified location.',
};

@Component({
  selector: 'app-sbb',
  templateUrl: './sbb.component.html',
  styleUrls: ['./sbb.component.scss']
})
export class SbbComponent {}
