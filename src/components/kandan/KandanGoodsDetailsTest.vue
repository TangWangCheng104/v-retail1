<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>

<script>
//css引入
import '../../assets/css/app_downAlert.css';
import '../../assets/css/retailCommon.css';
import '../../assets/css/retail-goodsDetails.css';
import '../../assets/css/retail-kandan.css';


/*底部购买按钮*/
import Footer from '../public/footerStatus/Footer.vue';
/*头部大轮播图*/
import BigSwiper from '../public/swiper/BigSwiper.vue';
/*头部小轮播图*/
import Swiper from '../public/swiper/Swiper.vue';
/*一起购，三个人*/
import ThreePersonBuy from '../public/retailBuyTogether/ThreePersonBuy.vue';
/*一起购，两个人*/
import TwoPersonBuy from '../public/retailBuyTogether/TwoPersonBuy.vue';
/*一起购，一个人*/
import OnePersonBuy from '../public/retailBuyTogether/OnePersonBuy.vue';
/*商品简介*/
import ShopIntro from '../public/shopIntro/ShopIntro.vue';
/*商品详情*/
import ShopRetail from '../public/shopRetail/ShopRetail.vue';
/*联合活动*/
import TogetherActivities from '../public/togetherActivities/TogetherActivities.vue';
/*砍单规则的弹框*/
import KanDanRule from '../public/alert/KanDanrule.vue';
/*购买收藏弹框*/
import BuyCollect from '../public/alert/BuyCollect.vue';
/*选择商品数量和商品款式的弹框*/
import ChoiseStyleNum from '../public/alert/ChoiseStyleNum.vue';
/*砍单内容*/
import KanDanContent from './components/KanDanContent.vue';
/*遮罩层*/
import ComBlack from '../public/alert/ComBlack.vue';
/*不能帮砍了*/
import CantHelpKanDan from '../public/alert/CantHelpKanDan.vue';
/*砍掉金额*/
import CutMoney from '../public/alert/CutMoney.vue';
/*没有支付金额*/
import NotPayMoney from '../public/alert/NotPayMoney.vue';
/*亲友团*/
import RelativeFriends from './components/RelativeFriends.vue';
/*新年活动的banner*/
import NewYearBanner from '../newYearActive/components/NewYearBanner.vue';
/*新年活动的获取优惠券部分*/
import NewYearGetDiscount from '../newYearActive/components/NewYearGetDiscount.vue';
/*二维码*/
import WxCode from '../public/wxCode/WxCode.vue';
/*制作活动*/
import MakeActive from '../public/makeActive/MakeActive.vue';


import http from 'http';
/*axios*/
  import axios from "axios";
/*懒加载*/
  import Vue from 'vue'
  import VueLazyload from "vue-lazyload"
  Vue.use(VueLazyload);
// 地址的前缀
// var urlHead = "http://www.wangwang8888.com/images";
//引入定义好的vuex文件
  import store from '../../vuex/store.js'
	//引入mockjs
	import Mock from 'mockjs'
	
