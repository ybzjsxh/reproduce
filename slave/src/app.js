export const qiankun = {
  async bootstrap(props) {
    console.log('boot');
  },
  async mount(props) {
    console.log('mount');
  },
  async unmount(props) {
    console.log('unmount');
  }
}