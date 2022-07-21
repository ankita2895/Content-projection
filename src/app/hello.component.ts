import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Output() emitEvent = new EventEmitter;
  @Input() name;
  onlclick(event) {
    console.log(event)
    this.emitEvent.emit(true);
  }
}
