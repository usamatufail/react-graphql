const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./database/db');

// Connect with mongodb instance in atlas
connectDB();

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5500, () => {
  console.log('Listening on port 5500')
});