const { escapeXML } = require('ejs')
const express = require('express')
const ESHOP = express()
ESHOP.set('view engine', 'ejs')
ESHOP.use(express.urlencoded({extended: false}))
ESHOP.use(express.static('public'))
ESHOP.get('/', (req, res) => {
    res.render('index')
})

ESHOP.listen(3000, ()=> {
    console.log('Завёлся: http://localhost:3000')
})
