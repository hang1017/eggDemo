'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async userListController() {
    const { ctx } = this;
    const data = Array.from(new Array(9)).map((_val, i) => ({
      name: `name${i}`,
      id: i,
    }));
    ctx.body = {
      data,
      success: true,
    };
  }

  async userDetailController() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    ctx.body = {
      data: {
        id,
        name: `name${id}`,
      },
      success: true,
    };
  }
}

module.exports = HomeController;
