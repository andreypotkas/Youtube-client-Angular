import { Component } from '@angular/core';
import { RunSearchService } from '../services/run-search.service';
import { ToggleSortBarService } from '../services/toggle-sort-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(
    public runSearchService: RunSearchService,
    public toggleSortBar: ToggleSortBarService,
  ) {}
}
