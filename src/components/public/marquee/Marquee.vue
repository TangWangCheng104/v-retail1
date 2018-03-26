<template id="imarquee">
  <div class="omarquee">
    <!--帮我砍单的人-->
    <div class="kandan-friends">
      <div id="demo" class="kandan-friends-items">
        <div id="demo1">
          <div v-for="( item,key ) in KandanUsername" class="js_Text_item">
            <span class="js_text_item kandan-friends-item">
                <div class="flex-row">
                    <i class="kandan-friends-item-icon flex-row">
                      <img class="img-responsive" :src=" childMsg + item.url" alt=""></i>
                    <span class="js_kandan_username">{{item.name}}</span>刚刚砍了一下
                </div>
            </span>
          </div>
        </div>
        <div id="demo2">
        </div>
      </div>
      <div class="kangdan-goodsDetails-rule">
        <div class="kangdan-goodsDetails-rule-background"></div>
        <div class="kangdan-goodsDetails-rule-info flex-row">
          <div>
            剩余时间：
            <span id="js_time" class="js_timer">
                <span class="js_day_show">3</span>天<span class="js_hour_show">00</span>小时
                <span class="js_minute_show">00</span>分<span class="js_second_show">00</span>秒
            </span>
          </div>
          <div class="kandan-rule flex-data text-right">
            <div class="js_rule_btn">拼单规则</div>
          </div>
        </div>
      </div>
    </div>
    <!--帮我砍单的人end-->
  </div>
</template>
<script>
  export default {
  template: '#imarquee',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is imarquee',
      KandanUsername : [{name:'xiaoguaaaa',url:"/images/icon_message.png"},{name:'xiaogubbbb',url:"/images/icon_message.png"},{name:'xiaogucccc',url:"/images/icon_message.png"}]
    }
  },
    mounted : function () {
    	/*倒计时*/
    	console.log( Date.now() )
    	timer( 11111,0 );
      var i = 0;
      var t = setInterval(function(){
        var m = $(".js_text_item").eq(0).parent().html();
        var d = '<div class="js_Text_item">'+ m + ' </div>';
        $(".js_text_item").eq(0).animate({
          "opacity":"0",
          //            "width":"0",
          "height":"0",
          "padding":"0"
        },'1000',function(){
          $(".js_Text_item").eq(0).remove();
        });
        $("#demo1").append(d);
        i++;
        if(i==4){
          i=0
        }
      },2000);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

