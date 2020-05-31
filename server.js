const express = require('express');

const app = express();

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to ContactKeeper v2 API' })
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


app.listen(port, () => console.log(`<(*'-'*)> Solar Server started on port ${port} <(*'-'*)>`));
















// mongodb+srv://solarity:solarity1234@cluster0-7kads.mongodb.net/test?retryWrites=true&w=majority