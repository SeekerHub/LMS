const express = require('express');
const bodyParser = require('body-parser');
const leadRoutes = require('./routes/leadRoute');
const { sequelize } = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/leads', leadRoutes);

// Test DB connection
sequelize.authenticate()
  .then(() => console.log("Lead service: Database connected"))
  .catch(err => console.error("Lead service: Unable to connect to the database:", err));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Lead service is running on port ${PORT}`);
});
