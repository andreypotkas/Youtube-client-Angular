import { Injectable } from '@angular/core';
import { IItem } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  arr: IItem[] = [];

  currentDateSort: string = 'descending';

  currentViewsSort: string = 'descending';

  dateSort() {
    if (this.currentDateSort === 'descending') {
      this.ascendingDateSort();
      this.currentDateSort = 'ascending';
    } else {
      this.descendingDateSort();
      this.currentDateSort = 'descending';
    }
  }

  viewsSort() {
    if (this.currentViewsSort === 'descending') {
      this.ascendingViewsSort();
      this.currentViewsSort = 'ascending';
    } else {
      this.descendingViewsSort();
      this.currentViewsSort = 'descending';
    }
  }

  descendingDateSort() {
    this.arr.sort((a, b) => Date.parse(a.snippet.publishedAt)
     - Date.parse(b.snippet.publishedAt));
  }

  ascendingDateSort() {
    this.arr.sort((a, b) => Date.parse(b.snippet.publishedAt)
     - Date.parse(a.snippet.publishedAt));
  }

  descendingViewsSort() {
    this.arr.sort((a, b) => Number(a.statistics.viewCount)
     - Number(b.statistics.viewCount));
  }

  ascendingViewsSort() {
    this.arr.sort((a, b) => Number(b.statistics.viewCount)
     - Number(a.statistics.viewCount));
  }
}
