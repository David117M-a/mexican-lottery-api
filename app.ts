import dotenv from 'dotenv';
import Server from './models/server';

// Configruar .env
dotenv.config();

const server = new Server();

server.listen();