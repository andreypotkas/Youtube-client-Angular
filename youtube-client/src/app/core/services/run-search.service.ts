import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RunSearchService {
  public isSearch = false;

  runSearch() {
    this.isSearch = true;
  }
}
