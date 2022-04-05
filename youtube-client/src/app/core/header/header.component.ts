import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RunSearchService } from '../services/run-search.service';
import { ToggleSortBarService } from '../services/toggle-sort-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {
  constructor(
    public runSearchService: RunSearchService,
    public toggleSortBar: ToggleSortBarService,
    public authService: AuthService
  ) {
    this.authService.checkUser();
  }
}
