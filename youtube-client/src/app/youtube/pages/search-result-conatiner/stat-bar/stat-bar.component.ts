import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatBarComponent {
    @Input() index!: number;
    constructor(public youtubeService: YoutubeService) {}
}
