<template>
  <!--购买收藏弹窗-->
  <div class="v-freeApliy">
    <div class="container-fluid padding-0px">
	    <div class="freeApliy-text">填写申请表单后，工作人员将会联系您，帮您制作活动哦</div>
	    <div><img class="img-responsive" src="../../assets/images/freeApliy_Bg.png" alt=""></div>
	    <div class="freeApliy">
	        <div class="freeApliy-title">填写表单后，工作人员将会联系您，免费帮您制作活动哦</div>
	        <div class="retail-comverify">
	            <input type="text" name="phone" id="name" aria-invalid="true" @keyup="input_verify($event)" @blur="input_verify($event)" class="js_input freeApliy-phone" placeholder="您的称呼" value="">
	            <label class="js_error error" for="name" style="display: none" >请填写您的称呼</label>
	        </div>
	        <div class="retail-comverify">
	            <input type="tel" name="phone" id="phone" aria-invalid="true" @keyup="phone_verify($event)" class="js_input js_phone freeApliy-phone" placeholder="手机号码" value="">
	            <label class="js_phoneError js_error error" for="phone" style="display: none">请填写11位正确的手机号</label>
	        </div>
	        <div class="retail-comverify flex-row">
	            <input type="tel" name="phone" id="verify" aria-invalid="true" @keyup="verify_code($event)" @blur="verify_code($event)" class="js_input freeApliy-phone" placeholder="验证码" value="">
	            <div class="freeApliy-verify-btn"><input type="button" class="js_getVerify" value="获取验证码"></div>
	            <label class="js_error error" for="verify" style="display: none">验证码错误或过期，请重新获取。</label>
	        </div>
	        <div class="retail-comverify">
	            <input type="text" name="phone" id="address" aria-invalid="true" @keyup="input_verify($event)" @blur="input_verify($event)" class="js_input freeApliy-phone" placeholder="所在省市" value="">
	            <label class="js_error error" for="address" style="display: none">请填写所在省市</label>
	        </div>
	        <div class="retail-comverify">
	            <input type="text" name="phone" id="sorts" aria-invalid="true" @keyup="input_verify($event)" @blur="input_verify($event)" class="js_input freeApliy-phone" placeholder="经营类品" value="">
	            <label class="js_error error" for="sorts" style="display: none">请填写您的经营类品</label>
	        </div>
	        <div class="js_freeApliyBtn freeApliy-btn">申请免费试用</div>
	    </div>
	</div>
	<div id="com_black" class="js_com_black hide_com_buy js_hide_com com_black" style="display: block"></div>
	<div class="js_hide_com js_freeApliy-alert freeApliy-alert" style="display: none">
	    <div class="freeApliy-alert-msg">
	        <div>申请成功</div>
	        <div>请等待工作人员与您联系</div>
	    </div>
	    <a href="http://www.zhubaoyi.cn/static/zh/app.html" class="freeApliy-alert-btn">先下载APP</a>
	</div>
	<!--免费申请试用弹框-->
	<!--成功砍掉金额-->
	<div class="js_hide_com js_kandan_alert02 kandan-alert-wrap freeApliy-alert-wrap" style="display: block">
	    <div class="kandan-alert">
	        <p class="freeApliy-shop-text">
	            <img class="serial-number1" src="../../assets/images/serial_number1.png" alt="" />我是<span class="freeApliy-shop">商家</span>,填写表单后，可免费制作活动哦～
	        </p>
	        <p  class="freeApliy-user-text">
	            <img class="serial-number1" src="../../assets/images/serial_number2.png" alt="" />我是<span class="freeApliy-user">用户</span>,不用填写表单啦～
	        </p>
	        <p onclick="cancelAlert()" class="free-I-get-it">我知道了</p>
	    </div>
	</div>
	<!--成功砍掉金额end-->
  </div>
  <!--购买收藏弹窗end-->
</template>

