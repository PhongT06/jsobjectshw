// 1. Exploring JavaScript Objects

// Task 1.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
console.log(Book)

// Task 2.

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

let myBook = new Book('The Eye of the World', 'Robert Jordan', '832');
myBook.displayInfo(); 

// // Task 3.

let library = [];

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchBookByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

addBook('The Eye of the World', 'Robert Jordan', '832');
addBook('Chess Story', 'Stefan Zweig', '97');
console.log(library)

let booksByRobertJordan = searchBookByAuthor('Robert Jordan');
console.log(booksByRobertJordan);

// // Task 4.

function filterBooksByPages() {
    return library.filter(book => book.pages <= 100);
}

function formatBookInfo() {
    return library.map(book => ({
        Title: book.title,
        Author: book.author,
        Pages: book.pages
    }));
}

let booksLessThan100Pages = filterBooksByPages();
console.log("Books with 100 pages or less:", booksLessThan100Pages);

let formattedBooks = formatBookInfo();
console.log("Formatted book titles and authors:", formattedBooks);










