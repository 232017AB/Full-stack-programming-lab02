const express = require('express');
const app = express();

// Student data (array)
const students = ["Ali", "Ahmed", "Sara", "Ayesha"];

// ✅ Updated "/" Route → Full HTML Page
app.get('/', (req, res) => {

    const htmlPage = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My First HTML Page</title>
    </head>
    <body>

        <h1>Welcome to My Website</h1>

        <p>This is a simple HTML page served using Express.</p>

        <h2>Student List</h2>
        <ul>
            ${students.map(s => `<li>${s}</li>`).join('')}
        </ul>

    </body>
    </html>
    `;

    res.send(htmlPage);
});

// Home Route
app.get('/home', (req, res) => {
    res.send("<h1>Welcome Home</h1>");
});

// About Route
app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>");
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send("<h1>Contact Us</h1>");
});

// Dynamic User Route
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`<h1>Hello ${userName}</h1>`);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});