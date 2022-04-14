import { Component } from '@angular/core';
import { IItem } from '../../../core/models/models';
import { YoutubeService } from '../../../core/services/youtube.service';
import { SortService } from '../../../core/services/sort.service';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})

export class SearchResultConatinerComponent {
  public items!:IItem[];
  constructor(
    public sortService: SortService,
    public youtubeService: YoutubeService,
  ) {
    this.sortService.videoList = this.items;
  }
}
