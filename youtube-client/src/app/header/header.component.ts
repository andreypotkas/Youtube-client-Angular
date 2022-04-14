import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  visibilitySortBar: boolean = false;

  searchValue:string = '';

  @Output()searchStart = new EventEmitter();

  onChanged() {
    this.searchStart.emit();
  }

  toggleVisibilitySortBar() {
    if (this.visibilitySortBar) {
      this.visibilitySortBar = false;
    } else {
      this.visibilitySortBar = true;
    }
  }
}
