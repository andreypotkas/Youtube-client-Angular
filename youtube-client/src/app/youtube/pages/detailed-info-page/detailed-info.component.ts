import { Component, OnInit } from '@angular/core';
import { ISnippet, IStatistics } from '../../../core/models/models';
import { YoutubeService } from '../../../core/services/youtube.service';

@Component({
  selector: 'detailed-info-page',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoPageComponent implements OnInit {
  public publicationAge!: number;
  public stat: IStatistics = this.youtubeService.currentStat;
  public snippet: ISnippet = this.youtubeService.currentSnippet;
  constructor(public youtubeService: YoutubeService) {}

  ngOnInit(): void {
    if (this.snippet) {
      this.publicationAge = Date.now() - Date.parse(this.snippet.publishedAt);
    }
  }
}
