const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sit774'
});
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

app.use(morgan('common'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Tutorial' });
});

const sql = `INSERT INTO User (name, email, phone) VALUES (?, ?, ?)`;
app.post('/input', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    connection.query(sql, [name, email, phone]);
    res.render('thankyou', {
        title: 'Data Input Review',
        name: name,
        email: email,
        phone: phone
    });
});

app.use((error, request, response, next) => {
    let errorStatus = error.status || 500;
    response.status(errorStatus);
    response.send('ERROR(' + errorStatus + '): ' + error.toString());
});

app.use((req, res) => {
    res.status(404).send('404: File not found');
});

app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
})
