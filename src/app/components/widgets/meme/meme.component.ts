import { Component, OnInit } from '@angular/core';
import { IWidget } from 'src/app/services/firestore.service';

export const memeDefault: IWidget = {
  id: 'meme',
  name: 'Meme',
  height: 1,
  width: 1,
  properties: {},
  classes: 'aspect-w-1 aspect-h-1 bg-gradient-to-r from-green-400 to-green-600',
  style: '',
};

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss'],
})
export class MemeComponent {}
