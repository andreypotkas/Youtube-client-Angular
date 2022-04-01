export class StatBar {
  public views:number;

  public likes: number;

  public dislikes: number;

  public comments: number;

  constructor(views:number, likes: number, dislikes: number, comments: number) {
    this.views = views;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
  }
}
