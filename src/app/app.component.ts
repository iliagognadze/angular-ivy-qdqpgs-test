import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  somethingCool = 'mgoni mushaobs';
  giusMsg = 'Giush Tu Amas Xedav Znachit Ragac TSL Gavadzre';
}
