'use strict'

const productModel = require('../models/product.model');
//importación del productModel

exports.getALLProducts = (request,response)=>{
    console.log('received getALLProducts request');
    
    productModel.getProducts().then((products,error)=>{
        
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
        //"body" contiene todos los objetos

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

exports.deleteProduct = (request,response)=>{
    //función síncrona
    console.log('receive deleteProduct request');

    productModel.deleteProduct(request.params.id).then((product,error)=>{

        if(error){
            throw error.message;
        }

        if(product){
            return response.status(200).send({info:true});
        }else{
            console.error('error on deleteProduct');
            return response.status(500);
        }

    }).catch(error=>{
        throw error.message;
    })
}

exports.editProduct = (request,response)=>{
    //función síncrona
    console.log('receive editProduct request');
    console.log('receive body',request.body);

    productModel.editProduct(request.body).then((product,error)=>{

        if(error){
            throw error.message;
        }

        if(product){
            return response.status(200).send({info:true});
        }else{
            console.error('error edit Product');
            return response.status(500);
        }
        
    }).catch(error=>{
        throw error.message;
    })
}