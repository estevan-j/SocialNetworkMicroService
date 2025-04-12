const express = require('express');
const response = require('../../../network/response')
const controller = require('./index')
const router = express.Router();

router.get('/', (req, res) => {
    controller.list().then((list) => {
        response.success(req, res, list, 200)
    })
    .catch((err) => {
        response.error(req, res, 'Internal error', 500)
    });
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    controller.get(id).then((user) => {
        response.success(req, res, user, 200)
    })
    .catch((err) => {
        response.error(req, res, 'Internal error', 500)
    });
})

router.post('/', (req, res) => {
    const user = req.body;
    if (!user.name || !user.lastname) {
        response.error(req, res, 'Invalid data', 400)
        return;
    }
    const newUser = controller.upsert(user);
    response.success(req, res, newUser, 201)
})


module.exports = router;