
export class Medias {
  private title: string;
  private username: string;

  constructor(title: string, username: string) {
    this.title = title;
    this.username = username;
  }

  getTitle() {
    return this.title;
  }
  getUsername() {
    return this.username;
  }
}