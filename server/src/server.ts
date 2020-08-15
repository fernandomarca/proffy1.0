import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

//request body: criar ou atualizar
//Route params:identificar recurso / deletar
//Query params:lista todos os users por página, filtro