
import React, { FC } from 'react';
import { useRequest } from 'alita';
import { queryUserDetail } from './service';
import styles from './index.less';

interface UserDetailPageProps {
  location: any;
}

const UserDetailPage: FC<UserDetailPageProps> = ({ location }) => {
  const { id } = location.query;
  const { data } = useRequest(() => queryUserDetail({ id }));
  return <div className={styles.center}>
    {data && JSON.stringify(data)}
  </div>;
};

export default UserDetailPage;
