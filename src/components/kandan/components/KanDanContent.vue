<template>
  <!--砍单内容-->
  <div class="kandan-wrap KanDanContent">
    <!--到底价了-->
    <img class="kandan-wrap-gzIcon" src="../../../assets/images/kandan_iconLowest.png" alt="">
    <!--购买成功-->
    <!--<img class="kandan-wrap-gzIcon" src="../../assets/images/kandan_iconSuccess.png" alt="">-->
    <div class="flex-row kandan-wrap-price-wrap">
      <div class="flex-data kandan-wrap-price-past">原价：￥120862</div>
      <div class="flex-row">砍至最低：
        <div class="kandan-wrap-unit">￥<span class="kandan-wrap-price-low">120862</span></div>
      </div>
    </div>
    <div class="kandan-wrap-progress comafter">
      <div class="progress">
        <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
             aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
          <span class="sr-only">80% Complete (danger)</span>
        </div>
        <div class="kandan-progress-icon" style="width: 50%">
          <img src="../../../assets/images/icon_axs.png" alt="">
        </div>
      </div>
      <div class="flex-row">
        <div class="flex-data">7人砍价￥1500.21</div>
        <div>仅剩库存<span class="color-zby">0</span>件</div>
      </div>
      <div class="flex-row kandan-wrap-btns">
        <div class="kandan-wrap-btn" onclick="kd_cut(this)">帮Ta砍一刀</div>
        <div class="kandan-wrap-btn disabled" style="display: none">不能再砍了</div>
        <a href="#" class="kandan-wrap-btn disabled kandan-wrap-mybtn">我也想砍价</a>
      </div>
    </div>
    <div class="flex-row" >
      <div class="flex-column kandan-wrap-icon-name">
        <div class="kandan-wrap-icon flex-row"><img class="img-responsive" src="../../../assets/images/groudCard-shareBg.png"
                                                    alt=""></div>
        <div class="name">小骨小骨</div>
      </div>
      <div class="kandan-wrap-img">
        <!--<img class="img-responsive" src="../../assets/images/kandan-img001.png" alt="">-->
        <div class="kandan-wrap-ask">我很喜欢这个商品，帮我砍一下价</div>
      </div>
    </div>
  </div>
  <!--砍单内容end-->
</template>

<script>
export default {
  name: 'KanDanContent',
  data() {
    return {
      msg: 'this is index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
