import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-selector',
  templateUrl: './component-selector.component.html',
  styleUrls: ['./component-selector.component.scss']
})
export class ComponentSelectorComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() title: string = '';
  @Input() body: string = '';
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  ngOnInit(): void {
    console.log('Modal init');
  }

  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
  } 

 ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
  
}
