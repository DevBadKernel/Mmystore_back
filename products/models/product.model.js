'use strict'

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

exports.getProducts = ()=>{

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