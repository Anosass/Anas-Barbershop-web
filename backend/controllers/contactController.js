const { readDB, writeDB } = require('../models/db');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitContact(req, res) {
  const { name, email, message, preferredService, preferredDay } = req.body || {};

  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Name is required and should be at least 2 characters.');
  }

  if (!email || !isValidEmail(email)) {
    errors.push('A valid email is required.');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message is required and should be at least 10 characters.');
  }

  if (preferredDay && !['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(preferredDay)) {
    errors.push('Preferred day must be between Monday and Saturday.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const db = readDB();
  const contacts = db.contacts || [];

  const newContact = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    preferredService: preferredService || null,
    preferredDay: preferredDay || null,
    createdAt: new Date().toISOString()
  };

  contacts.push(newContact);
  db.contacts = contacts;
  writeDB(db);

  return res.status(201).json({
    message: 'Thank you for reaching out. We will get back to you soon.',
    contactId: newContact.id
  });
}

module.exports = {
  submitContact
};
