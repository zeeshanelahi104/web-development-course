require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(cors()); // allow the separate frontend to call this API
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (request, response) => {
  return response.send('Hello World!');
});

// User CRUD routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
