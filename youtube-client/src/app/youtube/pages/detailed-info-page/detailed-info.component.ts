import { Component } from '@angular/core';
import { YoutubeService } from '../../../core/services/youtube.service';

@Component({
  selector: 'detailed-info-page',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoPageComponent {
  public age = 0;

  constructor(public youtubeService: YoutubeService) {
    this.age = Date.now() - Date.parse(youtubeService.searchListWithStat[0].snippet.publishedAt);
  }
}
