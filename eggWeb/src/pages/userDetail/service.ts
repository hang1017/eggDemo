import { request } from 'alita';

export async function queryUserDetail(params: any): Promise<any> {
  return request('/api/getUserDetail', { method: 'post', data: params });
}
