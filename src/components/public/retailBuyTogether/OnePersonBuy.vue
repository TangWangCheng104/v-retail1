<template id="ionePersonBuy">
  <!--一起购买2个版块时-->
  <div class="comafter retail-goodsDetails-pingdan conePersonBuy">
    <div class="col-xs-4 col-xs-offset-4 retail-goodsDetails-pingdan-center">
      <div class="comafter" style="background: #fff;padding-right: 5px;">
        <div class="img-group">
          <img class="img-responsive" src="../../../assets/images/retail-goodsDetails-img003.png" alt="">
          <div class="retail-goodsDetails-pingdan-cheaper">搭配购买省<span>￥600</span></div>
        </div>
        <div class="retail-goodsDetails-pingdan-buy">
          <a href="#">一起购买</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../../../assets/js/jquery.validate.min.js" type="text/javascript"></script>
<script src="../../../assets/js/messages.js"></script>
<script src="../../../assets/js/hammer.min.js"></script>
<script src="../../../assets/js/jquery.hammer.js"></script>

<script>
  export default {
  template: '#ionePersonBuy',
  data () {
    return {
      msg: 'this is retailFooter'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

