const mensajesController = require('../controllers/mensaje');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({message: 'Oki doki'}));
  app.post('/api/mensajes', mensajesController.create);
  app.get('/api/mensajes', mensajesController.list);
  app.get('/api/mensajes/:id', mensajesController.find);
  app.put('/api/mensajes/:id', mensajesController.updateMensaje);
}
