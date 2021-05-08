'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async userListController() {
    const { ctx, app } = this;
    const sql = 'select * from user';

    const res = await app.mysql.query(sql);

    ctx.body = {
      data: res,
      success: true,
    };
  }

  async userDetailController() {
    const { ctx, app } = this;
    const { id } = ctx.request.body;
    const sql = `select * from user where id=${id}`;

    const res = await app.mysql.query(sql);
    ctx.body = {
      data: res,
      success: true,
    };
  }
}

module.exports = HomeController;
