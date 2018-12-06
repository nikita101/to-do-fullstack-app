const express = require('express')
const bodyParser = require('body-parser')
const knexFile = require('./knexfile')
const knex = require('knex')(knexFile);
const bookshelf = require('bookshelf')(knex);
const app = express()

app.use(bodyParser())

app.listen(8080, () => {
    console.log('Listening on port 8080')
})

// must bring in enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// using bookshelf
const Todo = bookshelf.Model.extend({
    tableName: 'todo2', // todo is the name of the table 
})

// setting up an end point to get all the todo's from the DB
app.get('/todo2', (req, res) => {
    // calling each Todo as a call back
    Todo
        // .save() <- this is another method, like fetchAll
        // fetching all the data
        .fetchAll()
        // using a promise to then send back the todo items
        .then(todo2 => {
            res.send(todo2.models.map(todo => todo.attributes))
        })
})

// setting up endpoint to post new todos in the DB
app.post('/todo2', (req, res) => {
    const { status, title } = req.body || {};
    // defining the new todo
    const newTodo = new Todo({
        title: title,
        status: status,
    });
    // saving the new todo task to the db
    newTodo.save()
        // printing all of the to do items
        .then(todo => {
            Todo
                .fetchAll()
                .then(todo2 => {
                    res.send(todo2.models.map(todo => todo.attributes))
                })
        })
})

app.delete('/todo2', (req, res) => {
    const { id } = req.body || {};
    new Todo({
        id: id
    })
        .destroy()
        .then(todo => {
            Todo
                .fetchAll()
                .then(todo2 => {
                    // using a promise to then send back the todo items
                    // res.send is sending the results to the page
                    // todos.models.map is mapping the attributes 
                    // attributes are the objects with the data from the table
                    res.send(todo2.models.map(todo => todo.attributes))
                })
        })
})

// updating the to do item via .put request
app.put('/todo2', (req, res) => {
    const { id, status } = req.body || {};
    new Todo({
        id: id
    })
        .save({ status: !status }, { patch: true })
        .then(todo => {
            Todo
                .fetchAll()
                .then(todo2 => {
                    // using a promise to then send back the todo items
                    // res.send is sending the results to the page
                    // todos.models.map is mapping the attributes 
                    // attributes are the objects with the data from the table
                    res.send(todo2.models.map(todo => todo.attributes))
                })
        })
})