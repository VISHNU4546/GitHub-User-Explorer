const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const Port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Use urlencoded to parse form data
app.use(express.urlencoded({ extended: true }));

// Home route for the form
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/profile', async (req, res) => {
    console.log("hello1");
    const username = req.body.username;
    const apiUrl = `https://api.github.com/users/${username}`;
    console.log(username);

    try {
        const response = await axios.get(apiUrl);
        const userData = response.data;
        console.log(userData);
        res.render('profile', { user: userData });
    } catch (error) {
        console.error(`Error: ${error.response.status} ${error.response.statusText}`);
        res.render('profile', { user: null });
    }
});

app.listen(Port, () => {
    console.log(`Server running on http://localhost:${Port}`);
});
