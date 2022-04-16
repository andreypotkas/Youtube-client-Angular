import { Component, Input, OnInit } from '@angular/core';
import response from '../response';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss'],
})
export class StatBarComponent implements OnInit {
    @Input() index: number = 0;

    public views: string = '';

    public likes: string = '';

    public disLikes: string = '';

    public comments: string = '';

    ngOnInit(): void {
      this.views = response.items[this.index].statistics.viewCount;

      this.likes = response.items[this.index].statistics.likeCount;

      this.disLikes = response.items[this.index].statistics.dislikeCount;

      this.comments = response.items[this.index].statistics.commentCount;
    }
}
