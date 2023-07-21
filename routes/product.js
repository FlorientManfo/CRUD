module.exports = (model) => {
    const router = require('express').Router()
    const controller = require('../controllers/product')(model)

    router.get('/get', controller.getAll);
    router.post('/create', controller.create);
    router.put('/update/:id', controller.update);
    router.delete('/delete/:id', controller.delete);

    return router;
}