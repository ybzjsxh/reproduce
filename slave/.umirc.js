
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  base: 'app1',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/login', component: '../pages/login' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'slave',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    ['@umijs/plugin-qiankun/slave'],
  ],
}
