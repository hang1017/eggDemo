'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async userList() {
    const res = await this.app.mysql.query('select * from user');
    return res;
  }

  async userDetail(id) {
    const res = await this.app.mysql.query(`select * from user where id=${id}`);
    return res;
  }
}

module.exports = UserService;
