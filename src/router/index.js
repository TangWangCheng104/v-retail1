import Vue from 'vue'
import Router from 'vue-router'
import VueLazyload from 'vue-lazyload'
import HelloWorld from '@/components/HelloWorld'

// /*路由配置*/
// kandan
import KandanGoodsDetails from '@/components/kandan/KandanGoodsDetails.vue';
import FreeApliy from '@/components/kandan/FreeApliy.vue';
/*import KandanChange from '@/components/kandan/KandanChange.vue';*/
import KandanGoodsDetailsTest from '@/components/kandan/KandanGoodsDetailsTest.vue';

// /*auction*/
import AuctionIndex from '@/components/auction/AuctionIndex.vue';
import AuctionPaySuccess from '@/components/auction/AuctionPaySuccess.vue';
import AuctionStatusOrderFinished from '@/components/auction/AuctionStatusOrderFinished.vue';
import AuctionStatusCloseOrder from '@/components/auction/AuctionStatusCloseOrder.vue';
import AuctionStatusRefund from '@/components/auction/AuctionStatusRefund.vue';
import AuctionApplySuccess from '@/components/auction/AuctionApplySuccess.vue';
import AuctionActive from '@/components/auction/AuctionActive.vue';
import AuctionOrderDetail from '@/components/auction/AuctionOrderDetail.vue';
import AuctionOrderClose from '@/components/auction/AuctionOrderClose.vue';
import AuctionOrderWaitActiveResult from '@/components/auction/AuctionOrderWaitActiveResult.vue';
// /*discount*/
import DiscountContent from '@/components/discountCoupon/DiscountContent.vue';
import DiscountDetails from '@/components/discountCoupon/DiscountDetails.vue';
import DiscountLogin from '@/components/discountCoupon/DiscountLogin.vue';
import DiscountNoRigister from '@/components/discountCoupon/DiscountNoRigister.vue';
import DiscountMyCount from '@/components/discountCoupon/DiscountMyCount.vue';
import DiscountMySteryGift from '@/components/discountCoupon/DiscountMySteryGift.vue';
import DiscountSendFriend from '@/components/discountCoupon/DiscountSendFriend.vue';

// /*NewYearActive*/
import NewYearIndex from '@/components/NewYearActive/NewYearIndex.vue';
/*页面组件*/
import Footer from '@/components/public/footerStatus/Footer.vue';
/*制作页面*/
import freeApliy from '@/components/makeActivePage/freeApliy.vue';


// /*../images*/
// /*../../assets/images*/
Vue.use(Router);
Vue.use(VueLazyload);
export default new Router({
	mode:'hash',//将原来的history去除路由上面多余的*号，改成hash
  routes: [
    {
      path: '/',
      name: 'KandanGoodsDetailsTest',
      component: KandanGoodsDetailsTest
    },
    // /*kandan*/
    {
      path:'/KandanGoodsDetails',
      name:'KandanGoodsDetails',
      component:KandanGoodsDetails
    },
    {
      path:'/FreeApliy',
      name:'FreeApliy',
      component:FreeApliy
    },
    // {
    //   path:'/KandanChange',
    //   name:'KandanChange',
    //   component:KandanChange
    // },
    // /*auction*/
    {
      path:'/action',
      name:'AuctionIndex',
      component:AuctionIndex,
    },
    {
      path: '/AuctionPaySuccess',
      name: 'AuctionPaySuccess',
      component: AuctionPaySuccess
    },
    {
      path: '/AuctionStatusOrderFinished',
      name: 'AuctionStatusOrderFinished',
      component: AuctionStatusOrderFinished
    },
    {
      path: '/AuctionStatusCloseOrder',
        name: 'AuctionStatusCloseOrder',
      component: AuctionStatusCloseOrder
    },
    {
      path: '/AuctionStatusRefund',
      name: 'AuctionStatusRefund',
      component: AuctionStatusRefund
    },
    {
      path: '/AuctionApplySuccess',
      name: 'AuctionApplySuccess',
      component: AuctionApplySuccess
    },
    {
      path: '/AuctionOrderDetail',
      name: 'AuctionOrderDetail',
      component: AuctionOrderDetail
    },
    {
      path: '/AuctionOrderClose',
      name: 'AuctionOrderClose',
      component: AuctionOrderClose
    },
    {
      path: '/AuctionOrderWaitActiveResult',
      name: 'AuctionOrderWaitActiveResult',
      component: AuctionOrderWaitActiveResult
    },
    {
      path: '/AuctionActive',
      name: 'AuctionActive',
      component: AuctionActive
    },
    /*discount*/
    {
      path: '/DiscountContent',
      name: 'DiscountContent',
      component: DiscountContent
    },
    {
      path: '/DiscountDetails',
      name: 'DiscountDetails',
      component: DiscountDetails
    },
    {
      path: '/DiscountLogin',
      name: 'DiscountLogin',
      component: DiscountLogin
    },
    {
      path: '/DiscountNoRigister',
      name: 'DiscountNoRigister',
      component: DiscountNoRigister
    },
    {
      path: '/DiscountMyCount',
      name: 'DiscountMyCount',
      component: DiscountMyCount
    },
    {
      path: '/DiscountMySteryGift',
      name: 'DiscountMySteryGift',
      component: DiscountMySteryGift
    },
    {
      path: '/DiscountSendFriend',
      name: 'DiscountSendFriend',
      component: DiscountSendFriend
    },
    {
      path: '/NewYearIndex',
      name: 'NewYearIndex',
      component: NewYearIndex
    },
    // /*newYearActive*/
    // /*页面组件*/
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/KandanGoodsDetailsTest',
      name: 'KandanGoodsDetailsTest',
      component: KandanGoodsDetailsTest
    },
//  /*制作页面*/
		{
      path: '/freeApliy/:dfasd',
      name: 'freeApliy',
      component: freeApliy
    }
  ]
})
// //1.组件的引入
//  import HelloWorld from './components/HelloWorld.vue'
//  import Kandan from './components/kandan/KandanGoodsDetails.vue'

//  //2.配置路由
//  let routes = [
//  {
//  path:'*',redirect:'/HelloWorld'
//  },
//  {
//  path:'/HelloWorld',HelloWorld
//  },
//  {
//  path:'/cut',Kandan
//  }
//  ]

//  //3.实例化
//  let router = new VueRouter({
//  routes
//  })
//  //4.挂载
//  // eslint-disable no-new
//  new Vue({
//  el: '#app',
//  router,
//  render:h => h(App)
//  })
