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


ESHOP.listen(3000, ()=> {
    console.log('Завёлся: http://localhost:3000')
})
