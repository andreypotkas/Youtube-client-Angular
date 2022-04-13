import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter, map, mergeMap, Subject,
} from 'rxjs';
import { IItem, IResponse, IStatistics } from '../models/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public searchValue = new Subject<string>();
  public searchKeyWord!: string;
  public statisticsArr!: IStatistics[];
  public currentId!: number;
  public searchList!: IItem[];
  public searchListWithStat: IItem[] = [];

  constructor(
    public httpClient: HttpClient,
    public authService: AuthService,
  ) {
    this.searchValue.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      filter((item) => item.length >= 3),
    )
      .subscribe({
        next: (value) => {
          this.getVideos(value);
        },
      });
  }

  getVideos(value: string) {
    if (this.authService.isLoggedIn.value) {
      return this.httpClient.get<IResponse>(
        `search?&type=video&maxResults=15&q=${value}&part=snippet`,
      ).pipe(
        map((videoResponse: IResponse) => {
          const idList: string[] = videoResponse.items
            .map((item: IItem) => item.id.videoId);
          this.searchList = videoResponse.items;
          return idList;
        }),
        mergeMap((idList) => this.httpClient.get(`videos?part=statistics&&id=${idList}`)),
      ).pipe(map((stat:any) => {
        const statistics: IStatistics[] = stat.items.map((items: IItem) => items.statistics);
        this.statisticsArr = statistics;
        return statistics;
      })).subscribe({
        next: (stat) => {
          stat.forEach((item, index) => {
            this.searchListWithStat[index] = this.searchList[index];
            this.searchListWithStat[index].statistics = item;
          });
        },
      });
    }
    return '';
  }
}
