const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());


mongoose.connect('mongodb://seba:bem4dmuch@ds247121.mlab.com:47121/seba_jsa', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('Mit Datenbank verbunden');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Warte auf Requests an Port 4000');
});
