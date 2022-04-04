import { Component } from '@angular/core';
import { IItem } from '../models/models';
import { SortService } from '../../core/services/sort.service';
import response from './response';
import { RunSearchService } from '../../core/services/run-search.service';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})

export class SearchResultConatinerComponent {
  public items: IItem[] = response.items;

  constructor(
    public sortService: SortService,
    public runSearchService: RunSearchService,
  ) {
    this.sortService.arr = this.items;
    console.log('start');
  }
}
