import { Component } from '@angular/core';
import { IItem } from 'src/app/core/models/models';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { RunSearchService } from '../../../core/services/run-search.service';
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
    public runSearchService: RunSearchService,
    public youtubeService: YoutubeService,
  ) {
    this.sortService.videoList = this.items;
  }
  log() {
    console.log(this.items);
  }
}
