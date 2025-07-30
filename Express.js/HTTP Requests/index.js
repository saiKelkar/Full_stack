import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Sai</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +91 99203 76825</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});