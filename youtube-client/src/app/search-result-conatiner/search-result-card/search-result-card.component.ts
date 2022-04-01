import { Component, Input, OnInit } from '@angular/core';
import response from '../response';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  @Input() index: number = 0;

  public title: string = '';

  public titleLength: number = 0;

  public srcImg: string = '';

  public age: number = 0;

  ngOnInit(): void {
    this.title = response.items[this.index].snippet.title;
    this.titleLength = this.title.length;
    this.srcImg = response.items[this.index].snippet.thumbnails.high.url;
    this.age = Date.now() - Date.parse(response.items[this.index].snippet.publishedAt);
  }
}
