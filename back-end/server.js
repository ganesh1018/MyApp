require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/jokes", (req, res) => {
    const JokesData = [
        { id: 1, title: "Programmer Joke", content: "Why do programmers prefer dark mode? Because light attracts bugs." },
        { id: 2, title: "Math Joke", content: "Why was the math book sad? It had too many problems." },
        { id: 3, title: "Coffee Joke", content: "How does a Java developer take their coffee? Just Java." },
        { id: 4, title: "Dad Joke", content: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { id: 5, title: "Internet Joke", content: "Why did the computer go to the doctor? Because it caught a virus." }
    ];

    res.send(JokesData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
