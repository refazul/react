const express = require('express')
const app = express()
const port = 8080

var court_scan = require('./crawler').court_scan;

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/slick', function (req, res) {
    res.render('slick', { title: 'Slick Carousel', message: 'Slick Carousel' })
})
app.get('/law', function (req, res) {
    court_scan({ date: '03/03/2020' }).then((values) => {
        res.render('table', { title: 'Hey', values: values })
    })
})
app.get('*', function (req, res) {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

