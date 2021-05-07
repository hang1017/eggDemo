import { request } from 'alita';
import { getUserListApi } from '@/utils/api';

export async function getUserList(): Promise<any> {
  return request(getUserListApi, { method: 'get' });
}
