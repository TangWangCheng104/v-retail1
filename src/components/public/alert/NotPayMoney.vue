<template>
  <!--有该砍价未支付订单-->
  <div class="js_hide_com js_kandan_toPay kandan-alert-wrap" style="display: none">
    <div class="flex-row kandan-alert-close">
      <img onclick="cancelAlert()" :src="childMsg + notPayImg" alt="">
    </div>
    <div class="kandan-alert">
      <div class="kandan-alert-noPay">
        <div>你有该砍价的未支付订单</div>
        <div>请尽快支付吧</div>
      </div>
      <div class="flex-row">
        <a  onclick="cancelAlert()" class="flex-data kandan-alert-btn" href="#">再想想</a>
        <a class="flex-data kandan-alert-btn kandan-alert-toPay" href="#">去支付</a>
      </div>
    </div>
  </div>
  <!--有该砍价未支付订单end-->
</template>

<script>
export default {
  name: 'NotPayMoney',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is index',
      notPayImg : "/images/kandan_close.png"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
