const Sequelize = require('sequelize');
const mensajes = require('../models').mensaje;

module.exports = {
	create(req, res) {
		// console.log(req)
		return mensajes
			.create({
				usuario: req.body.usuario,
				comentario: req.body.comentario,
			})
			.then(mensaje => res.status(201).send(mensaje))
			.catch(error => res.status(400).send(error))
	},

	list(req, res) {
		return mensajes
			.findAll({})
			.then(mensajes => res.status(200).send(mensajes))
			.catch(error => res.status(400).send(error))
	},

	find(req, res) {
		return mensajes
			.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(mensajes => res.status(200).send(mensajes))
			.catch(error => res.status(400).send(error))
	},

	updateMensaje(req, res) {
		// console.log('updateMensaje', req.params, req.body, parseInt(req.params.id));
		return mensajes
			.update({
					comentario: req.body.comentario,
				}, {
					where: {
						id: parseInt(req.params.id),
					},
				}
			)
			.then(mensajes => res.status(200).send(mensajes))
			.catch(error => res.status(400).send(error))
	},
}
