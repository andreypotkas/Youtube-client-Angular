import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/models';
import { SortService } from '../../core/services/sort.service';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  constructor(public sortService: SortService) {}

  transform(value: IItem[], str: string): IItem[] {
    if (str === 'descending') {
      return value.sort((a, b) => Date.parse(b.snippet.publishedAt)
      - Date.parse(a.snippet.publishedAt));
    } if (str === 'ascending') {
      return value.sort((a, b) => Date.parse(a.snippet.publishedAt)
      - Date.parse(b.snippet.publishedAt));
    }
    return value;
  }
}
