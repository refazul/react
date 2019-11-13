const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function (req, res) {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
})
app.get('/about', function (req, res) {
    res.render('simple', { title: 'About Us', message: 'About' })
})
app.get('/contact', function (req, res) {
    res.render('simple', { title: 'Contact Us', message: 'Contact' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

