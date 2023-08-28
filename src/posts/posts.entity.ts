
export class Posts {
  private title: string;
  private text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }

  getPostTitle() {
    return this.title;
  }
  getText() {
    return this.text;
  }
}