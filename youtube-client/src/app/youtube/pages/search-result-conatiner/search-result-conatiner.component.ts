import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter, Subscription,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { SortService } from '../../../core/services/sort.service';
import { IItem } from '../../../core/models/models';
import { YoutubeService } from '../../../core/services/youtube.service';
import { ICustomVideo } from '../../../redux/app.state';
import { selectCustomVideos } from '../../../redux/selectors/customVideos.selector';
import { selectApiVideos } from '../../../redux/selectors/api-video.selector';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})

export class SearchResultConatinerComponent implements OnInit, OnDestroy {
  public videoList!:IItem[];
  public customVideoList!: ICustomVideo[];
  private subscription!: Subscription;
  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.subscription = this.youtubeService.searchValue.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      filter((item) => item.length >= 3),
    )
      .subscribe({
        next: (value) => {
          this.youtubeService.getVideos(value).subscribe();
          this.store.select(selectApiVideos)
            .subscribe((videos) => this.videoList = videos);
          this.store.select(selectCustomVideos)
            .subscribe((customVideos) => this.customVideoList = customVideos);
        },
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
