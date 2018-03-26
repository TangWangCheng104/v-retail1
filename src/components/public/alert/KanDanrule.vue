<template>
  <!--消费者和推广员砍价规则弹窗-->
  <div class="js_pingdan_alert js_hide_com pingdan-rule-alert" style="display:none;">
    <div class="kandan-rule-alert">
      <div class="text-center pingdan-rule-alert-title" style="color: #f5a828;">砍价规则</div>
      <div class="pingdan-rule-alert-item">1. 用户通过推广人/好友分享的链接发起砍价活动，转发朋友圈或直接发给好友，获取好友助力，每位好友可针对该活动砍价一次。</div>
      <div class="pingdan-rule-alert-item">2. 用户在砍价过程中，可以随时购买。</div>
      <div class="pingdan-rule-alert-item">3. 当用户砍到最底价时，不能再继续砍价。</div>
      <div class="pingdan-rule-alert-item">4. 商品数量有限，砍价成功之后请及时下单购买。 </div>
      <div class="text-center pingdan-rule-alert-title" style="color: #f5a828;">退款须知</div>
      <div class="pingdan-rule-alert-item">1. 用户发起退款之后，店长确认退款之后，款项直接原路返回。</div>
      <div class="pingdan-rule-alert-item">2. 用户收到货七天之后，不可再发起退款。 </div>
    </div>
    <div class="js_close kandan-rule-alert-btn color-zby">关闭</div>
  </div>
  <!--消费者和推广员砍价规则弹窗end-->
</template>

<script>
export default {
  name: 'KanDanRule',
  data () {
    return {
      msg: 'this is KanDanRule'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
