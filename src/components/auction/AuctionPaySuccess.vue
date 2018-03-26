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
        }

	  }
</script>


<template>

  <div id="auctionPaySuccess">
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
      <div class="auction-top-img-wrap auction-top-img2-wrap"><img class="auction-top-img2" src="../../assets/images/auction_pay_success.png" /></div>
      <div class="auction-return-success-wrap">
        <span class="auction-return-success">返回成功</span>
      </div>
    </div>
  </div>

</template>
<style>
  body{
    background: #fff;
  }
</style>
