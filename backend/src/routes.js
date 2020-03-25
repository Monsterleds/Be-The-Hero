const { Router } = require('express');

const routes = Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;