module.exports = app => {
  const db = require('sqlite-sync');

  db.connect('../database.db');

  const users = {};

  users.getListaUsers = (req, res) => {
    res.status(200).json(db.run('select * from users'));
  }

  users.getUser = (req, res) => {
    let params = req.params;
    let sql = db.run('select * from users where pk_id = ' + params.userId)
    res.status(200).json(sql);
  }

  users.deleteUser = (req, res) => {
    let params = req.params;
    let sql = db.run('delete from users where pk_id = ' + params.userId)
    res.status(200).json(sql);
  }

  users.updateUser = (req, res) => {
    let params = req.params;
    let user = req.body;
    let sql = db.run('update users set email = ' + user.email + ', name = ' + user.name + ', password = ' + user.password + ' where pk_id = ' + params.userId)
    res.status(200).json(sql);
  }

  users.createUser = (req, res) => {
    var user = req.body;
    console.log(req);
    res.status(200).json(db.run("INSERT INTO users (name, email, password) VALUES('"+user.name+"', '" + user.email + "', '" + user.password + "');"));
  }

  return users;
}