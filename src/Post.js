export default class Post {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
    console.log('constructor:', this)
  }
  toString() {
    console.log('toString')
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      img: this.img
    }, null, 2)
  }
}