<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->
<script src="../../assets/js/discount.js"></script>

<script>
	//css引入
  import '../../assets/css/store-index.css';
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
        sendOther();
        $('.discount-send-reason-warp').on('click',".discount-send-reason",function () {
          alert(1)
          $(this).addClass('discount-send-reason-active').siblings().removeClass('discount-send-reason-active');
          $(this).find('.discount-red-right').show().parent().parent().siblings().find('.discount-red-right').hide();
          sendOther();
        })
      },
      method : {
        sendOther : function () {
          $('.js_com_black').fadeIn(300);
          $('.discount-share').fadeIn(300);
          $('html,body').addClass('overFlowHide');
        }
      }

	  }
</script>


<template>
  <div id="discountSendFreind">

    <div class="store-wrap discount-shoper-wrap discount-details-wrap">
      <div class="discount-used-wrap" style="display:block;">
        <div class="dicount-kong-line1"></div>
        <div class="has-discount-left has-discount-left-bgcolor">
          <div class="not-get">
            <img class="discount-not-get" src="../../assets/images/discount_no_get1.png" alt="">
            <span class="discount-money-wrap">
                    <span class="discount-money">￥</span>
                    <span class="discount-price">900</span>
                </span>
            <span class="full-money-reduce">满100000可减</span>
          </div>
          <div class="has-discount-right has-discount-margin">
            <div class="discount-name"><span class="full-reduce">满减券</span><span class="use-range">指定商品可用</span></div>
            <div class="discount-effect discount-effect-position">
              <span>2017.9.30</span><span class="discount-time-min">15:21</span>至<span>2017.7.30</span><span class="discount-time-min">17:31</span>
              <img class="discount-right discount-right-position" src="../../assets/images/discount_right.png" alt="">
            </div>
            <div class="check-discount-wrap">
              <a class="check-discount" href="javascript:;"><img class="shape-code" src="../../assets/images/shape_code.png" alt=""></a>
            </div>
          </div>
        </div>
        <!--<div class="mystery-friend-send-wrap discount-name-header">
            <span class="discount-top-img discount-sb-send " style="background: url('../../assets/images/retail-goodsDetails-img004.png') center center/cover">
            </span>
            <div class="discount-top-send-right discount-sb-name">
                <div class="discount-languges discount-send-name-wrap">
                    <span class="discount-send-name">浪子书浪子书</span><span class="discount-send-text">赠送</span>
                    <span class="discount-bigger" onclick="bigger()">放大编号</span>
                    <span class="discount-bigger">转赠好友</span>
                    <span class="discount-bigger">立即使用</span>
                </div>
            </div>
        </div>-->
      </div>
      <div>
        <img class="discount-details-rule bg-duitashuo-nor" src="../../assets/images/bg_duitashuo_nor@3x.png" alt="">
      </div>
      <ul class="discount-send-reason-warp">
        <li class="discount-send-reason">你侬我侬，上辈子我们是嫦娥和她的小兔子<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason discount-send-reason-active">上次欠你的，这次还你了 <span><img  class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">就不信你不点开，内有彩蛋哦<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">情信送不成，就送这个吧，千言万语在其中<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">知道你急需这个，就送给你了<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">将军，收好，告辞！<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">求了一支关于我们的签，他还给了我这个<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">将军，收好，告辞！<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">将军，收好，告辞！<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">将军，收好，告辞！<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="discount-send-reason">将军，收好，告辞！<span><img style="display: none" class="discount-red-right" src="../../assets/images/discount_red_right.png" alt=""></span></li>
        <li class="preview-wrap"><span class="preview">预览</span></li>
      </ul>
    </div>
    <!--遮罩层-->
    <div id="com_black" class="js_com_black js-show js-hide-refund com_black refund-com-black" onclick="jsHide()" style="display:none"></div>
    <!--分享给好友-->
    <img class="discount-share js-hide-refund" onclick="jsHide()" style="display: none" src="../../assets/images/discount_share.png" alt="">
    <!--弹出框-->
    <div class="discount-bigger-wrap js-show js-hide-refund" style="display: none" onclick="jsHide()">
      <div class="discount-touxiang-wrap">
        <img class="discount-touxiang" src="../../assets/images/author_touxiang.png" alt="">
        <img class="discount-alert-shape-code" src="../../assets/images/shape_code.png" alt="">
        <span class="shape-code-number">1234&nbsp;&nbsp;1234&nbsp;&nbsp;1234&nbsp;&nbsp;1234&nbsp;&nbsp;12</span>
        <span class="use-show">使用时向服务员出示此会员卡</span>
      </div>
    </div>
  </div>

</template>
<style>
  html{
    font-size: 625%;
    background: #f5f5f5;
  }
  body{
    font-size: 14px;

  }
  .discount-details-wrap{
    padding-bottom:0;
  }
</style>
