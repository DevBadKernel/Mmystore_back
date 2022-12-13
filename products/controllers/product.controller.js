'use strict'

const productModel = require('../models/product.model');

exports.getALLProducts = (request,response)=>{
    console.log('received getALLProducts request');
    productModel.getALLProducts().then((products,error)=>{
        
        if(error){
            throw error.message;
        }

        if(products){
            return response.status(200).send(products);
        }else{
            return response.status(204);
        }

    }).catch(error=>{
        throw error.message;
    })
}

exports.addProduct = (request,response)=>{
    console.log('received addProduct request');
    productModel.addProduct(request.body.info).then((product,error)=>{

        if(error){
            throw error.message;
        }

        if(product){
            return response.status(200).send({info:true});
        }else{
            console.error('error adding product');
            return response.status(500);
        }

    }).catch(error=>{
        throw error.message;
    })
}