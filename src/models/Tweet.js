export default class {
  constructor(author, content){
    this.author = author;
    this.content = content;
    this.createdAt = new Date().getTime();
  }
}