import { Component, EventEmitter, Output } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  sortValue:string = '';

  constructor(public sort: SortService){ }
}
