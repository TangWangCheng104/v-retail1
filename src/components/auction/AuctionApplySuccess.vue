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

  <div id="auctionApplySuccess">
    <div class="auction-wrap clearfix">
      <div class="auction-top-img-wrap"><img class="auction-top-img" src="../../assets/images/icon_success.png" /></div>
      <div class="auction-top-text clearfix">
        <!--报名成功显示-->
        <p style="display: none">报名成功！</p>
        <!--付款成功显示-->
        <p class="auction-pay-success"  style="display: block">恭喜您付款成功！</p>
        <p class="auction-p" style="display: block">您已报名成功！</p>
      </div>
      <!--报名成功显示-->
      <div style="display: block;" class="auction-top-img-wrap auction-top-img2-wrap"><img class="auction-top-img2" src="../../assets/images/auction_name_success.png" /></div>
      <!--付款成功显示-->
      <div style="display: block;" class="auction-top-img-wrap auction-top-img2-wrap"><img class="auction-top-img2" src="../../assets/images/auction_pay_success.png" /></div>
      <!--当支付完尾款时，下方div隐藏-->
      <!--门店公众号二维码-->
      <div class="retail-paySuccess-code" style="top: 236px;">
        <div class="retail-paySuccess-code-img">
          <img class="img-responsive " src="../../assets/images/retail-waitingPay-qrcode.png" alt="">
        </div>
        <!--关注公众号-->
        <div style="display: block">
          <div class="text-center size16">门店微信公众号二维码</div>
          <!--交易完成状态-->
          <div class="text-center size12" style="display:none;">长按识别二维码，优惠资讯永不错过!</div>
          <!--订单付款成功,等待卖家发货，等待买家付尾款状态-->
          <div class="text-center size12" style="display:none;">长按识别二维码，接收最新订单通知!</div>
          <!--订单付款成功,等待活动结果状态-->
          <div class="text-center size12" style="display:block;">长按识别二维码，了解最新活动结果!</div>
          <!--待付款、交易完成-->
          <div class="text-center size12" style="display:none;">长按识别二维码，接收最新优惠资讯!</div>
          <!--退款等待审核状态-->
          <div class="text-center size12" style="display:none;">长按识别二维码，了解最新退款通知!</div>
        </div>
        <!--添加门店微信-->
        <div style="display: none">
          <div class="text-center">商家微信二维码</div>
          <div class="text-center size12">长按识别二维码，添加微信好友</div>
        </div>
      </div>
      <div class="auction-return-success-wrap">
        <span class="auction-return-success">返回成功</span>
      </div>
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
