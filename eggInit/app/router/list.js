'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/api/getUserList', controller.home.userListController);
};
