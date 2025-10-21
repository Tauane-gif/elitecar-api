import express from "express"; 
import cors from "cors"; 
import {router} from "./routes.js"; 

const server = express(); //Cria um servifor HTTP
server.use(cors()); //Configura o servidopara usar o CORS
server.use(express.json()); //Configura o servidor para usar JSON 
server.use(router);//adiciona as rotas ao servidor HTTP 

export {server}; //exporta o servidor 