// Utilizar .env (dotenv)
// uso de cross-env (package.js)
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path'); // Work with paths
const cors = require('cors');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage: storage }).single('image')); // Work with images
// app.use(express.urlencoded({ extended: false })); // Understand forms
app.use(express.json()); // Understand json.
app.use(cors()); // Permitir peticiones de un servidor a otro.

// Routes
app.use('/api/books', require('./routes/books'));

// Static files
app.use(express.static(path.join(__dirname, 'public/')))

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});