import 'dotenv/config';
import Server from "./models/server";

require('dotenv').config();


const server = new Server();

server.listen();