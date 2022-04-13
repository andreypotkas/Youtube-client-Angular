import { Pipe, PipeTransform } from '@angular/core';
import { sortType } from 'src/app/core/models/sort-type';
import { IItem } from '../../core/models/models';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
  constructor() {}

  transform(value: IItem[], str: sortType): IItem[] {
    if (str === sortType.descending) {
      return value.sort((a, b) => Number(b.statistics.viewCount)
      - Number(a.statistics.viewCount));
    } if (str === sortType.ascending) {
      return value.sort((a, b) => Number(a.statistics.viewCount)
      - Number(b.statistics.viewCount));
    }
    return value;
  }
}
