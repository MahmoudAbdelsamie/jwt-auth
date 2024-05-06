const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const { testDBConnection } = require('./utils/helper');


const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('<h1>Welcome To jwt-Auth!</h1>');
})

app.use('/api/v1', registerRoutes);
app.use('/api/v1', loginRoutes);


testDBConnection()
    .then(() => {
        console.log('Database Connected...');
        app.listen(PORT, () => {
            console.log(`Server Running On Port ${PORT}`);
        })
    })
    .catch(err => {
        console.log('Failed to Connect to Database...');
        throw new Error(err);
    }) 