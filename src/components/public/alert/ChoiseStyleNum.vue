<template>
  <!--购买选择款式和数量弹窗-->
    <div id="confirmBuying" class="js_hide_com retail-confirmBuying animation">
      <div class="comafter" style="position: relative">
        <div class="col-xs-12">
          <div class="comafter retail-confirmBuying-img-price">
            <div class="col-xs-4 retail-confirmBuying-img">
              <img class="img-responsive" src="../../../assets/images/retail-goodsDetails-img004.png" alt="">
            </div>
            <div class="col-xs-8 retail-confirmBuying-price">
              <span id="js_price" class="retail-confirmBuying-price-num">￥2388</span>
              <p>商品货号：<span>2362624</span></p>
            </div>
          </div>
          <div class="comafter retail-confirmBuying-style">
            <p class="retail-confirmBuying-style-title">
              款式
            </p>
            <div id="js_style" class="retail-confirmBuying-style-type">
              <span onclick="style_select(this,0,2336)" class="disabled">龙系列</span>
              <span onclick="style_select(this,5,236)">凤系列</span>
              <span onclick="style_select(this,50,2336)">燕系列</span>
            </div>
          </div>
          <div class="comafter retail-confirmBuying-num-buying">
            <div class="comafter">
              <div id="js_num_buying" class="col-xs-6 padding-0px text-left retail-confirmBuying-num-buying-left">
                购买数量
              </div>
              <div class="col-xs-6 padding-0px text-right">
                          <span id="js_num" class="retail-confirmBuying-num">
                              <span onclick="sub_click()" class="sub">-</span>
                              <input onkeyup="num_keyup()" type="text" class="num" value="1" max="6666">
                              <span onclick="add_click()" class="add">+</span>
                          </span>
              </div>
            </div>
            <div class="js_num-warn text-right retail-confirmBuying-num-warn" style="display: none">库存不足，这次就少买点吧!
            </div>
          </div>
        </div>
        <div onclick="buy_click();" class="retail-confirmBuying-buying text-center">
          确认购买
        </div>
        <img class="js_com_black buying_close" src="../../../assets/images/buying_close.png">
      </div>
    </div>
  <!--购买选择款式和数量弹窗end-->
</template>

<script>
export default {
  name: 'ChosieStyleNum',
  data () {
    return {
      msg: 'this is ChoiseStyleNum'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
