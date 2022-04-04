import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleSortBarService {
  public isBarVisible = false;

  toggleVisibility() {
    if (this.isBarVisible) this.isBarVisible = false;
    else this.isBarVisible = true;
  }
}
