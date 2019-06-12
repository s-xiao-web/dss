import Login from '@/view/login/index.js'
import Index from '@/view/index/index.js'

import UserMng from '@/view/userMng'
import InstitutionMng from '@/view/institutionMng'
import Role from '@/view/role'
import MonthlyUpload from '@/view/monthlyUpload'
import UploadLog from '@/view/uploadLog'

export const main = [
  { 
    path: '/login',
    name: '登录', 
    component: Login 
  },
  { 
    path: '/', 
    name: '首页',
    component: Index,
    children: [
      {
        path: '/userMng',
        name: '用户管理',
        component: UserMng
      },
      {
        path: '/institutionMng',
        name: '机构管理',
        component: InstitutionMng
      },
      {
        path: '/role',
        name: '角色权限',
        component: Role
      },
      {
        path: '/monthlyUpload',
        name: '月报上传',
        component: MonthlyUpload
      },
      {
        path: '/uploadLog',
        name: '上传历史',
        component: UploadLog
      }
    ]
  }
]