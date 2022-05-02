import { Injectable } from '@angular/core';
import { IItem } from '../models/models';
import { sortType } from '../models/sort-type';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  public videoList: IItem[] = [];
  public currentDateSort!: sortType;
  public currentViewsSort!: sortType;
  public currentSortWord: string = '';
  public isBarVisible: boolean = false;

  public toggle(): void {
    this.isBarVisible = !this.isBarVisible;
  }
}
