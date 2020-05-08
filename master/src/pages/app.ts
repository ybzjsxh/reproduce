export const qiankun = new Promise(resolve =>
  resolve([
    {
      name: 'app1',
      entry: 'http://localhost:9090/app1',
      base: '/app1',
      mountElementId: 'root-subapp-container',
    },
  ]),
).then(apps => ({ apps }));
