<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->

<script>
	//css引入
import '../../assets/css/app_downAlert.css';
import '../../assets/css/auction.css';

	  export default {
        name: 'auctionPaySuccess',
        data() {
            return {
                msg: 'this is auctionPaySuccess'
            }
        },
        mounted :function () {

          var ulHeight = $('.auction-right')[0].clientHeight;
          $('.auction-left-line').css('height',ulHeight - 82)

        }
	  }
</script>


<template>

  <div id="auctionStatusCloseOrder">
    <div class="auction-status-wrap">
      <div class="auction-left auction-left-close">
        <span class="auction-left-line"></span>

      </div>
      <ul class="auction-right">
        <li class="auction-right-active">
          <div class="auction-finish-text auction-finish-text1">
            <span class="auction-big-circle-outer"></span>
            <span class="auction-step-noactive ">订单关闭</span>
          </div>
          <div class="auction-finish-text">
            <span class="auction-finish-date">2017-06-30</span>
            <span class="auction-finish-time">12:51:14</span>
          </div>
        </li>
        <li>
          <div class="auction-finish-text auction-finish-text1"><span class="auction-small-circle-outer auction-small-circle-outer-nowStatus" style=""></span><span class="auction-step-active">逾期未提货，罚没保证金</span></div>
          <div class="auction-finish-text"><span class="auction-finish-date">2017-06-30</span> <span class="auction-finish-time">12:51:14</span></div>
        </li>
        <li>
          <div class="auction-finish-text auction-finish-text1"><span class="auction-small-circle-outer" style=""></span><span class="auction-step-noactive ">商家通知提货</span></span> <span class="auction-finish-username"><span class="auction-username-touxiang" style="background: url('../images/auction_logo.png') no-repeat center center/cover" ></span><span class="auction-name-ellipsis">小骨小骨小骨小骨</span></span></div>
          <div class="auction-finish-text"><span class="auction-finish-date">2017-06-30</span> <span class="auction-finish-time">12:51:14</span></div>
        </li>
        <li>
          <div class="auction-finish-text auction-finish-text1"><span class="auction-small-circle-outer" style=""></span><span class="auction-step-noactive ">拍卖活动参与成功</span><span class="auction-step-noactive "></span></div>
          <div class="auction-finish-text"><span class="auction-finish-date">2017-06-30</span> <span class="auction-finish-time">12:51:14</span></div>
        </li>
        <li>
          <div class="auction-finish-text auction-finish-text1"><span class="auction-small-circle-outer" style=""></span><span class="auction-step-noactive ">报名拍卖活动</span></span></div>
          <div class="auction-finish-text"><span class="auction-finish-date">2017-06-30</span> <span class="auction-finish-time">12:51:14</span></div>
        </li>
      </ul>
    </div>

      <!--<div class="auction-left auction-left-close">
        <span class="auction-left-line"></span>

      </div>-->
      <!--<ul class="auction-right">

      </ul>-->

    </div>
  </div>

</template>
<style>
  body{
    background: #fff;
  }
</style>
