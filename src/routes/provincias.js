const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/database');
router.get('/prov', (req, res) => {
    mysqlConnection.query('SELECT *FROM provincia', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/prov/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    mysqlConnection.query('SELECT *FROM provincia WHERE id=?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});
module.exports = router