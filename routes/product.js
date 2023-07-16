module.exports = (model) => {
    const router = require('express').Router()
    const controller = require('../controllers/product')(model)

    router.get('/', controller.getAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);

    return router;
}