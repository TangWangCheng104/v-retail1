<template>
	<div class="newYearActive">
		<header>
	        <nav class="new-index-nav font-size0">
	            <!--音乐开关和音乐-->
	            <img class="new-open-music" v-show="newOpenMusic" @click="newOpenMusicFn" :src="newOpenMusicImg" alt="">
	            <img class="new-close-music" v-show="!newOpenMusic" @click="newCloseMusicFn" :src="newCloseMusicImg" alt="">
	            <!--头部图-->
	            <img class="new-year-banner-img" :src="newYearActiveBanner" alt="">
	            <!--店铺名字和图-->
	            <div class="new-shop-name-img-warp font-size0 new-shop-name-warp-change">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_shopname_activetime.png" alt="">
	                <span class="new-year-shopName-change">我的店铺</span>
	            </div>
	        </nav>
	    </header>
	    <article class="font-size0">
	        <!--<a href="javascript:;">
	            <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_02.png" alt="">
	        </a>-->
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_03.png" alt="">
	            </a>
	        </div>
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_04.png" alt="">
	            </a>
	        </div>
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_05.png" alt="">
	            </a>
	        </div>
	        <!--拼单聚福气-->
	        <a href="javascript:;">
	            <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_07.png" alt="">
	        </a>
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all new-sale-all-pingdan" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_08.png" alt="">
	            </a>
	        </div>
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all new-sale-all-pingdan" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_09.png" alt="">
	            </a>
	        </div>
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all new-sale-all-pingdan" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_10.png" alt="">
	            </a>
	        </div>
	        <div class="new-year-shopName-img-wrap">
	            <!--已经售完的图-->
	            <img class="new-year-sale-all new-sale-all-pingdan" src="../../assets/images/new_year_sale_all.png" alt="">
	            <!--商品详情图-->
	            <a href="javascript:;">
	                <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_11.png" alt="">
	            </a>
	        </div>
	        <!--秒杀活动-->
	        <a href="javascript:;">
	            <img class="new-year-shopName-img" src="../../assets/images/new_year_active_index_12.png" alt="">
	        </a>
	        <!--一张图的形式-->
	        <div class="new-second-kill-four-wrap">
	            <a class="new-second-kill-four-a" href="#">
	                <img class="new-second-kill-four-img" src="../../assets/images/new_year_active_index_13.png" alt="">
	                <!--已售完-->
	                <img class="new-year-sale-all-change1" src="../../assets/images/new_year_sale_all.png" alt="">
	                <img class="new-year-sale-all-change2" src="../../assets/images/new_year_sale_all.png" alt="">
	                <img class="new-year-sale-all-change3" src="../../assets/images/new_year_sale_all.png" alt="">
	                <img class="new-year-sale-all-change4" src="../../assets/images/new_year_sale_all.png" alt="">
	            </a>
	        </div>
	    </article>
	    <footer class="font-size0">
	        <img class="new-year-footer-wenli" src='../../assets/images/new_year_footer_wenli.png' alt="">
	    </footer>
	</div>
</template>
<script src="../../assets/js/jweixin-1.0.0.js"></script>
<script>
	import "../../assets/css/newYear.css";

	export default{
		name:"NewYearActive",
		data() {
        return {
          msg : "this is newYearActiveIndex",
          newOpenMusic:true,
          newOpenMusicImg:"http://www.wangwang8888.com/images/images/new_year_openMusic.png",
          newCloseMusicImg:"http://www.wangwang8888.com/images/images/new_year_closeMusic.png",
          newYearActiveBanner:"http://www.wangwang8888.com/images/images/new_year_banner.png",
          newYearActiveBanner:"http://www.wangwang8888.com/images/images/new_year_banner.png",
          newYearActiveBanner:"http://www.wangwang8888.com/images/images/new_year_banner.png",
          newYearActiveBanner:"http://www.wangwang8888.com/images/images/new_year_banner.png",
          newYearActiveBanner:"http://www.wangwang8888.com/images/images/new_year_banner.png",
          newYearActiveBanner:"http://www.wangwang8888.com/images/images/new_year_banner.png",

        }
		},
    methods : {
      newCloseMusicFn : function () {
        var oaudio = document.getElementsByTagName("audio")[0];
        oaudio.play();
        this.newOpenMusic = !this.newOpenMusic
      },
      newOpenMusicFn : function () {
        var oaudio = document.getElementsByTagName("audio")[0];
        oaudio.pause();
        this.newOpenMusic = !this.newOpenMusic
      }
    },
    beforeMount : function () {

    },
		mounted : function(){
      var oaudio = document.createElement("audio");
      var onav = document.getElementsByClassName('new-index-nav')[0];
      var newOpenMusic = document.getElementsByClassName('new-open-music')[0];
      var newCloseMusic = document.getElementsByClassName('new-close-music')[0];

      oaudio.setAttribute("autoplay","autoplay") ;
      oaudio.setAttribute("loop","loop") ;
      oaudio.setAttribute("src","../../assets/medio/gongxifacai.mp3") ;
      oaudio.id = "audioGxfc";
      onav.appendChild( oaudio );

            function wxAutoPlayAudio(){
                wx.config({
                    debug:false,
                    appId:'',
                    timestamp:1,
                    nonceStr:'',
                    signature:'',
                    jsApiList:''
                })
                wx.ready(function(){
                    oaudio.play();
                })
            }
//            wxAutoPlayAudio();
		}

	}
</script>

<style>
  .newYearActive{
    background: #f01500;
  }
</style>
