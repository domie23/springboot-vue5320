import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiaocai from '@/views/modules/jiaocai/list'
    import jioayanguanli from '@/views/modules/jioayanguanli/list'
    import lunwen from '@/views/modules/lunwen/list'
    import xiangmu from '@/views/modules/xiangmu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import ziliao from '@/views/modules/ziliao/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiaocai from '@/views/modules/dictionaryJiaocai/list'
    import dictionaryLunwen from '@/views/modules/dictionaryLunwen/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXiangmu from '@/views/modules/dictionaryXiangmu/list'
    import dictionaryZiliao from '@/views/modules/dictionaryZiliao/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiaocai',
        name: '教材类型',
        component: dictionaryJiaocai
    }
    ,{
        path: '/dictionaryLunwen',
        name: '教研论文类型',
        component: dictionaryLunwen
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXiangmu',
        name: '教研项目类型',
        component: dictionaryXiangmu
    }
    ,{
        path: '/dictionaryZiliao',
        name: '教研资料类型',
        component: dictionaryZiliao
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jiaocai',
        name: '教材',
        component: jiaocai
      }
    ,{
        path: '/jioayanguanli',
        name: '教研管理',
        component: jioayanguanli
      }
    ,{
        path: '/lunwen',
        name: '教研论文',
        component: lunwen
      }
    ,{
        path: '/xiangmu',
        name: '教研项目',
        component: xiangmu
      }
    ,{
        path: '/yonghu',
        name: '教研人员',
        component: yonghu
      }
    ,{
        path: '/ziliao',
        name: '教研资料',
        component: ziliao
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
