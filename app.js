const express = require('express');

// express app
const app = express();


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews')

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', { root: __dirname});
    const blogs = [
        {title: 'PANHAPOUN Find Bowser', snippet: 'PANHAPOUN Find Stars'},
        {title: 'PANHAPOUN Find Bowser1', snippet: 'PANHAPOUN Find Stars'},
        {title: 'PANHAPOUN Find Bowser2', snippet: 'PANHAPOUN Find Stars'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    res.render('about', { title: 'About' });
});

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blogs' });
})

// 404 page
app.use((req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', { title: '404' });
})