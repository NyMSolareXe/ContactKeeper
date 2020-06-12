const express = require('express');
const connectDB = require('./config/db')
const path = require('path')


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

const port = process.env.PORT || 5002


// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


// Serve static assets in produciton
// if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static('client/build'))

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
// }




app.listen(port, () => console.log(`<(*'-'*)> Solar Server started on port ${port} <(*'-'*)>`));
















// mongodb+srv://solarity:solarity1234@cluster0-7kads.mongodb.net/test?retryWrites=true&w=majority