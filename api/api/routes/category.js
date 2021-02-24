module.exports = app => {
  const controller = app.controllers.category;

  app.route('/api/category')
    .get(controller.getListaCategory)
    .post(controller.createCategory);
  
  app.route('/api/category/:categoryId')
    .get(controller.getCategory)
    .delete(controller.deleteCategory)
    .put(controller.updateCategory)
}