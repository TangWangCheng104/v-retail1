<template>
  <!--亲友团-->
  <div class="kandan-friends-wrap">
    <div class="kandan-friends-wrap-titile flex-row">
      <div class="flex-data">亲友团</div>
      <div class="flex-data text-right">砍掉价格</div>
      <div class="w40 text-right">砍后价格</div>
    </div>
    <div class="js_kdFriends_info kandan-friends-wrap-info">
      <div class="js_friends_item kandan-friends-wrap-titile kandan-friends-wrap-body flex-row">
        <div class=" js_kandan_friends">小骨小骨sss</div>
        <div class="flex-data text-right">650.25元</div>
        <div class="w40 text-right">650.25元</div>
      </div>
      <div class="js_friends_item kandan-friends-wrap-titile kandan-friends-wrap-body flex-row">
        <div class="js_kandan_friends">小骨小骨小历小骨小骨小历小骨</div>
        <div class="flex-data text-right">65025.25元</div>
        <div class="w40 text-right">650.25元</div>
      </div>
      <div class="js_friends_item kandan-friends-wrap-titile kandan-friends-wrap-body flex-row">
        <div class="js_kandan_friends">小骨小历小骨</div>
        <div class="flex-data text-right">650.25元</div>
        <div class="w40 text-right">650.25元</div>
      </div>
      <div class="js_friends_item kandan-friends-wrap-titile kandan-friends-wrap-body flex-row">
        <div class="js_kandan_friends">小骨d</div>
        <div class="flex-data text-right">65025.25元</div>
        <div class="w40 text-right">650.25元</div>
      </div>
    </div>
    <div class="flex-row kandan-friends-wrap-btn">
                      <span class="js_more mybtn col-xs-6 text-center first" style="border: none">查看更多 <img
                        src="../../../assets/images/twoDown_jiantou.png" alt=""></span>
      <span class="js_hideAll mybtn col-xs-6 text-center" style="display: none">收起全部 <img
        src="../../../assets/images/twoUp_jiantou.png" alt=""></span>
    </div>
    <!--浏览记录-->
    <v-BrowsingHistory></v-BrowsingHistory>
    <!--暂无亲友团-->
    <div style="display: none">
      <img class="img-responsive" src="../../../assets/images/img_nofriends.png" alt="">
    </div>
    <!--暂无亲友团end-->
  </div>
  <!--亲友团end-->
</template>

<script>
  /*浏览记录*/
  import BrowsingHistory from '../../public/browsingHistory/BrowsingHistory.vue';


export default {
  name: 'RelativeFriends',
  data() {
    return {
      msg: 'this is RelativeFriends'
    }
  },
  components:{
    'v-BrowsingHistory':BrowsingHistory
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
