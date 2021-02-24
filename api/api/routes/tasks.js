module.exports = app => {
  const controller = app.controllers.tasks;

  app.route('/api/tasks')
    .get(controller.getListaTask)
    .post(controller.createTask);
  
  app.route('/api/tasks/:tasksId')
    .get(controller.getTask)
    .delete(controller.deleteTask)
    .put(controller.updateTask)
}