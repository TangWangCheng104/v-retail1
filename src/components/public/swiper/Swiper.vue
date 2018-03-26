<template id="iswiper">
  <div class="oswipter">
    <div class="mybanner banner" id="banner">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <i class="icon_pingdan"><img class="img-responsive" :src="childMsg1 + kandanBannerImg" alt=""></i>
        <!-- Indicators -->
        <ol class="carousel-indicators comafter">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active">1/<span
            class="num">3</span></li>
          <li data-target="#carousel-example-generic" data-slide-to="1">2/<span class="num">3</span></li>
          <li data-target="#carousel-example-generic" data-slide-to="2">3/<span class="num">3</span></li>
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner carousel-banner" style="height: 375px;" role="listbox">
          <div v-for="(value,key) in img" :key="key" class="item" v-bind:class = "{active : !key }">
            <img v-bind:id="{ banner02 : { key : 1 } ,banner03 : { key : 2 } }"  class="img-responsive" id="banner01" :src="childMsg1 + value" alt="">
          </div>
          <!--<div class="item">
            <img id="banner02" src="http://www.wangwang8888.com/images/images/banner02.png" alt="">
          </div>
          <div class="item">
            <img id="banner03" src="http://www.wangwang8888.com/images/images/banner01.png" alt="">
          </div>-->
        </div>
        <!--帮我砍单的人-->
        <v-Marquee :childMsg = "childMsg1"></v-Marquee>

        <!--帮我砍单的人end-->
      </div>
    </div>
  </div>
</template>
<script src="../../../assets/js/jquery.validate.min.js" type="text/javascript"></script>
<script src="../../../assets/js/messages.js"></script>
<script src="../../../assets/js/hammer.min.js"></script>
<script src="../../../assets/js/jquery.hammer.js"></script>

<script>
  /*滚动的帮砍单的人*/
  import Marquee from '../marquee/Marquee.vue';
  import axios from "axios";
  import Vue from 'vue'
  import store from '../../../vuex/store.js'
  export default {
  store,
  template: '#iswiper',
  props:['childMsg'],
  data () {
      return {
        msg: 'this is iswiper',
        childMsg1:this.childMsg.urlHead,
//      img:this.childMsg.mysqlMsg,
        img:store.state.smysqlMsg,
        kandanBannerImg:"/images/icon_kandan.png"
    }
  },
  components:{
    "v-Marquee":Marquee
  },
  mounted:function(){
    // this.$refs.childMsg.getSrcList();
    console.log( this.img )
  },
  method:{
    
  },
  watch:{
     srcList(curVal,oldVal){
      if(curVal){
       this.img=curVal;
      console.log(curVal)
       }
     },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

