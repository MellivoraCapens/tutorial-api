const express = require("express");
const dotenv = require("dotenv");
const morgan =  require("morgan");
const errorHandler = require("./middleware/error")
const connectDB = require("./config/db");

const users = require("./routes/users.js");
const auth = require('./routes/auth');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandleRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});