const { Router } = require('express');
const fs = require('fs-extra'); // Soporta promesas a diferencia del fs normal
const path = require('path');

const router = Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    // req.body, se entiende mediante app.use(express.json());
    const { title, author, isbn } = req.body;
    const image_path = '/uploads/' + req.file.filename;
    const newBook = new Book({ title, author, isbn, image_path });
    await newBook.save();
    res.json({ message: 'Book Saved' });
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    fs.unlink(path.resolve('./backend/public' + book.image_path));
    res.json({ message: 'Book Deleted' });
});

module.exports = router;