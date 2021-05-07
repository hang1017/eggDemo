
import React, { FC, Fragment } from 'react';
import { useRequest, history } from 'alita';
import { Button } from 'antd-mobile';
import { getUserList } from './service';
import styles from './index.less';

interface HomePageProps { }

const HomePage: FC<HomePageProps> = () => {
  const { data, run } = useRequest(getUserList, {
    manual: true,
  });
  return <div className={styles.center}>
    {data && <Fragment>
      <div>调用 getUserList 请求： 出参：</div>
      {data.map((item: any) => (
        <div
          onClick={() => {
            history.push({
              pathname: '/userDetail',
              query: {
                id: item.id
              }
            })
          }}
          key={item?.id}
          style={{
            height: '1rem'
          }}
        >
          {item.name}</div>
      ))}
    </Fragment>}
    <Button onClick={() => run()}>get 请求</Button>
  </div>;
};

export default HomePage;
