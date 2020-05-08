import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },
    { path: '/app1', component: 'subAppContainer' },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:9090',
          base: '/app1',
          history: 'browser',
          mountElementId: 'root-subapp-container'
        }
      ]
    }
  }
});
