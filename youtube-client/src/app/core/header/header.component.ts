import { Component } from '@angular/core';
import { SortService } from '../services/sort.service';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(
    public sortService: SortService,
    public youtubeService: YoutubeService,
  ) {}
}