export default {
  name: 'kandan',
  store,
  data () {
    return {
      msg: 'this is comBlack',
      conster:0,
      urlHead:"http://www.wangwang8888.com/images",
      mysqlMsg:[],
      mockData :''
    }
  },
  mounted:function(){
  	//用mock模拟数据
//		this.mockData = Mock.mock({
//	    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//	    'list|1-10': [{
//	        // 属性 id 是一个自增数，起始值为 1，每次增 1
//	        'id|+1': 1
//	    }]
//		})
//	爬取数据
		var paquUrl = 'https://shixi.info/';
		http.get(paquUrl,function(res){
			var http = '';
			res.on('data',function(data){
				html+=data;
			})
			res.on('end',function(){
				console.log( html );
			})
		})
		var template = {
			name:'value1'
		}
		var data = {
			name:'value2'
		}
		var Random = Mock.Random;
		Random.email();
		this.mockData = Mock.mock({
			//
			'list|1-10':[{
				'id|+1':1
			}],
			'list1|1-10':"a-z",
			'list2|10.3':1,
			'list3|1-10.3-5':1,
			'list4|1':Random.boolean(1,9,true),
			'reg|5':/\d/,
			'arr|1':[1,10],
			'first|1-20':['@FIRST','@last'],
			'name':{
				first : '@FIRST',
				second : '@FIRST',
				middle : "@FIRST",
				full : '@first @second @last'
			},
			email:'@email',
			'natural':Random.natural(60,100),//返回60-100的自然数
			'integer':Random.integer(),//integer返回一个随机数，可为负数
			'mininteger':Random.integer(-15465532),//integer返回一个最小值为-15465532的随机数，可为负数
			'minteger':Random.integer(100,150),//integer返回一个100-150的随机整数
			'minteger':Random.float(),//
			'character':Random.character(),//产生随机字符
			'theCharacter':Random.character( 'symbel' ),
			'string':Random.string(),
			'stringLength':Random.string(10),
			'range':Random.range(1,12,2),//1-12中的数，总共分为两个步长
			'date':Random.date('yyyy-MM-dd'),//生成日期
			'time':Random.time('HH:mm:ss'),//生成小时
			'datetime':Random.datetime('yyyy-MM-dd HH:mm:ss'),//年月日时分秒
			'datanow':Random.now(),//获取现在的事件
			'color':Random.color(),//随机生成一个颜色
			'image':Random.image('200×200',Random.color(),Random.color(),'png','mockjs'),//随机生成一个图片，五个参数可定义，尺寸，背景色，前景色（文字颜色），文件格式，图片的文字内容
			'dataImage':Random.dataImage('200×200','mockjs'),//随机生成一套以base64为基础的图片 
			'paragraph':Random.paragraph(),//随机生成一段英文文字，最大初始句子为7句
			'cparagraph':Random.cparagraph(),//随机生成一段中文文字，最大初始句子为7句
			'sentence':Random.sentence(),//随机生成一句英文句子，默认为12到18个字
			'csentence':Random.csentence(),//随机生成一句中文句子，默认为12到18个字
			'word':Random.word(),//3-10个引文字母
			'cword':Random.cword(),//一个中文字
			'thecword':Random.cword('中国人在天下之间'),//特定的中文字
			'title':Random.title(),//随机生成一个标题，引文的
			'ctitle':Random.ctitle(),//随机生成一个中文的标题
			'namee':Random.name(),//随机生成一个名字first,last,Random.name(true)
			'cname':Random.cname(),//中文名字
			'url':Random.url(),//生成一个网址
			'ip':Random.ip(),//生成一个ip
			"email":Random.email(),//email
			'province':Random.province(),//省份
			"city":Random.city(),//城市
			'country':Random.county( true ),//县，是否生成省份，县市
			'zip':Random.zip(),//生成一个邮编
			'capitalize':Random.capitalize("hello"),//把首字母变成大写
			'upper':Random.upper("hello"),//吧字母变成小写
			'lower':Random.lower('HELLO'),//吧字母变成大写
			'arr':Random.pick( [111,2,3,4] ),//数组中拿一个数
			'shuffle':Random.shuffle([111,2,3,4]),//打乱数组顺序shuffle
			'guid':Random.guid(),//唯一字符串生成
			"id":Random.id(),//身份证号
			'increment':Random.increment()//随机生成一个自增数，默认为1
		})
//		var Random = Mock.random;
		console.log( Mock.valid(template, data) )
		
		Mock.setup({
//			timeout:400
				timeou:'10000'
		})
		console.log( JSON.stringify( this.mockData ,null,4 ) )
    let that = this;
    
    let url = "http://192.168.1.163:4000/mysqlApi/find"
    let result = '/images/banner02.png'
    this.mysqlMsg.push( result );
    axios.get(url,{ params : { username:'zishu' } }).then((req)=>{
      
      if( req.data.status == 1 ){
        let result = req.data.data[0]
        console.log( eval(result) )
        this.mysqlMsg.push( result );
        console.log( this.mysqlMsg[0].swiper )
      }
    })
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
    //调用vuex里面的值
    this.incCount1();
  },
  methods:{
    incCount1(){
    	//改变store里面的数据
    	store.commit('incCount',{
    		mysqlMsg:this.mysqlMsg
    	});//执行store里面的mutations方法
//  	console.log( store.state.count );
    }
  },
  computed:{
  	count(){
          return store.state.count;
      } 
  },
	watch:{
		
	},
  components: {
    'v-Footer':Footer,
    'v-BigSwiper':BigSwiper,
    'v-Swiper':Swiper,
    'v-ThreePersonBuy':ThreePersonBuy,
    'v-TwoPersonBuy':TwoPersonBuy,
    'v-OnePersonBuy':OnePersonBuy,
    'v-ShopIntro':ShopIntro,
    'v-ShopRetail':ShopRetail,
    'v-TogetherActivities':TogetherActivities,
    'v-KanDanRule':KanDanRule,
    'v-ChoiseStyleNum':ChoiseStyleNum,
    'v-KanDanContent':KanDanContent,
    'v-BuyCollect':BuyCollect,
    'v-ComBlack':ComBlack,
    'v-CantHelpKanDan':CantHelpKanDan,
    'v-CutMoney':CutMoney,
    'v-NotPayMoney':NotPayMoney,
    'v-RelativeFriends':RelativeFriends,
    'v-NewYearBanner':NewYearBanner,
    'v-NewYearGetDiscount':NewYearGetDiscount,
    'v-WxCode':WxCode,
    'v-MakeActive':MakeActive
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<template>
  <div class="kandan">
  	<!--新年活动的banner图-->
  	<v-NewYearBanner :childMsg="urlHead"></v-NewYearBanner>
    <!--底部购买的按钮和icon-->
    <v-Footer :childMsg="urlHead"></v-Footer>
    <!--顶部点击之后放大的轮播图-->
    <v-BigSwiper :childMsg="urlHead"></v-BigSwiper>
    <!--<v-Swipter></v-Swipter>-->
    <div class="container-fluid small_screen">
        <div class="row">
            <div class="retail-goodsDetails pingdan-goodsDetails">
                <!--<i class="icon-pingdan-btn"><img class="img-responsive" src="../../assets/images/icon_pingdan02.png" alt=""></i>-->
              <div>
                <!--轮播图-->
                <v-Swiper :childMsg="{urlHead,mysqlMsg}" ></v-Swiper>
              </div>
              <!--砍单内容-->
              <v-KanDanContent :childMsg="urlHead"></v-KanDanContent>
              <!--砍单内容end-->
              <!--亲友团-->
              <v-RelativeFriends :childMsg="urlHead"></v-RelativeFriends>
              <!--亲友团end-->
              <!--获取优惠券入口-->
              <v-NewYearGetDiscount :childMsg="urlHead"></v-NewYearGetDiscount>
              <!--获取优惠券入口end-->
              <!--商品简介-->
              <v-ShopIntro :childMsg="urlHead"></v-ShopIntro>
              <!--一起购买3个版块时-->
              <v-ThreePersonBuy :childMsg="urlHead"></v-ThreePersonBuy>
              <!--一起购买2个版块时-->
              <v-TwoPersonBuy :childMsg="urlHead"></v-TwoPersonBuy>
              <!--一起购买1个版块时-->
              <v-OnePersonBuy :childMsg="urlHead"></v-OnePersonBuy>
              <!--商品详情-->
              <v-ShopRetail :childMsg="urlHead"></v-ShopRetail>
              <!--联合活动-->
              <v-TogetherActivities :childMsg="urlHead"></v-TogetherActivities>
            </div>
        </div>
    </div>
    <!--遮罩层-->
    <v-ComBlack :childMsg="urlHead"></v-ComBlack>
    <!--规则的弹出框-->
    <v-KanDanRule :childMsg="urlHead"></v-KanDanRule>
    <!--购买选择款式和数量弹窗-->
    <v-ChoiseStyleNum :childMsg="urlHead"></v-ChoiseStyleNum>
    <!--购买选择款式和数量弹窗end-->
    <!--购买收藏弹窗-->
    <v-BuyCollect :childMsg="urlHead"></v-BuyCollect>
    <!--购买收藏弹窗end-->
    <!--不能再次帮砍了-->
    <v-CantHelpKanDan :childMsg="urlHead"></v-CantHelpKanDan>
    <!--不能再次帮砍了end-->
    <!--成功砍掉金额-->
    <v-CutMoney :childMsg="urlHead"></v-CutMoney>
    <!--成功砍掉金额end-->
    <!--有该砍价未支付订单-->
    <v-NotPayMoney :childMsg="urlHead"></v-NotPayMoney>
    <!--有该砍价未支付订单end-->
    <!--制作活动-->
    <v-MakeActive :childMsg="urlHead"></v-MakeActive>
    <!--微信二维码-->
    <v-WxCode :childMsg="urlHead"></v-WxCode>
  </div>
</template>
<style type="text/css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .bounce-discounts-icon{
    width: 12%;
    position: absolute;
    top:-40%;/*24%*/
    left: -60%;
    right: 0;
    margin: auto;
    -webkit-animation-name: skyset1;
    -webkit-animation-duration: 500ms;
    -webkit-animation-iteration-count: infinite; /*无限循环*/
    -webkit-animation-timing-function: linear;
  }
  @keyframes skyset1 {
    0%{
      transform: scale(.6);
    }
    100%{
      transform: scale(1);
    }
  }
</style>

