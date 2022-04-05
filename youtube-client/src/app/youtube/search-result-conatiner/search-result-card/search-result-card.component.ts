import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenDetailedInfoService } from '../../services/open-detailed-info.service';
import response from '../response';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  constructor(public router: Router, public openDetailedInfo:OpenDetailedInfoService) {}

  @Input() index: number = 0;

  public title: string = '';

  public titleLength: number = 0;

  public srcImg: string = '';

  public age: number = 0;

  @Input() public id = '';

  ngOnInit(): void {
    this.title = response.items[this.index].snippet.title;
    this.titleLength = this.title.length;
    this.srcImg = response.items[this.index].snippet.thumbnails.high.url;
    this.age = Date.now() - Date.parse(response.items[this.index].snippet.publishedAt);
  }

  openDetailsPage(id:string) {
    this.router.navigate(['/video', id]);
    this.openDetailedInfo.current = this.openDetailedInfo.items[this.index];
    this.openDetailedInfo.id = this.index;
  }
}
