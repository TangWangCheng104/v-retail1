<template>
  <!--购买收藏弹窗-->
  <div class="js_collect_alert collect_alert v-BuyCollect">
    <div class="text-center collect_alert_img">
      <img :src="childMsg + buyImg" alt="">
    </div>
    <p class="js_collect_text text-center">收藏成功</p>
  </div>
  <!--购买收藏弹窗end-->
</template>

<script>
export default {
  name: 'BuyCollect',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is index',
      buyImg : '/images/redStar.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
