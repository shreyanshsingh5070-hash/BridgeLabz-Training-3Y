class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }
        this.isIssued = true;
        return `${this.title} has been issued successfully.`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} is already available.`;
        }
        this.isIssued = false;
        return `${this.title} has been returned successfully.`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "9788173711466"),
    new Book("Atomic Habits", "James Clear", "9780735211292", true),
    new Book("Ikigai", "Hector Garcia", "9780143130727")
];

const availableBooks = books.filter(book => !book.isIssued);
console.log("Available Books:");
console.table(availableBooks.map(({ title, author, isbn }) => ({ title, author, isbn })));

const searchISBN = "9780061122415";
const selectedBook = books.find(book => book.isbn === searchISBN);

if (selectedBook) {
    console.log(selectedBook.issueBook());
} else {
    console.log("Book not found.");
}

console.log("Updated Book List:");
console.table(books);
