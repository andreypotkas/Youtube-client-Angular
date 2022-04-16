import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EMPTY, map, mergeMap, Observable, Subject,
} from 'rxjs';
import {
  IItem, IResponse, ISnippet, IStatistics,
} from '../models/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public searchValue = new Subject<string>();
  public searchKeyWord!: string;
  public currentSnippet!: ISnippet;
  public currentStat!: IStatistics;
  public searchList!: IItem[];
  private statisticsArr!: IStatistics[];
  constructor(
    public httpClient: HttpClient,
    public authService: AuthService,
  ) {}

  public getVideos(value: string): Observable<any> {
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
      ).pipe(map((stat: any) => {
        const statistics: IStatistics[] = stat.items.map((items: IItem) => items.statistics);
        this.statisticsArr = statistics;
        statistics.forEach((item, index) => {
          this.searchList[index].statistics = item;
        });
        return this.searchList;
      }));
    }
    return EMPTY;
  }
}
