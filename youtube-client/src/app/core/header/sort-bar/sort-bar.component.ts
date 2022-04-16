import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { sortType } from '../../models/sort-type';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  constructor(
    public sort: SortService,
  ) {}

  public changeDateSort():void {
    this.sort.currentDateSort = (this.sort.currentDateSort !== sortType.descending)
      ? sortType.descending
      : sortType.ascending;
  }

  public changeViewsSort(): void {
    this.sort.currentViewsSort = (this.sort.currentViewsSort !== sortType.descending)
      ? sortType.descending
      : sortType.ascending;
  }
}
