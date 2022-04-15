import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { SortService } from '../../../core/services/sort.service';
import { IItem } from '../../../core/models/models';
import { YoutubeService } from '../../../core/services/youtube.service';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})

export class SearchResultConatinerComponent implements OnInit {
  public videoList!:IItem[];
  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
  ) { }

  ngOnInit(): void {
    this.youtubeService.searchValue.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      filter((item) => item.length >= 3),
    )
      .subscribe({
        next: (value) => {
          this.youtubeService.getVideos(value)
            .subscribe((videos) => this.videoList = videos);
        },
      });
  }
}
