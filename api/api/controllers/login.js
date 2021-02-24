module.exports = app => {
  const db = require('sqlite-sync');

  db.connect('../database.db');

  const login = {};

  login.login = (req, res) => {
    let user = req.body;
    let sql = db.run("select * from users where email = '" + user.email + "' and password = '" + user.password + "'")
    res.status(200).json(JSON.stringify(!!sql[0]));
  }

  return login;
}