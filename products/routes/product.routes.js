'use strict'

const ProductController = require('../controllers/product.controller');

exports.ProductRoutes = function(app){

    app.get('/api/get_products', ProductController.getALLProducts);

    app.post('/api/add_product', ProductController.addProduct);

    app.delete('/api/delete_product/:id', ProductController.deleteProduct);

    app.put('/api/update_product/', ProductController.editProduct);

    //importante que las urls coincidan en front y en back
    
}