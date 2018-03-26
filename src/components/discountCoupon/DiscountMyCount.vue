<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->
<script src="../js/discount.js"></script>

<script>
	//css引入

  import '../../assets/css/retailCommon.css';
  import '../../assets/css/retail-waitingPay.css';
  import '../../assets/css/store-index.css';

	  export default {
        name: 'kandan',
        data() {
            return {
                msg: 'this is FreeApliy'
            }
        },
      mounted : function () {

      }

	  }
</script>


<template>
  <div id="discountMyCount">
    <div class="container-fluid small_screen">
      <div class="row">
        <div class="comafter retail-myaccount">
          <div class="comafter retail-myaccount-icon-username">
            <img class="img-responsive" src="../../assets/images/bg_wode_nor@3x.png" alt="">
            <div class="lqy-myaccount-username" style="" >
              <div class="retail-myaccount-icon">
                <img class="img-responsive" src="../../assets/images/retail-goodsDetails-img004.png" alt="">
              </div>
              <div class="text-center retail-myaccount-username discount-myaccount-username">
                可可香奈儿奢侈品珠宝
              </div>
            </div>
          </div>
          <div class="lqy-myaccount-orders">
            <div class="lqy-orders-status lqy-orders-myorder">
              <a class="a_block" href="">
                <div class="lqy-orders-img">
                  <img class="img-responsive" src="../../assets/images/icon_quanbudingdan_nor@3x.png" alt="">
                </div>
                <div class="lqy-orders-statusText">全部订单</div>
              </a>
            </div>
            <div class="lqy-orders-status">
              <a class="a_block" href="">
                <div class="lqy-orders-img">
                  <img class="img-responsive" src="../../assets/images/icon_daifukuan_nor@3x1.png" alt="">
                  <span class="lqy-orders-account">8</span>
                </div>
                <div class="lqy-orders-statusText">待付款</div>
              </a>
            </div>
            <div class="lqy-orders-status" >
              <a class="a_block a_block">
                <div class="lqy-orders-img">
                  <img class="img-responsive" src="../../assets/images/icon_tihuoshouhuo_nor@3x.png" alt="">
                  <span class="lqy-orders-account" style="display: none">100</span>
                  <!--当三位或三位以上数字时，数字不显示，变为点点点-->
                  <span class="lqy-orders-account">···</span>
                </div>
                <div class="lqy-orders-statusText">提货/收货</div>
              </a>
            </div>
            <div class="lqy-orders-status">
              <a class="a_block" href="">
                <div class="lqy-orders-img">
                  <img class="img-responsive" src="../../assets/images/icon_tuikuanzhong_nor@3x1.png" alt="">
                  <span class="lqy-orders-account">15</span>
                </div>
                <div class="lqy-orders-statusText">退款中</div>
              </a>
            </div>
            <div class="lqy-orders-status">
              <a class="a_block" href="">
                <div class="lqy-orders-img">
                  <img class="img-responsive" src="../../assets/images/icon_yiwancheng_nor@3x1.png" alt="">
                </div>
                <div class="lqy-orders-statusText">已完成</div>
              </a>
            </div>
          </div>
          <div class="com-interval discount-com-interval">更多</div>
          <div class="comafter text-center retail-myaccount-msg discount-myaccount-msg">
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_youhuiquan_nor@3x.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">优惠券</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_wodehuodong_nor@3x1.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">我的活动</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-mycollect discount-myaccount-record">
                  132
                </div>
                <div class="lqy-orders-statusText01">我的收藏</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common" style="display: none;">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_mendianzhuye_nor@3x.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">门店主页</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common" style="display: block">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg lqy-myaccount-record discount-myaccount-record">
                  100
                </div>
                <div class="lqy-orders-statusText01">浏览记录</div>
              </a>
            </div>

          </div>
          <div class="comafter text-center retail-myaccount-msg discount-myaccount-msg">
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common1" >
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_mendianzhuye_nor@3x1.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">门店主页</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common1">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_gerenziliao_nor@3x1.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">个人资料</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common1" style="display: block">
              <a href="#" class="a_block">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_zanghaoshezhi_nor@3x1.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">退款账户</div>
              </a>
            </div>
            <div class="retail-myaccount-msg-common discount-myaccount-msg-common1">
              <a href="#" class="a_block" style="opacity: 0;">
                <div class="lqy-orders-img lqy-myaccount-msg">
                  <img class="img-responsive" src="../../assets/images/icon_zhanghaoshezhi_nor@3x.png" alt="">
                </div>
                <div class="lqy-orders-statusText01">账号设置</div>
              </a>
            </div>
          </div>
          <ul class="store-bottom">
            <li>
              <a href="javascript:;" class="store-bottom-active">
                <img src="../../assets/images/icon_shangcheng_nor@3x.png" />
                <p>商城</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/images/icon_kefu_nor@3x.png" />
                <p>客服</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/images/icon_wode_xuanzhong_nor@3x.png" />
                <p>我的</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

