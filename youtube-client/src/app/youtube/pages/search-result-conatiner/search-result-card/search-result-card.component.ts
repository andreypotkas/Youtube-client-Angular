import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from 'src/app/core/services/youtube.service';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  constructor(
    public router: Router,
    public youtubeService: YoutubeService,
  ) {}

  @Input() index!:number;

  public title!: string;

  public srcImg!: string;

  public age!: number;

  ngOnInit(): void {
    this.title = this.youtubeService.searchListWithStat[this.index].snippet.title;
    this.srcImg = this.youtubeService.searchListWithStat[this.index].snippet.thumbnails.high.url;
    this.age = Date.now() - Date.parse(this.youtubeService
      .searchListWithStat[this.index].snippet.publishedAt);
  }

  openDetailsPage(id:number) {
    this.router.navigate(['/video', this.youtubeService.searchListWithStat[this.index].id.videoId]);
    this.youtubeService.currentId = this.index;
  }
}
