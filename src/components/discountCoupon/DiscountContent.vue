<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->

<script>
	//css引入
  import '../../assets/css/discount.css';

	  export default {
        name: 'kandan',
        data() {
            return {
                msg: 'this is FreeApliy',
                note: {
                  backgroundImage: "url(" + require("../../assets/images/retail-goodsDetails-img004.png") + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  marginTop: "5px",
                }
            }
        },
      mounted : function () {
          /*吸顶效果*/
          var store_tap = document.getElementById("searchFixed");
          var store_tap_height = store_tap.offsetTop;
          $(window).scroll(function(e){
              var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
              if(scrollTop>=store_tap_height){
                  $(store_tap).addClass("fixed");
      //                $(".store-kong").show();
                  if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')
                  {
                     $(store_tap).css("position", "static");
      //                    $(".store-kong").hide();
                  };
                }else {
                    $(store_tap).removeClass("fixed");
      //                $(".store-kong").hide();
                }
            })
      }

	  }
</script>


<template>
  <div id="discountContent">
    <div class="discount-nav">
      限时抢购：以下商品可使用满 <i class="discount-full-money">300</i>减 <i class="discount-reduce-money">30</i>的优惠券
    </div>
    <div id='searchFixed' class="discount-search-wrap">
      <div class="discount-search-input">
        <input class="discount-search" type="text" >
        <img class="discount-search-img" src="../../assets/images/discount_search.png" alt="">
      </div>
      <span class="fenglei-wrap">
                <img class="icon-fenglei" src="../../assets/images/icon_fenglei.png" alt="">
                <div class="fenglei-text">分类</div>
            </span>
    </div>
    <div class="discount-tab">
      <span class="discount-tab1 discount-tab1-active">综合</span>
      <span class="discount-tab1">单价 <img class="up-down-assass" src="../../assets/images/up_down_assass.png" alt=""></span>
    </div>

    <div id="wrapper">
      <div class="scroller">
        <ul class="discount-shop-list-wrap" style="display: block">
          <li class="discount-shop-list">
            <span class="discount-shop-list-img discount-shop-list-first" :style="note"></span>
            <span class="discount-shop-list-right discount-list-right-padding">
                           <div class="discount-shop-list-content">卡西欧男士手表天狼系列太阳能蓝宝石钻石婚戒限量发售</div>
                           <div><span class="discount-shop-active">砍价</span><span class="discount-shop-active discount-shop-active-reduce">优惠券</span></div>
                           <div class="discount-shop-price-wrap">
                               ￥<span class="discount-shop-price">9000</span><span class="discount-shop-old-price">￥9900</span>
                               <span class="discount-shop-style">!</span><span class="discount-style">限款式</span>
                           </div>
                           <img class="discount-pass-already-pass" src="../../assets/images/already_sell_all.png" alt="">
                       </span>
          </li>
          <li class="discount-shop-list">
            <span class="discount-shop-list-img discount-shop-list-first" :style="note"></span>
            <!--<img class= src="../../assets/images/retail-goodsDetails-img004.png" alt="">-->
                       </span>
            <span class="discount-shop-list-right discount-list-right-padding">
                           <div class="discount-shop-list-content">卡西欧男士手表天狼系列太阳能蓝宝石钻石婚戒限量发售</div>
                           <div><span class="discount-shop-active">砍价</span><span class="discount-shop-active discount-shop-active-reduce">优惠券</span></div>
                           <div class="discount-shop-price-wrap">
                               ￥<span class="discount-shop-price">9000</span><span class="discount-shop-old-price">￥9900</span>
                               <span class="discount-shop-style">!</span><span class="discount-style">限款式</span>
                           </div>
                       </span>
          </li>
          <li class="discount-shop-list">
            <span class="discount-shop-list-img discount-shop-list-first" :style="note"></span>

            <!--<img class= src="../../assets/images/retail-goodsDetails-img004.png" alt="">-->
                       </span>
            <span class="discount-shop-list-right discount-list-right-padding ">
                           <div class="discount-shop-list-content">卡西欧男士手表天狼系列太阳能蓝宝石钻石婚戒限量发售</div>
                           <div><span class="discount-shop-active">砍价</span><span class="discount-shop-active discount-shop-active-reduce">优惠券</span></div>
                           <div class="discount-shop-price-wrap">
                               ￥<span class="discount-shop-price">9000</span><span class="discount-shop-old-price">￥9900</span>
                               <span class="discount-shop-style">!</span><span class="discount-style">限款式</span>
                           </div>
                       </span>
          </li>
          <li class="discount-shop-list">
            <span class="discount-shop-list-img discount-shop-list-first" :style="note"></span>

            <!--<img class= src="../../assets/images/retail-goodsDetails-img004.png" alt="">-->
                       </span>
            <span class="discount-shop-list-right discount-list-right-padding ">
                           <div class="discount-shop-list-content">卡西欧男士手表天狼系列太阳能蓝宝石钻石婚戒限量发售</div>
                           <div><span class="discount-shop-active">砍价</span><span class="discount-shop-active discount-shop-active-reduce">优惠券</span></div>
                           <div class="discount-shop-price-wrap">
                               ￥<span class="discount-shop-price">9000</span><span class="discount-shop-old-price">￥9900</span>
                               <span class="discount-shop-style">!</span><span class="discount-style">限款式</span>
                           </div>
                       </span>
          </li>
          <li class="discount-shop-list">
            <span class="discount-shop-list-img discount-shop-list-first" :style="note"></span>

            <!--<img class= src="../../assets/images/retail-goodsDetails-img004.png" alt="">-->
                       </span>
            <span class="discount-shop-list-right discount-list-right-padding ">
                           <div class="discount-shop-list-content">卡西欧男士手表天狼系列太阳能蓝宝石钻石婚戒限量发售</div>
                           <div><span class="discount-shop-active">砍价</span><span class="discount-shop-active discount-shop-active-reduce">优惠券</span></div>
                           <div class="discount-shop-price-wrap">
                               ￥<span class="discount-shop-price">9000</span><span class="discount-shop-old-price">￥9900</span>
                               <span class="discount-shop-style">!</span><span class="discount-style">限款式</span>
                           </div>
                       </span>
          </li>
          <!--<div class="discount-loading-more">点击加载更多</div>
          <div class="discount-loading-more">没有啦</div>-->
        </ul>
        <div class="more"><i class="pull_icon"></i><span>上拉加载...</span></div>
      </div>
    </div>

    <div class="inter-shop-wrap" style="display: none">
      <img class="coin-shangcheng" src="../../assets/images/icon_redshangcheng.png" alt="">
      进入商城
    </div>
    <!--没有商品-->
    <div class="noshop-wrap" style="display: none">
      <div class="noshop-img-wrap" >
        <img class="noshop-img" src="../../assets/images/discount_img.png"/>
        <div class="noshop-text">暂无适用的商品，如有疑问请咨询客服</div>
      </div>
    </div>
    <div style="display: block;">
      <div class="inter-shop-wrap shop-wrap">
        <div class="custorm">
          <img class="coin-shangcheng" src="../../assets/images/icon_kefu1.png" alt="">
          客服
          <span class="custorm-line"></span>
        </div>
        <div class="shop-store">
          <img class="coin-shangcheng" src="../../assets/images/icon_shangcheng.png" alt="">
          商城
        </div>
      </div>
    </div>

  </div>

</template>
