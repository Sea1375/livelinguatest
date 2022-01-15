export default [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home/Index.vue'),
  },
  {
    path: '/home',
    name: 'home.index',
    component: () => import('../views/Home/Index.vue'),
  },

];
