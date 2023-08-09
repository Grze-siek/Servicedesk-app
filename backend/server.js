const express = require('express');
const path = require('path');
const colors = require('colors');
const { connectDb } = require('./config/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Support Desk API' });
  });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
