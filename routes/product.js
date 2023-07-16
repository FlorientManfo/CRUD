module.exp = (model) => {
    const router = require('express').Router()
    const controller = require('../controllers/product')(model)

    router.get('/', controller.getAll);
    router.get('/:name', controller.findByName);
    router.put('/', controller.create);
    router.patch('/:id', controller.update);
    router.delete('/:id', controller.delete);

    return router;
}