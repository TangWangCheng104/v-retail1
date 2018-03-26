<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->
<script src="../js/discount.js"></script>

<script>
	//css引入
  import '../../assets/css/discount.css';

	  export default {
        name: 'kandan',
        data() {
            return {
                msg: 'this is FreeApliy',
                note: {
                  backgroundImage: "url(" + require("../../assets/images/retail-goodsDetails-img004.png") + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  marginTop: "5px",
                }
            }
        },
      mounted : function () {

      }

	  }
</script>


<template>
  <div id="discountLogin">
    <div class="discount-wrap">
      <div class="discount-top-wrap">
        <div class="discount-shop-name">
          <span class="discount-top-img" style="background: url('../../assets/images/retail-goodsDetails-img004.png') center center/cover"></span>
          <span class="discount-top-name">传世金鱼珠宝店-田贝店</span>
          <span class="discount-goto-store">前往商城</span>
        </div>
      </div>
      <div>
        <!--今天的券都领完了-->
        <img class="discount-use-end" src="../../assets/images/discount_use_end.png" alt="" style="display:none;">
        <!--所有的券都领完了-->
        <img class="discount-use-end" src="../../assets/images/all_discount_use_end.png" alt="" style="display:none;">
      </div>
      <div class="discount-can-get">
        <!--今天还有2张券可以领取-->
        <span class=""><span class="kong-line"></span>您今天还可领<span class="discount-number">2</span>张<span class="kong-line"></span></span>
      </div>

      <div class="full-cut-coupons-wrap" style="display: none">
        <div class="full-cut-coupons" >
          <img class="full-cut-coupons-img" src="../../assets/images/full_cut_coupons.png" alt="">
          <div class="full-cut-coupons-price">
            30
          </div>
          <div class="full-cut-coupons-condition">
            满¥<span>300</span>可减
          </div>
          <!--立即使用-->
          <a href="javascript:;" class="use-now">立即使用<img class="double-right-use-now" src="../../assets/images/right_assass.png" alt=""></a>
        </div>
      </div>
      <!--优惠券抢光了，没有领到-->
      <div class="full-cut-coupons-wrap" style="display: block">
        <div class="full-cut-coupons" >
          <img class="full-cut-coupons-img" src="../../assets/images/full_cut_coupons.png" alt="">
          <div class="full-cut-coupons-price">
            30
          </div>
          <div class="full-cut-coupons-condition">
            满¥<span>300</span>可减
          </div>
          <!--领取更多优惠-->
          <a href="javascript:;" class="use-now more-discount-text" style="display:none;">领取更多优惠<img class="double-right-use-now" src="../../assets/images/right_assass.png" alt=""></a>
          <!--点击领取，买买买-->
          <a href="javascript:;" class="use-now" style="display:block;">点击领取，买买买<img class="double-right-use-now" src="../../assets/images/right_assass.png" alt=""></a>
        </div>
      </div>
      <!--优惠券过期-->
      <div class="full-cut-coupons-wrap" style="display: block">
        <div class="full-cut-coupons" >
          <span class="discount-pass-text">您来晚了，该券已过期了哦～</span>
          <img class="full-cut-coupons-img" src="../../assets/images/pass_data.png" alt="">
        </div>
      </div>
      <!--优惠券下面部分-->
      <div class="check-my-discount-wrap">
        <div class="check-my-discount">查看我的优惠券 <img class="double-right-assass" src="../../assets/images/double_right_assass.png" alt=""></div>
        <div class="discount-rules-wrap">
          <span class="discount-rules">优惠细则</span>
        </div>
      </div>

    </div>

  </div>

</template>
<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  .discount-wrap{
    background: url('../../assets/images/discount_bg.png') no-repeat center center/cover;
    height: 100%;
    width: 100%;
  }
</style>
