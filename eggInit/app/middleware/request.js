'use strict';

module.exports = options => {
  return async function requestMiddleware(ctx, next) {
    if (ctx.request.header.requestheader === options.requestHeader) {
      await next();
    } else {
      ctx.status = 403;
      ctx.body = {
        data: 'access was denied',
        success: false,
      };
    }
  };
};
