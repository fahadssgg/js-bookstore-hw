let books = [
  {
    title: "games",
    author: "fahad",
    pages: 100,
    available: true,
  },
  {
    title: "javascript",
    author: "mohammad",
    pages: 276,
    available: false,
    borrower: "mshare",
  },
  {
    title: "dom for me",
    author: "khaled",
    pages: 398,
    available: true,
  },
  {
    title: "movie and tv",
    author: "noland",
    pages: 635,
    available: true,
  },
  {
    title: "fun for life",
    author: "jorsh",
    pages: 78,
    available: true,
  },
];
console.log("=-=-=-=--=title-=-=-author=--=page-=-=-=-=-=-=-=-=-=-=");
books.forEach((book) => {
  console.log("title:" + book.title);
  console.log("author:" + book.author);
  console.log("pages:" + book.pages);
  console.log("---------------------");
});
console.log("=-=-=-=--=-=-=-=--=borrowBook-=-=-=-=-=-=-=-=-=-=");

function borrowBook(book_name, borrower_name) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title == book_name) {
      if (books[i].available == true) {
        books[i].available = false;
        books[i].borrower = borrower_name;
        console.log(books[i]);
      } else {
        console.log("book is not available");
      }
      return;
    }
  }
  console.log(`Book is not in the library.`);
}
borrowBook("games", "sarah");
console.log("---------------");
borrowBook("asss", "mahammad");
console.log("---------------");
borrowBook("movie and tv", "maha");
console.log("---------------");
borrowBook("javascript", "khaled");
console.log("---------------");
// borrowBook("fun for life", "habebe");

console.log("=-=-=-=--=-=-=-=-returnBook-=-=-=-=-=-=-=-=-=-=-=");
function returnBook(book_name) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title == book_name) {
      if (books[i].borrower) {
        books[i].available = true;
        delete books[i].borrower;
        console.log("book is returned:");
        console.log(books[i]);
      } else {
        console.log("was nener selld");
      }
      return;
    }
  }
  console.log(`Book is not in the library.`);
}

returnBook("games");
console.log("---------------");
returnBook("fun for life");
console.log("---------------");
returnBook("asss");
console.log("---------------");
returnBook("javascript");
console.log("---------------");

console.log("=-=-=-=--=-=-loop through books==-=-=-=-=-=-=-=-=-=-=-=-=");
for (let i = 0; i < books.length; i++) {
  const book = books[i];

  console.log(book);
}

console.log("=-=-=-=--=-=-addBook==-=-=-=-=-=-=-=-=-=-=-=-=");
function addBook(newBook) {
  books.push(newBook);
}

let newBook = {
  title: "break in class",
  author: "saad",
  Pages: 558,
  available: true,
};
addBook(newBook);
console.log(books);

console.log("=-=-=-=--=-=-searchBook==-=-=-=-=-=-=-=-=-=-=-=-=");
function searchBook(searchTerm) {
  let searchResults = [];

  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    if (
      book.title.includes(searchTerm) ||
      book.author.includes(searchTerm) ||
      (book.borrower && book.borrower.includes(searchTerm))
    ) {
      searchResults.push(book);
    }
  }

  return searchResults;
}

console.log(searchBook("maha"));
console.log("---------------------");
console.log(searchBook("dom for me"));
console.log("---------------------");
console.log(searchBook("jorsh"));
