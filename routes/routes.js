var app = require('express').Router();
const conn = require('../config/config.js')

app.post('/insertData', async (req, res) => {
    const nama = req.body.nama
    const jenis_vaksin = req.body.jenis_vaksin

    if(nama && jenis_vaksin){
        conn.query('INSERT INTO data_vaksin(nama, jenis_vaksin) VALUES(?,?)',[nama, jenis_vaksin], function (error, results) {
            res.status(200).send({ message: 'Insert successfully' })
        });
    }else{
        res.status(400).send({message: "Something was missing!"});
    }
});

app.post('/selectData', async (req, res) => {
    const id = req.body.id

    if(id){
        conn.query('SELECT * FROM data_vaksin WHERE id = ?',
        [id], function (error, results) {
            res.status(200).send({ data: results })
        });
    }else{
        res.status(400).send({message: "Something was missing!"});
    }
});

app.post('/calc', async (req, res) => {
    const numbers = req.body.numbers

    if(numbers){
        const num = eval(numbers)
        res.status(200).send({ data: num })
    }else{
        res.status(400).send({message: "Something was missing!"});
    }
});
module.exports = app
