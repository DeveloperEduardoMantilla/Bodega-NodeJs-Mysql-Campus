import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Bodega} from "../controller/bodega.js";

const proxyBodega = express();

proxyBodega.use((req,user,next)=>{
    try{
        let data = plainToClass(Bodega, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    }catch(err){
        res.status(err.status).send(err);
    }
})

export default proxyBodega; 
