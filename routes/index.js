module.exports = (app) =>{
    const db = require('../models/index');
    
    app.set('base', '/api/v1');
    app.get('/', (req, res) => {
        res.send({message: 'Welcome to this CRUD API ☻'});
    });

    const productRouter = require('./product')(db.product);
    app.use('/product', productRouter);
}