import dotenv from "dotenv";
import mysql from 'mysql2';
import {Router} from "express";
const storageCampus = Router();

dotenv.config();
let con = undefined;

storageCampus.use((req,res,next)=>{
    let my_config = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_config);
    next();
})

storageCampus.get("/", (req,res)=>{
    con.query(
        /*sql*/`SELECT * FROM bodegas ORDER BY nombre ASC`,
        (err,data,fil)=>{
            res.send(JSON.parse(JSON.stringify(data)));
        }
    )
})

export default storageCampus;