<template>
	<!--新年活动banner图-->
	<div class="new-year-nav-wrap">
	    <img class="new-year-nav" :src="NewYearBanner" alt="">
	    <a href="javascript:;"><img class="new-year-go-now" :src="NewYearGoToNow" alt=""></a>
	</div>
</template>

<script>
	export default {
		name:"NewYearGetDiscount",
		data (){
			return{
				msg:"this is NewYearGetDiscount",
        NewYearBanner:"http://www.wangwang8888.com/images/images/new_year_nav.png",
        NewYearGoToNow: "http://www.wangwang8888.com/images/images/new_year_now_go.png"
			}
		}
	}
</script>

<style>
	.new-year-nav-wrap{
	    position: relative;
	}
	.new-year-nav{
	    width: 100%;
	}
	.new-year-go-now{
	    display: inline-block;
	    border-radius: 5px;
	    font-size: 12px;
	    position: absolute;
	    top:50%;
	    width: 18%;
	    transform: translateY(-50%);
	    right: 10px;
	}
</style>
