module.exports = app => {
  const db = require('sqlite-sync');

  db.connect('../database.db');

  const category = {};

  category.getListaCategory = (req, res) => {
    res.status(200).json(db.run('select * from category'));
  }

  category.getCategory = (req, res) => {
    let params = req.params;
    let sql = db.run('select * from categorys where pk_id = ' + params.categoryId)
    console.log(sql);
    res.status(200).json(sql);
  }

  category.deleteCategory = (req, res) => {
    let params = req.params;
    let sql = db.run('delete from categorys where pk_id = ' + params.categoryId)
    console.log(sql);
    res.status(200).json(sql);
  }

  category.updateCategory = (req, res) => {
    let params = req.params;
    let category = req.body;
    let sql = db.run('update categorys set name = ' + category.name + ' where pk_id = ' + params.categoryId)
    console.log(sql);
    res.status(200).json(sql);
  }

  category.createCategory = (req, res) => {
    var category = req.body;
    res.status(200).json(db.run("INSERT INTO categorys (userId, name) VALUES('"+category.userId+"','"+category.name +"');"));
  }  

  return category;
}