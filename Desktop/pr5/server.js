const express = require('express')
const bodyParser = require('body-parser')

// Создаем экземпляр Express
const app = express()

// Подключаем парсер JSON
app.use(bodyParser.json())

// Простой маршрут для проверки
app.get('/api/contacts', (req, res) => {
	res.send('Контакты успешно получены')
})

// Запуск сервера
const port = 8080
app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})
