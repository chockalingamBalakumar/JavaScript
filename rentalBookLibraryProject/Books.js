class Book {
  constructor(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this._out = false;
    this.dueDate = null;
    this.patron = null;
  }

  set out(out) {
      this._out = out;
      if(out) {
        // const newDueDate = new Date();
        // newDueDate.setDate(newDueDate.getDate() + 14);
        // this.dueDate = newDueDate;
        this.dueDate = new Date(new Date().getTime()+(14*24*60*60*1000));
      } else {
        this.dueDate = null;
      }
  }
  get out() {
      return this._out;
  }
}  