'use strict'

const { putProduct } = require('../controllers/product.controller');

const mongoose = require('../../common/services/mongoose.service').mongoose;
const productsSchema = new mongoose.Schema({

    name:{
        type:mongoose.Schema.Types.String
    },
    price:{
        type:mongoose.Schema.Types.Number
    },
    description:{
        type:mongoose.Schema.Types.String
    }

},{versionKey:false})

productsSchema.set('toJSON', {virtuals:false});
const products = mongoose.model('products', productsSchema, 'products');

exports.getProducts = () =>{

    return new Promise((resolve,reject)=>{

        products.find({}).exec((error,result)=>{

            if(error){
                reject(error.message);
            }
            
            if(result){
                resolve(result);
            }
        })

    }).catch(error=>{
        throw error.message;
    })

}

exports.addProduct = (info)=>{

    try{
        const product = new products(info);
        return product.save().catch(error=>error.message);
    
    }catch(error){
        throw error.message
    }

}

exports.deleteProduct = (id)=>{

    return new Promise((resolve,reject)=>{

        products.deleteOne({_id:id}).exec((error,result)=>{

            if(error){
                reject(error.message);
                throw error.message;
            }
            if(result.deletedCount){
                resolve(true);
            }else{
                resolve(false);
            }
        })

    }).catch(error=>{
        throw error.message;
    })
}

exports.editProduct = (data)=>{
    // a "data se le asigna lo que hay en "body" desde product.controller
    return new Promise((resolve,reject)=>{

        products.updateOne({_id:data._id},{$set:data}).exec((error,result)=>{
            //actualiza el objeto en la base de datos

            if(error){
                reject(error.message);
                throw error.message;
            }
            console.log('result back: ',result);

            if(result.modifiedCount){
                //"modifiedCount" no devuelve el número de documentos modificados, en este caso 0 (false) o 1 (true) pq sólo se edita 1 documento
                resolve(true);
            }else{
                resolve(false);
            }
        })

    }).catch(error=>{
        throw error.message;
    })
} 