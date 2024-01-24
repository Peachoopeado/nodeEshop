const { escapeXML } = require('ejs')
const express = require('express')
const ESHOP = express()
ESHOP.set('view engine', 'ejs')
ESHOP.use(express.urlencoded({extended: false}))
ESHOP.use(express.static('public'))
ESHOP.get('/', (req, res) => {
    res.render('index')
})
ESHOP.get('/', (req, res) => {
    res.render('index')
})
ESHOP.get('/about', (req, res) => {
    res.render('about')
})
ESHOP.get('/partners', (req, res) => {
    res.render('partners')
})
ESHOP.get('/shop', (req, res) => {
    res.render('shop')
})
ESHOP.get('/contacts', (req, res) => {
    res.render('contacts')
})
ESHOP.get('/catalogue', (req, res) => {
    res.render('catalogue')
})
ESHOP.get('/cart', (req, res) => {
    res.render('cart')
})
ESHOP.get('/description', (req, res) => {
    res.render('description')
})
ESHOP.get('/order', (req, res) => {
    res.render('order')
})
ESHOP.get('/sign-in', (req, res) => {
    res.render('sign-in')
})
ESHOP.get('/sign-up', (req, res) => {
    res.render('sign-up')
})
ESHOP.get('/user-page', (req, res) => {
    res.render('user-page')
})
ESHOP.get('/news', (req, res) => {
    res.render('news')
})
ESHOP.get('/new', (req, res) => {
    res.render('new')
})




ESHOP.listen(3000, ()=> {
    console.log('Завёлся: http://localhost:3000')
})
