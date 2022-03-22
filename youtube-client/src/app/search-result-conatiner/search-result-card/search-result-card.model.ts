import { StatBar } from '../stat-bar/stat-bar.model';

export class SearchCard {
  public imgPath: string;
  public name: string;
  public stat: StatBar;
  constructor(imgPath: string, name: string, stat: StatBar) {
    this.imgPath = imgPath;
    this.name = name;
    this.stat = stat;
  }
}
