import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChild('test') test;
  ngAfterViewInit() {
    console.log(this.test);
  }
  emitEvent(event) {
    console.log('in app', event);
  }
  callPhone(val) {
    console.log(val);
  }
}
