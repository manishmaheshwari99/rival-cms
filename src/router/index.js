import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Register from '../views/Register';
import Blog from '../views/Blog';


const routes = [
  {
    path: '',
    redirect: { name: 'dashboard' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'manage/blog',
        component: Blog,
      },
    ]
  },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = getAuth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
})

export default router