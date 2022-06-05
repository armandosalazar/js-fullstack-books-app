// CSS
require('./styles/index.css'); // Node
// JS
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    new UI().renderBooks();
});

document.getElementById('book-form').addEventListener('submit', function (evt) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);
    formData.append('image', image[0]);

    new UI().addANewBook(formData);
    new UI().renderMessage('New Book Added', 'success', 2000);
    evt.preventDefault();
});

document.getElementById('books-cards').addEventListener('click', function (evt) {
    if (evt.target.classList.contains('delete')) {
        new UI().deleteBook(evt.target.getAttribute('_id'));
        new UI().renderMessage('Book Removed', 'danger', 2000);
    }
    evt.preventDefault();
});