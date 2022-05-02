import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../../core/models/models';

@Pipe({
  name: 'sortByWords',
})
export class SortByWordsPipe implements PipeTransform {
  constructor() {}

  transform(value: IItem[], str: string): IItem[] {
    if (str) {
      return value.filter((e) => e.snippet.title.toLocaleLowerCase()
        .includes(str.toLocaleLowerCase()));
    }
    return value;
  }
}
