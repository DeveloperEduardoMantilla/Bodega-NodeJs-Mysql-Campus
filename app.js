import dotenv from 'dotenv';
import express from 'express';
import storageBodegas from "./routers/bodegas.js";
import storageProductos from "./routers/productos.js";

dotenv.config();
const appExpress = express();

const config = JSON.parse(process.env.MY_CONFIG);

appExpress.use(express.json());
appExpress.use("/bodegas", storageBodegas);
appExpress.use("/productos", storageProductos);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));