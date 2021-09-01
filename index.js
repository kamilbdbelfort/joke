// index.js

// import express
const express = require('express')

const app = express()

// html document
const page = 
` <html>
    <head>
        <title>George Carlin Quote</title>
    </head>

    <body>
        <h1>I have as much authority as the Pope!</h1>

        <p>I just don't have as many people who believe it.</p>
    </body>
</html> `

// get function
app.get(
    '/',
    (request, response) => {

        response.send(page)

    }
)

// port const
const port = process.env.PORT || 3000

// listen function
app.listen(
    port, 
    () => console.log(`Listening to port: ${port}`))