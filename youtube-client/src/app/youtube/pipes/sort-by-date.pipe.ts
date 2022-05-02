import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../../core/models/models';
import { sortType } from '../../core/models/sort-type';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  constructor() {}

  transform(value: IItem[], str: sortType): IItem[] {
    if (str === sortType.descending) {
      return value.sort((a, b) => Date.parse(b.snippet.publishedAt)
      - Date.parse(a.snippet.publishedAt));
    } if (str === sortType.ascending) {
      return value.sort((a, b) => Date.parse(a.snippet.publishedAt)
      - Date.parse(b.snippet.publishedAt));
    }
    return value;
  }
}
