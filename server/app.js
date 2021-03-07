const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./database/db');

// Connect with mongodb instance in atlas
connectDB();

const app = express();

// allow cros-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5500, () => {
  console.log('Listening on port 5500')
});