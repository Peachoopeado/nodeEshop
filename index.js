const { escapeXML } = require('ejs')
const express = require('express')
const ESHOP = express()
ESHOP.set('view engine', 'ejs')
ESHOP.use(express.urlencoded({extended: false}))
ESHOP.use(express.static('public'))
ESHOP.get('/', (req, res) => {
    res.render('index')
})
// Главная страница
ESHOP.get('/', (req, res) => {
    res.render('index')
})

// Страница "О нас"
ESHOP.get('/about', (req, res) => {
    res.render('about')
})

// Страница "Партнёры"
ESHOP.get('/partners', (req, res) => {
    res.render('partners')
})

// Страница "Выбор категории"
ESHOP.get('/shop', (req, res) => {
    res.render('shop')
})

// Страница "Контакты"
ESHOP.get('/contacts', (req, res) => {
    res.render('contacts')
})

// Страница "Каталог"
ESHOP.get('/catalogue', (req, res) => {
    res.render('catalogue')
})

// Страница "Корзина"
ESHOP.get('/cart', (req, res) => {
    res.render('cart')
})

// Страница "Описание товара"
ESHOP.get('/description', (req, res) => {
    res.render('description')
})

// Страница "Заказ"
ESHOP.get('/order', (req, res) => {
    res.render('order')
})

// Страница "Вход в личный кабинет"
ESHOP.get('/sign-in', (req, res) => {
    res.render('sign-in')
})

// Страница "Регистрация"
ESHOP.get('/sign-up', (req, res) => {
    res.render('sign-up')
})

// Страница "Личный кабинет"
ESHOP.get('/user-page', (req, res) => {
    res.render('user-page')
})

// Страница "Новости"
ESHOP.get('/news', (req, res) => {
    res.render('news')
})

// Страница "Пост"
ESHOP.get('/new', (req, res) => {
    res.render('new')
})



// Запуск сервера
ESHOP.listen(3000, ()=> {
    console.log('Завёлся: http://localhost:3000')
})
