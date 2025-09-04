// Тут пока пусто :р
// Прописать подключение к БД
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors()) // для отсутствия ошибок при ajax-запросах
app.use(bodyParser.json()) // сказали приложению использовать bodyParser

app.listen(8000, ()=> {console.log("app started")})

app.get('/', (req, res) => {
    res.send('Server working')
})

//Подключение к БД
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
})
/*
// Эддпоинт для получения данных из БД
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM posts';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results)
    })
})

// Эдпоинт для получения названия поста
app.get('/head-post/:id', (req, res) => {
    const postId = req.params.id; // получить ID из URL параметра

    const sql = 'SELECT heading FROM posts WHERE id = ?'; // запрос с условием по ID
    db.query(sql, [postId], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Пост не найден' });
        }
        res.json({ heading: results[0].heading }); // вернуть название одного поста
    });
});

// Эдпоинт для получкния текста поста
app.get('/content-post', (req, res) => {
    const sql = 'SELECT сontent FROM posts';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results)
    })
})
    */