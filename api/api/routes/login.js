module.exports = app => {
  const controller = app.controllers.login;

  app.route('/api/login')
    .post(controller.login);
}