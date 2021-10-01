// Modules
import express, { Application, Request, Response } from 'express';
import { posRoutes, preRoutes } from '../Middlewares';
import Routes from '../router';

import { Doc } from '../hooks/docs';

const app: Application = express();

// middleware preRoutes
preRoutes(app);

app.use(express.json());

// Routes
Routes(app);

//
app.use('/static/*', express.static(Doc.base + '*'));

// meddleware posRutes
posRoutes(app);

// Settings

app.set('port', process.env.PORT || 5051);

export default app;
