<template>
  <!--不能再次帮砍了-->
  <div class="js_hide_com js_kandan_alert01 kandan-alert-wrap CantHelpKanDan" style="display: none">
    <div class="flex-row kandan-alert-close">
      <img onclick="cancelAlert()" :src="childMsg + kandanCloseImg" alt="">
    </div>
    <div class="kandan-alert">
      <div class="kandan-alert-img01"><img :src="childMsg + cantHelpKandanImg" alt=""></div>
      <div class="kandan-alert-text">您已经帮砍一次，不能再次帮砍了！</div>
      <a class="kandan-alert-btn" href="#">我也想砍价</a>
    </div>
  </div>
  <!--不能再次帮砍了end-->
</template>

<script>
export default {
  name: 'CantHelpKanDan',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is index',
      cantHelpKandanImg : "/images/kandan_alert001.png",
      kandanCloseImg : "/images/kandan_close.png"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
