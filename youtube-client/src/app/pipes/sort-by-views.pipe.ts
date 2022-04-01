import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/models';
import { SortService } from '../services/sort.service';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
  constructor(public sortService: SortService) {}

  transform(value: IItem[], str: string): IItem[] {
    if (str === 'descending') {
      return value.sort((a, b) => Number(b.statistics.viewCount)
      - Number(a.statistics.viewCount));
    } if (str === 'ascending') {
      return value.sort((a, b) => Number(a.statistics.viewCount)
      - Number(b.statistics.viewCount));
    }
    return value;
  }
}
