﻿<!--<script src="../../assets/js/loginVerify.js"></script>
<script src="../../assets/js/app_product.js"></script>
<script src="../../assets/js/retail_cofirmBuying.js"></script>
<script src="../../assets/js/kandan.js"></script>-->

<script>
	//css引入
import '../../assets/css/app_downAlert.css';
import '../../assets/css/auction.css';

	  export default {
        name: 'auctionPaySuccess',
        data() {
            return {
                msg: 'this is auctionPaySuccess'
            }
        },
        mounted :function () {

          /*var ulHeight = $('.auction-right')[0].clientHeight;
          $('.auction-left-line').css('height',ulHeight - 82)*/

        }
	  }
</script>


<template>

  <div id="auctionStatusCloseDetail">
    <div class="container-fluid small_screen">
      <div class="row">
        <div class="retail-waitingPay clearfix">
          <div class="flow-unpaid">
            <!--等待通知提货时，图为flow-waitingBusiness.png-->
            <img class="img-responsive" src="../../assets/images/auction_top_img_order.png" alt="">
            <!--等待买家提货时，图为flow-watinggoods.png-->
            <!--<img class="img-responsive" src="../../assets/images/flow-watinggoods.png" alt="">-->
            <!--交易完成时，图为flow-order-finish.png-->
            <!--<img class="img-responsive" src="../../assets/images/flow-order-finish.png" alt="">-->
            <div class="flex-row lqy-time-date time-flex-father">
              <div class="flex-data time-flex">17-03-04 12:20</div>
              <div class="flex-data time-flex">17-03-04 12:20</div>
              <div class="flex-data time-flex">17-03-04 12:20</div>
            </div>
          </div>
          <!--2017-5-9收货地址-->
          <div class="com-interval border-none"></div>
          <div class="col-xs-12 retail-waitingPay-order-num-status border-bottom1">
            <div class="padding-0px coretail-waitingPay-order-num auction-status">
              状态跟踪：
            </div>
            <div class="padding-0px color-center">
              <!--2017-11-11 11:11-->
            </div>
            <div class="padding-0px text-right color-blue">
              参与活动失败退款<span class="auction-assass"></span>
            </div>
          </div>
          <div style="display: block;" class="luo-address comafter border-bottom">
            <div class="col-xs-12">
              <div class="flex-row luo-address luo-first" style="align-items:center">
                <div class="luo-address-left luo-address-left01">
                  <img src="../../assets/images/auction_icon_car.png" alt="">
                </div>
                <div class="luo-address-center flex-data">
                  <div class="flex-row">
                    <div>配送方式：</div>
                    <div class="flex-data text-right">同城快递</div>
                  </div>
                  <div class="flex-row luo-address-name">
                    <div>收货人：小骨</div>
                    <div class="flex-data text-right">15811412177</div>
                  </div>
                  <div class="luo-address-name">广东省深圳市罗湖区田贝三路32号明阳酒店9A88</div>
                </div>
                <!--<div class="luo-address-right">-->
                <!--<img src="../../assets/images/icon_jiantouR.png" alt="">-->
                <!--</div>-->
              </div>
            </div>
          </div>
          <!--2017-5-9收货地址end-->
          <!--2017-5-9留言信息-->
          <div class="luo-address luo-leaveWords-wrap flex-row border-bottom">
            <div class="flex-row col-xs-12" style="align-items:center">
              <div class="luo-address-left luo-address-left01">
                <img src="../../assets/images/icon_message.png" alt="">
              </div>
              <div class="luo-address-center flex-data">
                <div>买家留言</div>
                <div class="js_ratio flex-data luo-address-name">
                  <div>活动期间客流量比较大，希望卖家赠送的小礼品不忘记了还有优惠券的派发，请卖家备注好！</div>
                </div>
              </div>
              <!--<div class="luo-address-right">-->
              <!--<img src="../../assets/images/icon_jiantouR.png" alt="">-->
              <!--</div>-->
            </div>
          </div>
          <!--2017-5-9留言信息end-->
          <div class="comafter retail-waitingPay-order-detail">
            <div class="col-xs-12 retail-waitingPay-order-num-status auction-order-question1">
              <div class="col-xs-7 padding-0px coretail-waitingPay-order-num">
                订单号：<span>order_0603</span>
              </div>
              <div class="col-xs-5 padding-0px text-right color-blue">
                参与活动失败退款
              </div>
            </div>
            <div class="col-xs-12 retail-waitingPay-order-num-status auction-order-question">
              <div class="col-xs-12 padding-0px coretail-waitingPay-order-num auction-waitingPay">
                <span class="auction-reason">退款原因：</span><span>不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了</span>
              </div>
            </div>
            <div class="col-xs-12 retail-waitingPay-order-num-status auction-order-question">
              <div class="col-xs-12 padding-0px coretail-waitingPay-order-num auction-waitingPay">
                <span class="auction-reason">退款描述：</span><span>不想买了</span>
              </div>
            </div>
          </div>

          <div class="col-xs-12 first retail-waitingPay-order-detail-img ">
            <div class="col-xs-3 padding-0px">
              <img class="img-responsive" src="../../assets/images/retail-goodsDetails-img004.png" alt="">
            </div>
            <div class="col-xs-9 retail-waitingPay-order-detail-txt padding-0px">
              <div class="retail-waitingPay-order-detail-title">转运珠手链吊坠LOVE转运珠黄金吊坠路路通手链黄金饰品转运珠手链吊坠LOVE转运珠黄金吊坠路路通手链黄金饰品</div>
              <div class="retail-waitingPay-order-detail-artnum">货号：<span>2336</span></div>
              <div class="retail-waitingPay-order-detail-artnum retail-waitingPay-order-detail-num">数量：<span>2</span>件</div>
              <div class="retail-waitingPay-order-detail-price flex-row">
                <div class="flex-data padding-0px coretail-waitingPay-order-num">
                  单价：￥2336件
                </div>
                <div class="padding-0px text-right color-zby" style="display: none">
                  7折优惠
                </div>
                <div class="padding-0px text-right pay-price-past">
                  ￥3000
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 first retail-waitingPay-order-detail-img auction-shop-description"></div>
          <div class="col-xs-12 first retail-waitingPay-order-detail-img">
            <div class="col-xs-3 padding-0px">
              <img class="img-responsive" src="../../assets/images/retail-goodsDetails-img004.png" alt="">
            </div>
            <div class="col-xs-9 retail-waitingPay-order-detail-txt padding-0px">
              <div class="retail-waitingPay-order-detail-title">转运珠手链吊坠LOVE转运珠黄金吊坠路路通手链黄金饰品转运珠手链吊坠LOVE转运珠黄金吊坠路路通手链黄金饰品</div>
              <div class="retail-waitingPay-order-detail-artnum">货号：<span>2336</span></div>
              <div class="retail-waitingPay-order-detail-artnum retail-waitingPay-order-detail-num">数量：<span>2</span>件</div>
              <div class="retail-waitingPay-order-detail-price flex-row">
                <div class="flex-data padding-0px coretail-waitingPay-order-num">
                  单价：￥2336件
                </div>
                <div class="padding-0px text-right color-zby" style="display: none">
                  7折优惠
                </div>
                <div class="padding-0px text-right pay-price-past">
                  ￥3000
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 retail-com-list">
            <div class="col-xs-6 padding-0px">优惠金额：</div>
            <div class="col-xs-6 padding-0px text-right"><span class="team-boss">团长优惠</span>￥233</div>
          </div>
          <div class="col-xs-12 retail-com-list">
            <div class="col-xs-6 padding-0px">订单总额：</div>
            <div class="col-xs-6 padding-0px text-right">￥2336</div>
          </div>
          <div class="col-xs-12 retail-com-list">
            <div class="col-xs-6 padding-0px">订单金额：</div>
            <div class="col-xs-6 padding-0px text-right">￥233</div>
          </div>
          <div class="col-xs-12 retail-com-list">
            <div class="col-xs-12 padding-0px text-right"><span>已付金额：</span><span class="auction-price">￥233</span></div>
          </div>
          <div class="col-xs-12 retail-com-list already-money">
            <div class="col-xs-12 padding-0px text-right"><span>已退金额：</span><span class="auction-price">￥233</span></div>
          </div>
          <!-- <div class="col-xs-12 retail-com-list border-none">
               <div class="col-xs-12 padding-0px text-right">剩余应付金额：<span class="color-zby">￥233</span></div>
           </div>-->
          <!--当状态为等待买家提货时，降价一栏才有可能出现-->
          <div class="col-xs-12 retail-com-list" style="display: none">
            <div class="col-xs-6 padding-0px">降：</div>
            <div class="col-xs-6 padding-0px text-right">￥120</div>
          </div>
          <div class="col-xs-12 retail-com-list" style="display:none;">
            <div class="col-xs-12 padding-0px text-right">剩余应付货款：<span class="color-zby">￥1983</span></div>
          </div>
        </div>
        <div class="retail-waitingPay-payment border-none2"><span class="border-none-text">退款方式</span></div>
        <div class="retail-waitingPay-payment comafter">
          <div class="col-xs-12 retail-com-list border-none-top">
            <div class="col-xs-6 padding-0px">支付宝账号：</div>
            <div class="col-xs-6 padding-0px text-right">原路返回</div>
          </div>
        </div>

        <div class="comafter retail-waitingPay-contact-name">

        </div>
        <!--商家二维码-->
        <div class="lqy-qrcode-wrap" >
          <div class="lqy-qrcode-text" style="display:none;">
            <div class="size16"><b>商家微信二维码</b></div>
            <div class="size12">长按识别二维码，添加微信好友</div>
            <!--等待活动结果-->
            <div class="size12" style="display:none;">如有疑问，可扫码资讯</div>
          </div>
          <div class="lqy-qrcode-text" style="display:block;">
            <div class="size16"><b>门店微信公众号二维码</b></div>
            <!--交易完成状态-->
            <div class="size12" style="display:none;">长按识别二维码，优惠资讯永不错过!</div>
            <!--订单付款成功,等待卖家发货，等待买家付尾款状态-->
            <div class="size12" style="display:none;">长按识别二维码，接收最新订单通知!</div>
            <!--订单付款成功,等待活动结果状态-->
            <div class="size12" style="display:none;">长按识别二维码，了解最新活动结果!</div>
            <!--待付款、交易完成,退款完成，已打款-->
            <div class="size12" style="display:block;">长按识别二维码，接收最新优惠资讯!</div>
            <!--退款等待审核状态-->
            <div class="size12" style="display:none;">长按识别二维码，了解最新退款通知!</div>
          </div>
          <div class="lqy-qrcode-img"><img class="img-responsive" src="../../assets/images/retail-waitingPay-qrcode.png" alt=""></div>
        </div>
        <!--当状态等待通知提货时，支付尾款一栏隐藏-->
        <div class="retail-waitingPay-topay-time navbar-fixed-bottom" style="display:none">
          <div class="retail-com-list">
            <div class="col-xs-8 text-right retail-waitingPay-rest-payment">剩余支付货款：<span class="color-zby">￥1983</span></div>
            <div class="col-xs-4 padding-0px text-center bgcolor-zby retail-waitingPay-topay">支付尾款</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style>
  body{
    background: #fff;
  }
</style>
