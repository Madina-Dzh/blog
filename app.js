// Тут пока пусто :р
// Прописать подключение к БД
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors()) // для отсутствия ошибок при ajax-запросах
app.use(bodyParser.json()) // сказали приложению использовать bodyParser

//Подключение к БД
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
})

// Запуск сервера
app.listen(8000, () => {
    console.log('App started on port 8000')
})

// Эддпоинт для получения данных из БД
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results)
    })
})