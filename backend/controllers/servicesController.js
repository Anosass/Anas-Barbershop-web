const { readDB } = require('../models/db');

function getAllServices(req, res) {
  const db = readDB();
  const services = db.services || [];
  res.json(services);
}

function getServiceById(req, res) {
  const db = readDB();
  const { id } = req.params;
  const service = (db.services || []).find((s) => s.id === id);

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  res.json(service);
}

module.exports = {
  getAllServices,
  getServiceById
};
