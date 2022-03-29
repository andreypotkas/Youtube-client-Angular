import { Component } from '@angular/core';
import response from 'src/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  awd = response;

  constructor() {
    console.log(this.awd);
  }
}
