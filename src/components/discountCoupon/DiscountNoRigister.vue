﻿<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->
<script src="../js/discount.js"></script>

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
        var screenH = window.innerHeight;
        var len = $(".js_banerBigImg img").length;
        for(var j=0;j<len;j++){
          var imgH = $(".js_banerBigImg img").eq(j).height();
          if(imgH>screenH){
            $(".js_banerBigImg img").eq(j).css({width:"auto",height:"100%"})
          }else {
            $(".js_banerBigImg img").eq(j).css({width:"100%",height:"auto"})
          }
        }
        //点击获取验证码判断：手机号码格式是否正确/是否已申请过/是否是合伙人
        $(".get-code-text").click(function(){
          if(!$(this).hasClass("get-code-again")){
            /*显示语言验证码*/
            time(this);
            $('.voice-code-text').show();
            var v = $(".register-phone-number").val();
            if(!isphone3(v)){
              discountSuccess();
              $(".discount-success").text("请输入正确的手机号码");
            }else if(v == "13265565717"){   //已经申请过且申请未被同意
              discountSuccess();
              $(".discount-success").text("你已经申请过了，请等待审核");
            }else if(v == "13265565716"){   //手机号对应的最高身份是推广人或员工
              /*$(".js_com_black").show();
               $(".js_storeP_alert").show();*/
            }else {
              if(v == "13265565715"){    //该用户已经是该店的推广人或者普通用户
                /*$("#js_newUser").hide();*/
                $("#js_newUser").find(".js_input").attr("aria-invalid","false");
              }else if(v == "13265565718"){ //该账户未存在，没有注册过
                /*$("#js_newUser").show();*/
                $("#js_newUser").find(".js_input").attr("aria-invalid","true");
              }
            }
          }
        });
        $(".click-to-get").click(function(){//!reg.test($("#password").val())
          if(!$(this).hasClass("disabled")){
            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;
            if($(".register-code").val()!="123456") {  //判断验证码不正确时
              $(".discount-success").text("验证码过期或错误，请重新获取");
              discountSuccess();
            }else if($(".register-phone-number").val()=="15811714179"){      //该用户已经是该店的老板
              /*$(".js_comBlack").show();
               $(".js_storeSelect_alert").show();*/
            }
          }
        });
      }

	  }
</script>


<template>
  <div id="discountNoRigister">
    <div class="discount-wrap">
      <div class="discount-top-wrap">
        <div class="discount-shop-name">
          <span class="discount-top-img" :style="note"></span>
          <span class="discount-top-name">传世金鱼珠宝店-田贝店</span>
          <span class="discount-goto-store">前往商城</span>
        </div>
      </div>
      <div>
        <!--今天的券都领完了-->
        <img class="discount-use-end" src="../../assets/images/discount_use_end.png" alt="" style="display:none;">
        <!--所有的券都领完了-->
        <img class="discount-use-end" src="../../assets/images/all_discount_use_end.png" alt="" style="display:none;">
      </div>
      <div class="discount-can-get">
        <!--今天还有2张券可以领取-->
        <span class=""><span class="kong-line"></span>您今天还可领<span class="discount-number">2</span>张<span class="kong-line"></span></span>
      </div>
      <div class="full-cut-coupons-wrap">
        <div class="full-cut-coupons" >
          <img class="full-cut-coupons-img" src="../../assets/images/full_cut_coupons.png" alt="">
          <div class="full-reduce-ticket"><span class="point"></span>满减券<span class="point"></span></div>
          <div class="full-reduce-ticket specific-shop-use">指定商品可用</div>
          <div class="full-cut-coupons-price">
            30
          </div>
          <div class="full-cut-coupons-condition">
            满¥<span>300</span>可减
          </div>
          <!--立即使用-->
          <a href="javascript:;" class="use-now">立即使用<img class="double-right-use-now" src="../../assets/images/right_assass.png" alt=""></a>
          <!--这是登录页面-->
          <div class="discount-register" style="display:block;">
            <div class="discount-rules-wrap">
              优惠细则<span class="assass-right"></span>
            </div>
            <input type="text" class="register-phone-number js_input" aria-invalid="true" onkeyup="phone_verify(this,'get-code-text','get-code-again')" value="13265565715" />
            <div>
              <input type="text" class="register-code js_input" aria-invalid="true" onkeyup="verify_code01(this,'register-code','click-to-get')" placeholder="输入验证码" value="123456">
              <input type="button" class="get-code-text" value="获取验证码" />
              <!--<input class="get-code-text get-code-again" value="重新获取(60s)" />-->
            </div>
            <div class="voice-code-text" style="display:none;">收不到短信？点击获取 <span class="voice-code">语音验证码</span></div>
            <div class="click-to-get">
              <span>点击领取&nbsp;&nbsp;买买买 <img class="right-assass" src="../../assets/images/right_assass.png" alt=""></span>
            </div>
          </div>
        </div>
        <!--优惠券抢光了，没有领到-->
        <div class="full-cut-coupons-wrap" style="display: none">
          <div class="full-cut-coupons" >
            <img class="full-cut-coupons-img" src="../../assets/images/full_cut_coupons.png" alt="">
            <div class="full-reduce-ticket"><span class="point"></span>满减券<span class="point"></span></div>
            <div class="full-reduce-ticket specific-shop-use">指定商品可用</div>
            <div class="full-cut-coupons-price">
              3500
            </div>
            <div class="full-cut-coupons-condition">
              满¥<span>300</span>可减
            </div>
            <!--领取更多优惠-->
            <a href="javascript:;" class="use-now" style="display:none;">领取更多优惠<img class="double-right-use-now" src="../../assets/images/right_assass.png" alt=""></a>
            <!--点击领取，买买买-->
            <a href="javascript:;" class="use-now" style="display:block;">点击领取，买买买<img class="double-right-use-now" src="../../assets/images/right_assass.png" alt=""></a>
          </div>
        </div>
        <!--优惠券过期-->
        <div class="full-cut-coupons-wrap" style="display: none">
          <div class="full-cut-coupons" >
            <img class="full-cut-coupons-img" src="../../assets/images/pass_data.png" alt="">
          </div>
        </div>
        <!--优惠券下面部分-->
        <div class="check-my-discount-wrap" style="display:block;">
          <div class="check-my-discount">查看我的优惠券 <img class="double-right-assass" src="../../assets/images/double_right_assass.png" alt=""></div>
          <div class="discount-rules-wrap">
            <span class="discount-rules">优惠细则</span>
          </div>
        </div>
        <div class="check-my-discount">查看我的优惠券 <img class="double-right-assass" src="../../assets/images/double_right_assass.png" alt=""></div>
      </div>
      <!--验证码的弹出框-->
      <span class="discount-success" style="display: none">
        验证码过期或错误
    </span>

  </div>
</div>
</template>
<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  .discount-wrap{
    background: url('../../assets/images/discount_bg.png') no-repeat center center/cover;
    height: 100%;
    width: 100%;
  }
</style>
