import { Injectable } from '@angular/core';
import { IItem } from '../models/models';
import response from '../search-result-conatiner/response';

@Injectable({
  providedIn: 'root',
})
export class OpenDetailedInfoService {
  public items: IItem[] = response.items;

  public id = 0;

  public current: IItem = this.items[0];
}
