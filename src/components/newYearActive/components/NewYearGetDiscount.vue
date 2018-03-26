<template>
	<!--新年活动的优惠券图片-->
    <div class="new-year-conent-img-wrap">
        <img class="new-year-conent-img" :src="NewYearGetDiscountImg" alt="">
        <a href="javascript:;"><img class="new-year-get-now" :src="NewYearGetNow" alt=""></a>
    </div>
</template>

<script>
	export default{
		name:"NewYearGetDiscount",
		data(){
			return{
				msg:"this is NewYearGetDiscount",
        NewYearGetDiscountImg:"http://www.wangwang8888.com/images/images/new_year_conent.png",
        NewYearGetNow:"http://www.wangwang8888.com/images/images/new_year_get_now.png"
			}
		}
	}
</script>

<style>
	.new-year-nav-wrap{
	    position: relative;
	}
	.new-year-conent-img{
	    width: 100%;
	    padding-bottom:10px;
	    background: #f5f3f2;
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
</style>
