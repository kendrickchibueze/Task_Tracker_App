import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text:string;
  @Input() color:string;
  @Output() btnClick= new EventEmitter()

  constructor() {
    this.text = '';
    this.color =''
  }
// just as we took input into the ButtonComponent,
// we will output an event emitter
  onClick(){
       this.btnClick.emit()
  }


}
