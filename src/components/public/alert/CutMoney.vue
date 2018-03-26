<template>
  <!--成功砍掉金额-->
  <div class="js_hide_com js_kandan_alert02 kandan-alert-wrap" style="display: none">
    <div class="flex-row kandan-alert-close">
      <img onclick="cancelAlert()" :src="childMsg + kandanCloseImg" alt="">
    </div>
    <div class="kandan-alert">
      <div class="kandan-alert-img01"><img :src="childMsg + kandanAlertImg" alt=""></div>
      <div class="kandan-alert-text">成功砍掉<span class="color-zby">32</span>元！</div>
      <a class="kandan-alert-btn" href="#">我也想砍价</a>
    </div>
  </div>
  <!--成功砍掉金额end-->
</template>

<script>
export default {
  name: 'CutMoney',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is index',
      kandanCloseImg : "/images/kandan_close.png",
      kandanAlertImg : "/images/kandan_alert002.png"

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
