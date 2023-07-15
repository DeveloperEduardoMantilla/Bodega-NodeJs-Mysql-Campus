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

storageProductos.get("/total", (req,res)=>{
    con.query(
        /*sql*/`SELECT id , nombre, descripcion, estado, created_by,
            (SELECT CAST(IFNULL(SUM(cantidad),0) AS DOUBLE) FROM inventarios WHERE id_producto = productos.id ) as Total
            FROM productos
            ORDER BY Total DESC`,
        (err,data,fil)=>{
            res.send(JSON.parse(JSON.stringify(data)));
        }
    )
})

storageProductos.get("/",(req,res)=>{
    con.query(
        /*sql*/`SELECT p.nombre AS Nombre, SUM(i.cantidad) AS Total 
FROM productos AS p
JOIN inventarios AS i ON i.id_producto = p.id
GROUP BY p.nombre ORDER BY Total DESC`, 
        (err, data, fil)=>{
            res.send(JSON.parse(JSON.stringify(data)));
        }
    )
})

storageProductos.post("/",(req,res)=>{
    let {nombre, descripcion, estado, created_by, created_at, cantidad} = req.body;
    const sql = `INSERT INTO productos(nombre, descripcion, estado, created_by, created_at) VALUES (?,?,?,?,?)`;
    const data = [nombre, descripcion, estado, created_by, created_at];
    con.query(sql,data, (err, result)=>{
        if (err) {
            console.error("Error al agregar datos:", err);
            res.status(500).json({ error: "Error al agregar datos" });
          } else {
            let id_producto=result.insertId;
            const sql2 = `INSERT INTO inventarios(id_producto, cantidad) VALUES (?,?)`;
            const data2 = [id_producto, cantidad];
            con.query(sql2,data2, (err, result)=>{
                if (err) {
                    console.error("Error al agregar a la tabla inventarios:", err);
                    res.status(500).json({ error: "Error al agregar datos a inventario" });
                } else {
                    console.log("Datos agregados correctamente");
                    res.status(200).json({ message: "Datos agregados correctamente" });
                }
            })
        }
    })
})

export default storageProductos;