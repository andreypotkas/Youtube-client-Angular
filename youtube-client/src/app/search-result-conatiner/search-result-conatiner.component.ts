import { Component } from '@angular/core';
import response from 'src/response';
import { IItem } from '../models/models';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})
export class SearchResultConatinerComponent {
  public items: IItem[] = response.items;
}
