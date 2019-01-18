export class Post {
  public title: String;
  public content: String;
  public loveIts: Number;
  public date: Date;

    constructor(Title: String, Content: String) {
        this.title   = Title;
        this.content = Content;
        this.loveIts = 0;
        this.date    = new Date();
     }
}
