import { Component } from '@angular/core';
import { LogService } from '../../services/log/log.service';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'app';

  constructor(
    private log: LogService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.log.info('App', 'App initialized Successfully');
    const deviceReady = fromEvent(document, 'deviceready');
    deviceReady.subscribe(e => {
      this.log.info('App', 'Device now ready!');
    });
  }



}
