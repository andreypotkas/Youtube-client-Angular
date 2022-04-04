import { Injectable } from '@angular/core';
import { IItem } from '../../youtube/models/models';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  arr: IItem[] = [];

  currentDateSort: string = '';

  currentViewsSort: string = '';

  currentSortWord: string = '';
}
