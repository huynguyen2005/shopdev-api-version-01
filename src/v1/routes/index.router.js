const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
});

router.get('/user', (req, res, next) => {
    res.status(200).json({
        status: "success",
        metadata: [
            {
                name: 'Huy',
                age: 21
            },
            {
                name: 'Thinh',
                age: 20
            },
            {
                name: 'Dong',
                age: 21
            }
        ]
    });
});

module.exports = router;