'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/list')(app);
  require('./router/detail')(app);
};
