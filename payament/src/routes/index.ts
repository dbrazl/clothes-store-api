import { Router } from 'express';

import PayamentController from '../modules/payament/controller';

const routes = Router();

routes.get('/health', PayamentController.health);
routes.post('/create/payament/preference', PayamentController.store);

export default routes;
