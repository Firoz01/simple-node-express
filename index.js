const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



const port = 5000;

const users = [
    {id: 0, name:'Shabana', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 1, name:'Shabnoor', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 2, name:'Shrabonti', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 3, name:'Shuchorita', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 4, name:'Soniya', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 5, name:'Surjomukhi', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 6, name:'Popy', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 7, name:'Porimoni', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 8, name:'Purnima', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 9, name:'Diti', email: 'shabana@gmail.com', phone:'01925741193'},
    {id: 10, name:'Yesmin', email: 'shabana@gmail.com', phone:'01925741193'}
]

app.get('/', (req, res) => {
    res.send('Hello World! im exciting learning');
});

app.get('/users', (req, res) => {
    //user query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

//dynamic API

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})