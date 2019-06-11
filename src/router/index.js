

import Login from '@/view/login/index.js'
import Index from '@/view/userMng/index.js'

export const main = [
  { path: '/login', name: '登录', component: Login },
  { path: '/', exact: true,  name: '首页', component: Index }
]