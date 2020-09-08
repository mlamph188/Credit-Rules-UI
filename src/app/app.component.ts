import { Component } from '@angular/core';
import { AppEndPoints } from '@app/core';

@Component({
  selector: 'esw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Credit-Rules-UI';
  apiUrl: string;

  constructor(private endPoints: AppEndPoints) {
    this.apiUrl = this.endPoints.API_ENDPOINT;
  }
}
