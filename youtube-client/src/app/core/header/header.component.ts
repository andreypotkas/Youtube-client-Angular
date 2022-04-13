import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RunSearchService } from '../services/run-search.service';
import { ToggleSortBarService } from '../services/toggle-sort-bar.service';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(
    public runSearchService: RunSearchService,
    public toggleSortBar: ToggleSortBarService,
    public authService: AuthService,
    public youtubeService: YoutubeService,
  ) {
    this.authService.checkUser();
  }
}
