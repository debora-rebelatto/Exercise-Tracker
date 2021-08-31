const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // It parses incoming requests with JSON payloads

mongoose.connect('Here goes the MongoDB URI', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => { 
	console.log('Successfull connection');
});

require('./routes/exercises')(app);
require('./routes/users')(app);

app.listen(port, () =>{
	console.log(`Server running on ${port}`);
})