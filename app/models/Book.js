const bookss = [];

class Book {
  static records = bookss;

  constructor(params) {
    this.id = this.#generateId();
    this.title = params.title;
  }

  #generateId = () => {
    const lastRecordId =
      this.constructor.records[this.constructor.records.length - 1]?.id || 0;

    return lastRecordId + 1;
  };

  static create = (params) => {
    const book = new this(params);

    this.records.push(book);
    return book;
  };

  static find(id) {
    const book = this.records.find((item) => item.id === Number(id));

    if (!book) return null;
    return book;
  }

  static list = () => {
    return this.records;
  };
}

Book.create({ title: "Hehe" });
Book.create({ title: "Aslinya" });
Book.create({ title: "Hahihu" });
console.log(Book.list());
