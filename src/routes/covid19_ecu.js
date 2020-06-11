const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/database');
router.get('/ecu_covid', (req, res) => {
    mysqlConnection.query('SELECT *FROM info_covid19', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/ecu_covid/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    mysqlConnection.query('SELECT *FROM info_covid19 WHERE id=?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});
module.exports = router