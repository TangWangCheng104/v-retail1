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

  <div id="AuctionOrderWaitActiveResult">
    <div class="container-fluid small_screen">
      <div class="row">
        <div class="retail-waitingPay clearfix">
          <div class="flow-unpaid">
            <!--等待通知提货时，图为flow-waitingBusiness.png-->
            <img class="img-responsive" src="../../assets/images/auction_waiting_result.png" alt="">
            <!-- <div class="flex-row lqy-time-date time-flex-father">
                 <div class="flex-data time-flex">17-03-04 12:20</div>
                 <div class="flex-data time-flex">17-03-04 12:20</div>
                 <div class="flex-data time-flex">17-03-04 12:20</div>
             </div>-->
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
            <div class="padding-0px text-right color-blue color-black">
              报名拍卖活动<span class="auction-assass"></span>
            </div>
          </div>
          <!--2017-5-9留言信息end-->
          <div class="comafter retail-waitingPay-order-detail">
            <div class="col-xs-12 retail-waitingPay-order-num-status auction-order-question1" style="border-bottom: none">
              <div class="col-xs-7 padding-0px coretail-waitingPay-order-num">
                订单号：<span>order_0603</span>
              </div>
              <div class="col-xs-5 padding-0px text-right color-red">
                等待活动结果
              </div>
            </div>
          </div>
          <!--<div class="col-xs-12 first retail-waitingPay-order-detail-img auction-shop-description clearfix"></div>-->
          <!--商品详情-->
          <div class="col-xs-12 first retail-waitingPay-order-detail-img clearfix">
            <div class="col-xs-3 padding-0px clearfix">
              <img class="img-responsive" src="../../assets/images/retail-goodsDetails-img004.png" alt="">
            </div>
            <div class="col-xs-9 retail-waitingPay-order-detail-txt padding-0px clearfix">
              <div class="retail-waitingPay-order-detail-title">转运珠手链吊坠LOVE转运珠黄金吊坠路路通手链黄金饰品转运珠手链吊坠LOVE转运珠黄金吊坠路路通手链黄金饰品</div>
              <div class="retail-waitingPay-order-detail-artnum">货号：<span>2336</span></div>
              <div class="retail-waitingPay-order-detail-artnum retail-waitingPay-order-detail-num">数量：<span>2</span>件</div>

            </div>
          </div>
          <!--背景颜色虚线-->
          <div class="auction-bgline" style="float:left;background: url('../../assets/images/auction_border_bg.png') repeat-x left center"></div>
          <!--团长优惠-->
          <div class="auction-money-wrap auction-money-wrap2 clearfix">
            <div class="col-xs-12 auction-money-rules-li2 auction-money-rules-liwrap clearfix">
              <div class="col-xs-6 auction-mane-prvent-money padding-0px">优惠项目：</div>
              <div class="col-xs-6 auction-mane-number-money padding-0px text-right">团长折上95折</div>
            </div>
            <div class="col-xs-12 auction-money-rules-li2 clearfix auction-beauty">
              <div class="col-xs-12 auction-mane-buy-money1 padding-0px text-right">美女优惠折上95折</div>
            </div>
            <div class="col-xs-12 auction-money-rules-li2 clearfix">
              <div class="col-xs-12 auction-mane-buy-money padding-0px text-right">优惠将在支付尾款时综合结算</div>
            </div>
          </div>

          <div class="col-xs-12 retail-com-list auction-privent-money">
            <div class="col-xs-6 padding-0px">保 证 金：</div>
            <div class="col-xs-6 padding-0px text-right">￥233</div>
          </div>
          <div class="col-xs-12 retail-com-list already-money">
            <div class="col-xs-12 padding-0px text-right already-back-money"><span>已付：</span><span class="auction-price auction-price-changColor">￥233</span></div>
          </div>

          <!--当状态为等待买家提货时，降价一栏才有可能出现-->
          <!--<div class="col-xs-12 retail-com-list" style="display: none">
              <div class="col-xs-6 padding-0px">降：</div>
              <div class="col-xs-6 padding-0px text-right">￥120</div>
          </div>
          <div class="col-xs-12 retail-com-list" style="display:none;">
              <div class="col-xs-12 padding-0px text-right">剩余应付货款：<span class="color-zby">￥1983</span></div>
          </div>-->
        </div>
        <div class="retail-waitingPay-payment border-none2 auction-kong-line"></div>
        <!--商家标记-->
        <div class="col-xs-12 retail-waitingPay-order-num-status auction-order-question-top auction-order-question" style="background: #fff">
          <div class="col-xs-12 padding-0px coretail-waitingPay-order-num auction-waitingPay auction-order-question-padding">
            <span class="auction-reason">商家标记：</span><span>不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了不想买了</span>
            <span class="auction-assass auction-assass1"></span>
          </div>
        </div>
        <div class="retail-waitingPay-payment comafter">
          <div class="col-xs-12 retail-com-list auction-change-fontSize">
            <div class="col-xs-6 padding-0px">促 成 者：</div>
            <div class="col-xs-6 padding-0px text-right">传世金玉珠宝<span class="auction-assass auction-assass2"></span></div>
          </div>
        </div>
        <!--商家二维码-->
        <div class="lqy-qrcode-wrap" style="padding-top: 20px;">
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
      </div>
    </div>
  </div>

</template>
<style>
  body{
    background: #fff;
  }
</style>
