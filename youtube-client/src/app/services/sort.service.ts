import { Injectable } from '@angular/core';
import { IItem } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  arr: IItem[] = [];

  currentDateSort: string = '';

  currentViewsSort: string = '';

  currentSortWord: string = '';
}
