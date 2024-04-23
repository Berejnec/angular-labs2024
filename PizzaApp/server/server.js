// Import the express library
const express = require('express');
const cors = require('cors');

const pasta = require('./pasta');
const dessert = require('./dessert');
// Create an instance of express to serve our end points
const app = express();

// Define the port we want to listen to
const PORT = 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Define the end point
app.get('/pasta', (req, res) => {
  res.json(pasta);
});

app.get('/dessert', (req, res) => {
  res.json(dessert);
});

app.post('/log', (req, res) => {
  console.log(req.body);
  res.send({message: 'Logged'});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
