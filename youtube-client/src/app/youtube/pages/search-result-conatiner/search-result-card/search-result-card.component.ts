import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  @Input() index!:number;
  public title!: string;
  public srcImg!: string;
  public publicationAge!: number;
  constructor(
    public router: Router,
    public youtubeService: YoutubeService,
  ) {}
  ngOnInit(): void {
    if (this.youtubeService.searchListWithStat) {
      this.title = this.youtubeService.searchListWithStat[this.index].snippet.title;
      this.srcImg = this.youtubeService.searchListWithStat[this.index].snippet.thumbnails.high.url;
      this.publicationAge = Date.now() - Date.parse(this.youtubeService
        .searchListWithStat[this.index].snippet.publishedAt);
    }
  }
  public openDetailsPage(id:number): void {
    this.router.navigate(['/video', this.youtubeService.searchListWithStat[this.index].id.videoId]);
    this.youtubeService.currentId = this.index;
  }
}
