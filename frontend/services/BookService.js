class BookService {

    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = response.json();
        return books;
    }

    async postBook(book) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await response.json();
        return data;
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        });
        const data = response.json();
        return data;
    }
}

// module.exports = BookService;
export default BookService;