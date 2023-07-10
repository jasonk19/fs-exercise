const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('This is the homepage')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.use((req, res) => {
  res.status(404).send('Page not found')
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})