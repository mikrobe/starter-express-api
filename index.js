require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
const mainRouter = require('./mainRouter');

//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth = basicAuth({
    users: { [process.env.APP_USER]: process.env.APP_PASSWORD },
    challenge: true,
    realm: 'App Authentication'
});


app.use('/', auth, mainRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});