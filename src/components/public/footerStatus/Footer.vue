<template id="retailFooter">
  <div class="retailFooter">
    <div class="lqy-btnBuy-bottom" id="bottomBuyBtn" style="display:block;">
      <div class="help-alert js_help_alert" style="display: none">
        <div class="help-alert-text">
          <span class="help-alert-text">有什么可以帮您？</span>
        </div>
        <div class="help-alert-icon"><span></span></div>
      </div>
      <div class="lqy-btnBuy-myAccount">
        <a href="#" class="a_block">
          <img class="js_serviceIcon lqy-btnBuy-myAccount-img suppliers-icon-bigger kandan-bottom-icon-change" :src="childMsg + kefuIcon" alt="">
          <div class="lqy-btnBuy-myAccount-text">客服</div>
        </a>
      </div>
      <div class="lqy-btnBuy-myAccount">
        <a href="#" class="a_block">
          <img class="lqy-btnBuy-myAccount-img suppliers-icon-bigger kandan-bottom-icon-change" :src="childMsg + shangchengIcon" alt="">
          <div class="lqy-btnBuy-myAccount-text">商城 <img class="bounce-discounts-icon" :src="childMsg + discountsIcon" alt=""></div>
        </a>
      </div>
      <div class="lqy-btnBuy-myAccount">
        <img class="lqy-btnBuy-myAccount-img suppliers-icon-bigger kandan-bottom-icon-change" :src="childMsg + myAccountIcon" alt="">
        <div class="lqy-btnBuy-myAccount-text">收藏</div>
      </div>
      <div class="lqy-btnBuy-myAccount kandan-myAccount-btn sippliers-icon-background">
        <a href="#" class="a_block">
          <img class="lqy-btnBuy-myAccount-img suppliers-icon-bigger kandan-bottom-icon-change" :src="childMsg + myCenterIcon" alt="">
          <div class="lqy-btnBuy-myAccount-text ">我的</div>
        </a>
      </div>
      <!--立即购买-->
      <!--<div id="js_buying" class="text-center lqy-btnBuy-now" style="display: none;"><a href="javascript:;" onclick="browserAlert();" class="js_buying_btn a_block suppliers-now-buy">立即购买</a></div>-->
      <div id="js_buying" class="text-center lqy-btnBuy-now kandan-buyBtnFontSize" style="display: none">
        <div class="pindan-price-fontSize">当前价：￥699</div>
        <a href="javascript:;" onclick="browserAlert();" class="js_buying_btn a_block">立即购买</a>
      </div>
      <!--到底价才能购买-->
      <div class="text-center lqy-btnBuy-now kandan-buyBtnFontSize" onclick="ArrivePriceAlert()" style="display: block">
        <div class="pindan-price-fontSize">当前价：￥699</div>
        <a href="javascript:;" class="a_block">到底价才能购买</a>
      </div>
      <!--限购两件-->
      <div class="text-center lqy-btnBuy-now kandan-buyBtnBgColor kandan-buyBtnFontSize" onclick="toastAlert()" style="display: none">
        <a href="javascript:;" class="a_block">每人限购两件</a>
      </div>
      <!--限购两件-->
      <div class="text-center lqy-btnBuy-now kandan-buyBtnFontSize" style="display: none">
        <a href="javascript:;" class="a_block">继续发起砍价</a>
      </div>
      <!--去付款-->
      <div class="text-center lqy-btnBuy-now kandan-buyBtnFontSize" style="display: none">
        <div class="pindan-price-fontSize">￥699</div>
        <a href="javascript:;" onclick="browserAlert();" class="js_buying_btn a_block">去付款</a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
  template: '#retailFooter',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is retailFooter',
      kefuIcon : '/images/icon_kefu01_nor@3x.png',
      myCenterIcon : '/images/icon_shoucang_nor@3x.png',
      shangchengIcon : '/images/icon_shangcheng01_nor@3x.png',
      myAccountIcon:'/images/icon_wode01_nor@3x.png',
      discountsIcon:'/images/icon_discounts.png'
    }
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .kandan-buyBtnFontSize{
    height: 50px;
  }
  .lqy-btnBuy-myAccount{
    height: 50px;
    background: #fff;
  }
</style>
