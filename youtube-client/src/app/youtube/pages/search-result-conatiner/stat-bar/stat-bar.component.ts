import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { IItem, IStatistics } from '../../../../core/models/models';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatBarComponent implements OnInit {
    @Input() stat!: IStatistics;
    public views!: string;
    public comments!: string;
    public likes!: string;
    constructor(public youtubeService: YoutubeService) {
    }

    ngOnInit(): void {
      if (this.stat) {
        this.views = this.stat.viewCount;
        this.likes = this.stat.likeCount;
        this.comments = this.stat.commentCount;
      }
    }
}
