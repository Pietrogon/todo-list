module.exports = app => {
  const db = require('sqlite-sync');

  db.connect('../database.db');

  const task = {};

  task.getListaTask = (req, res) => {
    res.status(200).json(db.run('select * from tasks'));
  }

  task.getTask = (req, res) => {
    let params = req.params;
    let sql = db.run('select * from tasks where pk_id = ' + params.tasksId)
    res.status(200).json(sql);
  }

  task.deleteTask = (req, res) => {
    let params = req.params;
    let sql = db.run('delete from tasks where pk_id = ' + params.tasksId)
    res.status(200).json(sql);
  }

  task.updateTask = (req, res) => {
    let params = req.params;
    let task = req.body;
    let sql = db.run('update tasks set task = ' + task.task + ' where pk_id = ' + params.tasksId)
    console.log(sql);
    res.status(200).json(sql);
  }

  task.createTask = (req, res) => {
    var task = req.body;
    res.status(200).json(db.run("INSERT INTO tasks (userId, categoryId, title, task, status) VALUES('"+task.userId+"','"+task.categoryId+"','"+task.title.replace("'","''")+"','"+task.task.replace("'","''")+"','" +task.status+"'"+");"));
  }  

  return task;
}