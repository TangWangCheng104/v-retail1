<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->

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
      <div class="store-wrap discount-shoper-wrap discount-details-wrap">
        <div class="discount-used-wrap" style="display:block;">
          <div class="dicount-kong-line1"></div>
          <div class="has-discount-left">
            <div class="not-get">
              <img class="discount-not-get" src="../../assets/images/discount_no_get1.png" alt="">
              <span class="discount-money-wrap">
                      <span class="discount-money">￥</span>
                      <span class="discount-price">900</span>
                  </span>
              <span class="full-money-reduce">满100000可减</span>
            </div>
            <div class="has-discount-right">
              <div class="discount-name"><span class="full-reduce">满减券</span><span class="use-range">指定商品可用</span></div>
              <div class="discount-effect discount-effect-position">
                <span>2017.9.30</span><span class="discount-time-min">15:21</span>至<span>2017.7.30</span><span class="discount-time-min">17:31</span>
                <img class="discount-right discount-right-position" src="../../assets/images/discount_right.png" alt="">
              </div>
              <div class="check-discount-wrap">
                <a class="check-discount" href="javascript:;"><img class="shape-code" src="../../assets/images/shape_code.png" alt=""></a>
              </div>
              <img class="already-pass no-effective" src="../../assets/images/no_effective.png" alt="">
            </div>
          </div>
          <div class="mystery-friend-send-wrap discount-name-header">
            <div class="discount-top-send-right discount-sb-name">
              <div class="discount-languges discount-send-name-wrap">
                          <span>
                              <img class="discount-top-img discount-sb-send" src="../../assets/images/retail-goodsDetails-img004.png" />
                              <span class="discount-send-name">浪子书浪子书</span><span class="discount-send-text">赠送</span>
                          </span>
                <span class="discount-bigger-right">
                              <span class="discount-bigger" onclick="bigger()">放大编号</span>
                              <span class="discount-bigger disabled-send-friend">转赠好友</span>
                              <span class="discount-bigger disabled-send-friend">立即使用</span>
                          </span>

              </div>
            </div>
          </div>
        </div>
        <div>
          <img class="discount-details-rule" src="../../assets/images/discount_details_rule.png" alt="">
        </div>
        <div class="warn-message-wrap">
          <div class="warn-message">【注意事项】</div>
          <div >1. 如无特殊说明，所有赠品的赠送数量均为1件（计件商品）或1克（计重商品）。</div>
          <div>2. 本优惠券的最终解释权归XXXX店所有。</div>
          <div class="warn-message">【适用范围】</div>
          <div >仅限指定商品，<a href="javascript:;">查看商品</a></div>
          <div class="warn-message">【不适用范围】</div>
          <div >黄金类不可用。</div>
          <div class="warn-message">【使用条件】</div>
          <div >仅限到店领取。</div>
          <div class="warn-message">【所属门店】</div>
          <div class="mystery-friend-send-wrap discount-name-header discount-use-range">
                  <span class="discount-top-img discount-sb-send " :style="note">
                  </span>
            <div class="discount-top-send-right discount-sb-name">
              <div class="discount-languges discount-send-name-wrap">
                <span class="discount-shop-name1">浪子书浪子书</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mystery-friend-send-wrap discount-name-header discount-effected">
              <span class="discount-top-img discount-sb-send discount-effected-hide" :style="note">
              </span>
          <div class="discount-top-send-right discount-sb-name">
            <div class="discount-languges discount-send-name-wrap">
              <span class="discount-send-name discount-effected-hide">浪子书浪子书</span><span class="discount-send-text discount-effected-hide">赠送</span>
              <span class="discount-bigger " onclick="bigger()">放大编号</span>
              <span class="discount-bigger">转赠好友</span>
              <span class="discount-bigger discount-bigger-active">立即使用</span>
            </div>
          </div>
        </div>
      </div>
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
