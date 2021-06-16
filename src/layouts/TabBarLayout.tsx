import React from "react";
import {unstable_TabBar as TabBar} from '@ant-design/mobile'
import {useHistory} from "react-router";
import {Options as RouterData} from '../components/Router/index'

import styles from './TabBarLayout.module.scss'

const Item = TabBar.Item

interface Options{
  children?: React.ReactNode;
  routers?: Array<RouterData>;
}

const Index: React.FC = (props:Options) => {
  const history = useHistory();

  return (
    <div className={styles.tabBarWrap}>
      <div className={styles.tabBar}>
        <TabBar>
          {
            props.routers?.map(item => (
              <Item
                activeClassName={styles.activeTab}
                key={item.path}
                value={item.path}
                icon={item.icon}
                activeIcon={item.activeIcon}
                title={item.title}
                active={history.location.pathname === item.path}
                onPress={() => history.push( item.path )}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ paddingTop: '0.6rem', fontSize: '0.26rem' }}>
                    { props.children }
                  </div>
                </div>
            </Item>
            ))
          }
        </TabBar>
      </div>
    </div>
  );
};

export default Index;
