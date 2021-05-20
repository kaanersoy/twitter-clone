import { nanoid } from "nanoid";

export default class {
  constructor(author, content){
    this.id = nanoid()
    this.author = author;
    this.content = content.text;
    this.createdAt = new Date().getTime();
    this.photos = content.photos
  }
}