import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(
    cors({
      origin: process.env.BASE_URL,
      credentials: true,
      methods: ["GET", "POST", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  

const PORT = process.env.PORT || 3000

const jokes = [{
    "text": "q. How do you comfort a JavaScript bug? a. You console it.",
    "question": "How do you comfort a JavaScript bug?",
    "answer": "You console it.",
    "author": "elijahmanor",
    "created": "09/06/2013",
    "tags": ["javascript"],
    "rating": 1
  },
  {
    "text": "q. Why did the child component have such great self-esteem? a. Because its parent kept giving it `props`!",
    "question": "Why did the child component have such great self-esteem?",
    "answer": "Because its parent kept giving it `props`!",
    "author": "elijahmanor",
    "created": "05/22/2017",
    "tags": ["javascript", "react"],
    "rating": 1
  },
  {
    "text": "q. Why do C# and Java developers keep breaking their keyboards? a. Because they use a strongly typed language!",
    "question": "Why do C# and Java developers keep breaking their keyboards",
    "answer": "Because they use a strongly typed language",
    "author": "elijahmanor",
    "created": "09/23/2013",
    "tags": ["javascript", "java", "c#"],
    "rating": 1
  },
  {
    "text": "q. Why did the functional component feel lost? a. Because it didn't know what `state` it was in!",
    "question": "Why did the functional component feel lost?",
    "answer": "Because it didn't know what `state` it was in!",
    "author": "elijahmanor",
    "created": "05/22/2017",
    "tags": ["javascript", "react"],
    "rating": 1
  },
  {
    "text": "q. Why was the JavaScript developer sad? a. Because he didn't Node how to Express himself!",
    "question": "Why was the JavaScript developer sad?",
    "answer": "Because he didn't Node how to Express himself!",
    "author": "elijahmanor",
    "created": "09/10/2013",
    "tags": ["javascript", "node"],
    "rating": 1
  }]
app.get('/api/v1/jokes', (req, res) => {
    res.send(jokes)
})
app.get('/', (req, res) => {
    res.send('Main route hit');
})
app.listen(PORT, () => {
    console.log("Server started succesffully and listening on port ", PORT);
})