<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->
<script src="../../assets/js/iscroll.js"></script>
<script src="../../assets/js/vue-scroll.js"></script>
<script>
	//css引入
import '../../assets/css/app_downAlert.css';
import '../../assets/css/auction.css';
import '../../assets/css/discount-scroll.css';
import '../../assets/css/store-index.css';
import '../../assets/css/discount.css';

	  export default {
        name: 'auctionPaySuccess',
        data() {
            return {
                msg: 'this is auctionPaySuccess'
            }
        }

	  }
</script>


<template>

  <div id="ChoiseDiscount">
    <div id="wrapper" class="wrap" v-cloak>
      <ul class="store-tap store-tap-bottom" id="store-tap">
        <li><a class="store-avtive" @click="tab(0)" href="javascript:;">可使用({{lis.length}})</a></li>
        <li><a @click="tab(1)" href="javascript:;">不可使用({{lis.length}})</a></li>
      </ul>
      <!--有优惠券时-->
      <!--优惠券可用-->
      <template v-for="(li,index) in lis" v-if="!StoreActive">
        <ul class="discount-list-wrap" style="display: block">
          <img class="loading" src="../images/loading.svg" v-if="static == 1">
          <img class="success" src="../images/success.svg" v-if="static == 2">
          <img class="before" src="../images/before.svg" v-if="static == 0">
          <li v-for="(li,key) in lis" v-if="key == 0">
            <div class="discount-used-wrap discount-used-change" style="display:block;">
              <div class="dicount-kong-line1"></div>
              <div class="has-discount-left">
                <div class="not-get">
                  <!--这是红色背景-->
                  <img v-show="show" class="discount-not-get" src="../images/discount_no_get1.png" alt="">
                  <!--这是灰色背景-->
                  <img v-show="hide" class="discount-not-get" src="../images/discount_already_pass1.png" alt="">
                  <span class="discount-money-wrap">
										<span class="discount-money">￥</span>
										<span class="discount-price">900</span>
									</span>
                  <span class="full-money-reduce">满100000可减</span>
                </div>
                <div class="has-discount-right">
                  <!--满减券字样红色-->
                  <div v-show="show" class="discount-name"><span class="full-reduce">满减券</span></div>
                  <!--满减券字样灰色-->
                  <div v-show="hide" class="discount-name-height"><span class="full-reduce full-reduce-bgcolor">满减券</span></div>
                  <div v-if="show" class="discount-effect">
                    <span v-if="show">指定商品可用</span>
                    <span v-if="hide">全部商品可用</span>
                    <span v-if="show">
										<img v-show="listLength[index].open" v-model="listLength[index].open" id="id1" @click="togglefn(index)"  class="discount-right float-left" src="../images/weixuanzhong.png" alt="">
										<img v-show="!listLength[index].open" @click="togglefn(index)" class="discount-right float-left" src="../images/xuanzhong.png" alt="">
									</span>
                    <span v-if="hide">
										<img class="discount-right float-left" src="../images/discount_right.png" alt="">
									</span>
                  </div>
                  <!--已过期背景图-->
                  <img v-if="hide" class="already-pass" src="../images/already_pass.jpg" alt="">
                  <!--已经领取背景图-->
                  <img v-if="hide" class="already-get" src="../images/already_get.png" alt="">
                  <!--这里是时间-->
                  <div class="discount-effect discount-effect-position">
                    <span>2017.9.30</span><span class="discount-time-min">15:21</span>至<span>2017.7.30</span><span class="discount-time-min">17:31</span>
                  </div>
                  <!--这个是已使用，已过期那些的背景图-->
                  <!--已使用-->
                  <img v-show="hide" class="already-pass already-use-list" src="../images/already_use.png" alt="">
                  <!--已经过期-->
                  <img v-show="hide" class="already-pass already-use-list" src="../images/already_pass2.png" alt="">
                  <!--这是快到期-->
                  <img v-show="show" class="already-pass no-effective" src="../images/arrive_time_su.png" alt="">
                  <!--这是未生效-->
                  <img v-show="hide" class="already-pass no-effective" src="../images/no_effective.png" alt="">
                  <!--不能使用的原因-->
                  <div v-if="hide" class="cant-use-discount-reason">
                    <img class="discount-right margin-left0" src="../images/warn_text.png" alt="">
                    <span v-if="show">未生效</span>
                    <span v-if="hide">订单包含不适用商品</span>
                    <span v-if="hide">非可用时段内不可用</span>
                    <span v-if="hide">只允许到店提货订单</span>
                    <span v-if="hide">只允许同城快递订单</span>
                    <span v-if="hide">订单金额需满200元</span>
                    <span v-if="hide">不可与其他优惠叠加</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </template>
      <!--优惠券不可用-->
      <template v-for="(li,index) in lis" v-if="StoreActive">
        <ul class="discount-list-wrap" style="display: block">
          <li v-for="(li,key) in lis" v-if="key == 1">
            <div class="discount-used-wrap discount-used-change" style="display:block;">
              <div class="dicount-kong-line1"></div>
              <div class="has-discount-left">
                <div class="not-get">
                  <!--这是红色背景-->
                  <img v-show="hide" class="discount-not-get" src="../images/discount_no_get1.png" alt="">
                  <!--这是灰色背景-->
                  <img v-show="show" class="discount-not-get" src="../images/discount_already_pass1.png" alt="">
                  <span class="discount-money-wrap">
											<span class="discount-money">￥</span>
											<span class="discount-price">900</span>
										</span>
                  <span class="full-money-reduce">满100000可减</span>
                </div>
                <div class="has-discount-right">
                  <!--满减券字样红色-->
                  <div v-show="hide" class="discount-name-height"><span class="full-reduce">满减券</span></div>
                  <!--满减券字样灰色-->
                  <div v-show="show" class="discount-name-height"><span class="full-reduce full-reduce-bgcolor">满减券</span></div>
                  <!--当查看详情隐藏时显示这个，也就是加了个类discount-already-pass-->
                  <div v-if="show" class="discount-effect">
                    <span v-if="show">指定商品可用</span>
                    <span v-if="hide">全部商品可用</span>
                    <span v-if="hide">
											<img v-show="toggle" @click="togglefn()"  class="discount-right float-left" src="../images/weixuanzhong.png" alt="">
											<img v-show="!toggle" @click="togglefn()" class="discount-right float-left" src="../images/xuanzhong.png" alt="">
										</span>
                    <span v-if="show">
											<img class="discount-right float-left" src="../images/discount_right.png" alt="">
										</span>
                  </div>
                  <!--已过期背景图-->
                  <img v-if="show" class="already-pass" src="../images/already_pass.jpg" alt="">
                  <!--已经领取背景图-->
                  <img v-if="show" class="already-get" src="../images/already_get.png" alt="">
                  <!--这里是时间-->
                  <div class="discount-effect discount-effect-position">
                    <span>2017.9.30</span><span class="discount-time-min">15:21</span>至<span>2017.7.30</span><span class="discount-time-min">17:31</span>
                  </div>
                  <!--这个是已使用，已过期那些的背景图-->
                  <!--已使用-->
                  <img v-show="hide" class="already-pass already-use-list" src="../images/already_use.png" alt="">
                  <!--已经过期-->
                  <img v-show="hide" class="already-pass already-use-list" src="../images/already_pass2.png" alt="">
                  <!--这是快到期-->
                  <img v-show="hide" class="already-pass no-effective" src="../images/arrive_time_su.png" alt="">
                  <!--这是未生效-->
                  <img v-show="hide" class="already-pass no-effective" src="../images/no_effective.png" alt="">
                  <!--不能使用的原因-->
                  <div class="cant-use-discount-reason">
                    <img class="discount-right margin-left0" src="../images/warn_text.png" alt="">
                    <span v-if="show">未生效</span>
                    <span v-if="hide">订单包含不适用商品</span>
                    <span v-if="hide">非可用时段内不可用</span>
                    <span v-if="hide">只允许到店提货订单</span>
                    <span v-if="hide">只允许同城快递订单</span>
                    <span v-if="hide">订单金额需满200元</span>
                    <span v-if="hide">不可与其他优惠叠加</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </template>
      <!--没有优惠券的时候-->
      <div class="store_no_avtive" style="display: none">
        <div class="store_noAvtive_content" >
          <img class="store_noActive_img discount-no-discount" src="../images/discount_no_discount.png"/>
          <span class="store_noAvtive_text discount-no-discount-text">当前没有可用优惠券</span>
          <span class="store_noAvtive_text discount-no-discount-text">当前没有不可用优惠券</span>
        </div>
      </div>
    </div>

  </div>

</template>
<style>
  html{
    font-size: 625%;
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  body{
    font-size: 14px;
    width: 100%;
    height: 100%;
  }
</style>
