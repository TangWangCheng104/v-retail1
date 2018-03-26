<template>
  <!--微信二维码-->
	<div class="wx-code-wrap" id="wxCode">
	  <span class="wx-bg-opacity"></span> 公众号 <img class="wx-code" src="" v-lazy="codeImg" alt="">
	</div>
</template>

<script>
export default {
  name: 'comBlack',
  data () {
    return {
      msg: 'this is index',
      codeImg:'../src/assets/images/wx_code.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wx-code-wrap{
    width: 89px;
    height: 39px;
    text-align: center;
    line-height: 39px;
    box-shadow: -1px 1px 5px #d7d7d7;
    position: fixed;
    top:60%;
    right: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    color: #fe4b4b;
    z-index: 1040;
}
.wx-code{
    width: 17px;
    height: 17px;
    position: relative;
    top:-2px;
}
.wx-bg-opacity{
    display: inline-block;
    top:0;
    left: 0;
    opacity: .8;
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}
</style>
