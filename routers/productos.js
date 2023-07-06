import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
const storageProductos = Router();

dotenv.config();
let con = undefined;

storageProductos.use((req,res,next)=>{
    let my_config = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_config);
    next();
})

storageProductos.get("/",(req,res)=>{
    con.query(
        /*sql*/`SELECT p.nombre AS Nombre, SUM(i.cantidad) AS Total 
FROM productos AS p
JOIN inventarios AS i ON i.id_producto = p.id
GROUP BY p.nombre`, 
        (err, data, fil)=>{
            res.send(JSON.parse(JSON.stringify(data)));
        }
    )
})

export default storageProductos;