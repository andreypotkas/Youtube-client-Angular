import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/models';
import { SortService } from '../../core/services/sort.service';

@Pipe({
  name: 'sortByWords',
})
export class SortByWordsPipe implements PipeTransform {
  constructor(public sortService: SortService) {}

  transform(value: IItem[], str: string): IItem[] {
    if (str) {
      return value.filter((e) => e.snippet.title.toLocaleLowerCase()
        .includes(str.toLocaleLowerCase()));
    }
    return value;
  }
}
