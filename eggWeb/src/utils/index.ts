// 封装获取 cookie 的方法
export const getCookie = (name: any) => {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return '';
};
