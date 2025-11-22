const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database', 'db.json');

function readDB() {
  try {
    const raw = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading DB:', err);
    return { services: [], contacts: [] };
  }
}

function writeDB(db) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing DB:', err);
  }
}

module.exports = {
  readDB,
  writeDB,
  dbPath
};
