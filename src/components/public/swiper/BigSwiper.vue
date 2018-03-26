<template id="retailBigSwiper">
  <div class="black bigSwiper">
    <div class="black-banner-wrap">
      <div id="carousel-bigimg-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators comafter">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active">1/<span
            class="num">3</span></li>
          <li data-target="#carousel-example-generic" data-slide-to="1">2/<span class="num">3</span></li>
          <li data-target="#carousel-example-generic" data-slide-to="2">3/<span class="num">3</span></li>
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner carousel-black" role="listbox">
          <div v-for="(value,key) in img" class="item active" v-bind:class="{active : !key}">
            <img class="img-responsive" id="banner001" :src="childMsg + value" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<script src="../../../assets/js/jquery.validate.min.js" type="text/javascript"></script>
<script src="../../../assets/js/messages.js"></script>
<script src="../../../assets/js/hammer.min.js"></script>
<script src="../../../assets/js/jquery.hammer.js"></script>-->

<script>
  export default {
  template: '#retailBigSwiper',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is retailBigSwiper',
      img:[ "/images/banner01.png", "/images/banner02.png", "/images/banner01.png"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

