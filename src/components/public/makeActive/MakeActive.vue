<template>
  <!--制作活动-->
  <!--第一种跳转-->
	<router-link :to="'/freeApliy'" class="kandan-create-active-btn MakeActive">
		<img class="make-img" :src="childMsg + makeActiveImg" alt="">
	</router-link>
	<!--第二种用js方法控制跳转-->
	<!--<a href="javascript:;" @click="hrefFn()" class="kandan-create-active-btn MakeActive">
		<img class="make-img" :src="childMsg + makeActiveImg" alt="">
	</a>-->
</template>

<script>
export default {
  name: 'MakeActive',
  props:['childMsg'],
  data () {
    return {
      msg: 'this is MakeActive',
      makeActiveImg : "/images/make_img.png"
    }
  },
  methods : {
  	hrefFn : function(){
  		this.$router.push('/freeApliy')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kandan-create-active-btn{
    width: 54px;
    height: 54px;
    color: #333;
    text-align: center;
    line-height: 30px;
    position: fixed;
    top:12%;
    border-radius: 25px;
    right: 15px;
    z-index:1050;
}
.make-img{
    width: 54px;
}
</style>
