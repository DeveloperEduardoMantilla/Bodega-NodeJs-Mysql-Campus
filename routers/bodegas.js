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

storageCampus.post("/", (req, res)=>{
    let {nombre, id_responsable, estado, created_by, created_at} = req.query;

    const sql =`INSERT INTO bodegas (nombre, id_responsable, estado, created_by) VALUES
    (?,?,?,?)`;
    con.query(sql, [nombre, id_responsable, estado, created_by, created_at], (err, result) => {
        if (err) {
          console.error("Error al agregar datos:", err);
          res.status(500).json({ error: "Error al agregar datos" });
        } else {
          console.log("Datos agregados correctamente");
          res.status(200).json({ message: "Datos agregados correctamente" });
        }
    });
    
})

export default storageCampus;