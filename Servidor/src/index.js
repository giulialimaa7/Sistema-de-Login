import express from 'express';
import cors from 'cors';
import routes from './router.js';
import { connectDB } from './database/db.js'

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/", routes);

connectDB();

server.listen( process.env.PORT || 3333 || 80, () => { console.log( '\n\n ✔️  servidor rodando  ✔️ \n' ) } );
