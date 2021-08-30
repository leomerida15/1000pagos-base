import { Router } from 'express';

const Commerce: Router = Router();

// rutas de Commerceos CRUD
//
Commerce.route('/Commerce/:id').get().post();
//
Commerce.route('/Commerce/:user/:id').patch().delete();
//
export default Commerce;
