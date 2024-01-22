const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success api',
        message: 'api ok',
        metadata: [
            {
                name: 'vemines',
                age: 25
            },
            {
                name: 'vemines 1999',
                age: 26
            }

        ]
    })
})

module.exports = router;