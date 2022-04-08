import { Component } from '@angular/core';
import { RunSearchService } from '../../../core/services/run-search.service';
import { SortService } from '../../../core/services/sort.service';
import { IItem } from '../../models/models';
import response from './response';

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
  }
}