<script>
export default {
  name: 'BuyCollect',
  data () {
    return {
      msg: 'this is index',
      urlHead:"http://www.wangwang8888.com/images",
    }
  },
  methods : {
  	testbtn(){
  		var $errormsg
        $errormsg = 0;
        var $input = $(".js_input");
        for (var i = 0; i < $input.length; i++) {
            if ($input.eq(i).attr("aria-invalid") == 'true') {
                $errormsg = 1;
                break;
            }
        }
        if (!$errormsg) {
//                $(".js_freeApliyBtn").removeClass("disabled");
            $(".js_freeApliyBtn").removeAttr("disabled");
//                $(".js_password_alert").fadeIn(500);
//                var t = setTimeout(function () {
//                    $(".js_password_alert").fadeOut(800);
//                }, 800);
        } else {
//                $(".js_freeApliyBtn").addClass("disabled");
            $(".js_freeApliyBtn").attr("disabled",true);
        }
 },
//  /*判断输入是否为合法的手机号码*/
    isphone2(inputString){
        var partten = /^1[3,5,8]\d{9}$/;
        var fl=false;
        if(partten.test(inputString))
        {
            //alert('是手机号码');
            return true;
        }
        else
        {
            return false;
            //alert('不是手机号码');
        }
    },

    //倒计时
//  var wait = 60;
    time(t) {
        if (wait == 0) {
            t.removeAttribute("disabled");
            t.value = "获取验证码";
            $(".js_getVerify").removeClass("disabled");
            wait = 60;
        } else {
            t.setAttribute("disabled", true);
            t.value = "重新获取(" + wait + ")";
            $(".js_getVerify") .addClass("disabled");
            wait--;
            setTimeout(function () {
                time(t)
            }, 1000)
        }
    },

    //手机验证
    phone_verify(e){
    		var obj = e.target;
        var v = $(obj).val();
        var len = v.length;
        $(".js_phoneError").hide();
        if(len>11){
            v = v.substr(0,11);
            $(obj).val(v);
            len = v.length;
        }else if(len==11){
            $(obj).attr("aria-invalid", "false");
            $(".js_phoneError").text("");
        }else{
            $(obj).attr("aria-invalid", "true");
            $(".js_phoneError").text("请填写11位正确的手机号");
        }
    },
    //验证码验证
    verify_code(e) {
    		var obj = e.target;
        var v = $(obj).val();
        var len = $("#verify").val().length;
        len = parseInt(len);
        if(len>6){
            v = v.substr(0,6);
            $(obj).val(v);
            len = v.length;
        }else if (len < 6) {
            $(obj).attr("aria-invalid", "true");
            $(obj).parent().find(".error").text("验证码为6位");
//                $("#verify").parent().find(".error").text("验证码不正确");
        }else {
            $(obj).attr("aria-invalid", "false");
            $(obj).parent().find(".error").text("");
        }
    },

    //input不能为空判断
    input_verify(e){
    		var obj = e.target;
        var v = $(obj).val();
        var t = $(obj).attr("placeholder");
        console.log( obj )
        console.log( v.length )
        
        var len = v.length;
        if(len!=0){
            $(obj).parent().find(".error").text("");
            $(obj).attr("aria-invalid", "false");
        }else if(t=="您的称呼"){
            $(obj).attr("aria-invalid", "true");
            $(obj).parent().find(".error").text("请填写您的称呼");
        }else if(t=="所在省市"){
            $(obj).attr("aria-invalid", "true");
            $(obj).parent().find(".error").text("请填写所在省市");
        }else if(t=="经营类品"){
            $(obj).attr("aria-invalid", "true");
            $(obj).parent().find(".error").text("请填写您的经营类品");
        }
    }
  },
  mounted:function(){
  	console.log("enter")
	var $errormsg;
	var t;
    var obj;
    var screenW = window.outerWidth;
    var comH = $(".js_height").css("height");
    comH = parseInt(comH);
    comH = (comH/375)*screenW;
    //点击获取验证码判断：手机号码格式是否正确/是否已申请过/是否是合伙人
    $(".js_getVerify").click(function(){
        var v = $(".js_phone").val();
        var len = v.length;
        $(".js_phoneError").show();
        if(len==11){
            $(".js_phoneError").text("");
            $(obj).attr("aria-invalid", "false");
            $(".js_phoneError").hide();
            $(".js_getVerify") .addClass("disabled");
            time(this);
        }else {
            $(".js_phoneError").text("请填写11位正确的手机号");
            $(obj).attr("aria-invalid", "true");
            $(".js_phoneError").show();
            $(".js_getVerify").removeClass("disabled");
        }
    });
    $(".js_freeApliyBtn").click(function(){
        testbtn();
//                alert($errormsg);
        $(".js_error").show();
        if(!$errormsg){
            $(".js_com_black").show();
            $(".js_freeApliy-alert").show();
            var t=setTimeout(function(){
                window.location.href="http://www.zhubaoyi.cn/static/zh/app.html";
            },3000);
//                    window.location.href="http://www.zhubaoyi.cn/static/zh/app.html";//所有信息正确后跳转
        }
    });
    
    /*关闭商家或者用户登录的蒙版*/
    canceAlertSelf();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
