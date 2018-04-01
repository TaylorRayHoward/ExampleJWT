const db = require('../database');

const User = db.Model.extend({
  tableName: 'login_user',
  hasSecurePassword: true
});

module.exports = User;
