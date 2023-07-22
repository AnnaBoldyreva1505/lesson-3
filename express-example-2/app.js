const express = require("express");

const books = require("./books");

const app = express();

app.set("json spaces", 8)

app.get("/books", (req, res)=> {
    const databaseResponse = null;
    res.json(databaseResponse) //лучше использовать этот вариант, чтоб не возникла вопросов у фронта есть данные или нет
    
    // res.send(databaseResponse)
    // res.json(books)
    res.send(books)
});

app.listen(3005);