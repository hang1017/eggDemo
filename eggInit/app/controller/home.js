'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async userListController() {
    const { ctx, service } = this;

    const res = await service.user.userList();

    ctx.body = {
      data: res,
      success: true,
    };
  }

  async userDetailController() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;

    const res = await service.user.userDetail(id);
    ctx.body = {
      data: res,
      success: true,
    };
  }
}

module.exports = HomeController;
