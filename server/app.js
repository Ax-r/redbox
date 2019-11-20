const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const io = require('socket.io')();
const socketAuth = require('socketio-auth');
const adapter = require('socket.io-redis');

const product = require('./routes/product');
const user = require('./routes/user');
const app = express();

const redisAdapter = adapter({
    host: '118.89.159.49',
    db: 2
});

var http = require('http').Server(app);
io.attach(http);
io.adapter(redisAdapter);

let dev_db_url = 'mongodb+srv://.....';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});



app.use('/products', product);
app.use('/users', user);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
