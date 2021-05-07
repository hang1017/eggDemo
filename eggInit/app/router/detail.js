'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/api/getUserDetail', controller.home.userDetailController);
};
