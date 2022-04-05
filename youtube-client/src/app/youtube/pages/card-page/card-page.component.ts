import { Component } from '@angular/core';
import { OpenDetailedInfoService } from '../../services/open-detailed-info.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent {
  public age = 0;

  constructor(public openDetailedService: OpenDetailedInfoService) {
    this.age = Date.now() - Date.parse(openDetailedService.current.snippet.publishedAt);
  }
}
