import dotenv from 'dotenv';
import express from 'express';
import storageCampus from "./routers/bodegas.js";

dotenv.config();
const appExpress = express();

const config = JSON.parse(process.env.MY_CONFIG);

appExpress.use(express.json());
appExpress.use("/bodegas", storageCampus);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));