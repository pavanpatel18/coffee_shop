const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Views directory

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for Home
app.get('/', (req, res) => {
    res.render('index'); // 'index.ejs' is now directly in 'views'
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
