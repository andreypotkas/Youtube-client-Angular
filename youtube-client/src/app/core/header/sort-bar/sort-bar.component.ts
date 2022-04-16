import { Component } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  constructor(public sort: SortService) {}

  changeDateSort() {
    this.sort.currentDateSort = (this.sort.currentDateSort !== 'descending') ? 'descending' : 'ascending';
  }

  changeViewsSort() {
    this.sort.currentViewsSort = (this.sort.currentViewsSort !== 'descending') ? 'descending' : 'ascending';
  }
}
