export default {
  // src/components/Router/index
  history: { type: 'browser' },
  routes: [
    {
      path: '/',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', redirect: '/home/dashboard' },
        {
          path: '/home',
          layout: 'TabBarLayout',
          routes: [
            { path: '/home/dashboard',
              component: 'tabbar/dashboard',
              title: '工作台',
              icon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*hcUHRrt9I0UAAAAAAAAAAABkARQnAQ',
              activeIcon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*S0_KQozuRjMAAAAAAAAAAABkARQnAQ'
            },
            { path: '/home/inform',
              component: 'tabbar/inform',
              title: '动态',
              icon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*hcUHRrt9I0UAAAAAAAAAAABkARQnAQ',
              activeIcon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*S0_KQozuRjMAAAAAAAAAAABkARQnAQ'
            },
            { path: '/home/chat',
              component: 'tabbar/chat',
              title: '消息',
              icon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*hcUHRrt9I0UAAAAAAAAAAABkARQnAQ',
              activeIcon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*S0_KQozuRjMAAAAAAAAAAABkARQnAQ'
            },
            {
              path: '/home/account',
              component: 'tabbar/account',
              title: '我的',
              icon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*PNChSazFds8AAAAAAAAAAABkARQnAQ',
              activeIcon: 'https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*tdqUR7NiUhoAAAAAAAAAAABkARQnAQ',
            }
          ]
        },
        {
          path: '/account',
          routes: [
            { path: '/account/detailed', component: 'account/detailed', title: '个人资料' },
          ]
        },

      ],
    },
  ],
  network: {
    isMock: false,
    mainHost: 'http://111.229.238.33/api',
    mockHost: 'http://49.235.200.8:3000/mock/11/api',
  },
};
