const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/slick', function (req, res) {
    res.render('slick', { title: 'Slick Carousel', message: 'Slick Carousel' })
})
app.get('*', function (req, res) {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

