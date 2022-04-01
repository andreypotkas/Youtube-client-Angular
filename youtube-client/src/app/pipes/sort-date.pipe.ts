import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/models';

@Pipe({
  name: 'sortDate',
})
export class SortDatePipe implements PipeTransform {
  transform(value: unknown, ...args: IItem[]): unknown {
    return args.sort((a, b) => Date.parse(b.snippet.publishedAt)
     - Date.parse(a.snippet.publishedAt));
  }
}
