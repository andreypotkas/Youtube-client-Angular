import { Component } from '@angular/core';
import { IItem } from '../models/models';
import { SortService } from '../services/sort.service';
import response from './response';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})

export class SearchResultConatinerComponent {
  public items: IItem[] = response.items;

  constructor(public sortService: SortService) {
    this.sortService.arr = this.items;
  }
}
