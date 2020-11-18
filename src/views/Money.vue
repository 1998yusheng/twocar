<template>
  <div class="money">
    <div class="money_title">
      我要卖车
    </div>
    <div>
      <img src="../assets/money_img/timg.jpg" class="money_img" />
    </div>
    <!-- 急速卖车标签开始 -->
    <div class="jisu">
      <my-left></my-left>
      急速卖车
    </div>
    <div class="money_shouji">
      <input
        v-model="phone"
        type="text"
        placeholder="请输入您的手机号"
        class="money_input"
      />
    </div>
    <div class="phone_button">
      <span @click="phones">免费卖车</span>
    </div>
    <div class="guzhi_lishi">
      <router-link to="/price" class="link">
        <div class="guzhi">
          <img src="../assets/money_img/jiazhi.png" alt="" />
          <span>在线估值</span>
        </div>
      </router-link>
      <router-link to="/price" class="link">
        <div class="guzhi">
          <img src="../assets/money_img/woshou.png" alt="" />
          <span>历史成交价</span>
        </div>
      </router-link>
    </div>
    <!-- 急速卖车标签结束 -->
    <my-border></my-border>
    <!-- 保卖服务标签开始 -->
    <div class="baomai">
      <div class="baomai_oneson">
        <my-left></my-left>
        保卖服务
      </div>
      <ul class="baomai_ul">
        <li>
          <img src="../assets/money_img/qiandun.png" alt="" />
          <p>当天拿钱</p>
          <p>验车当天</p>
          <p>*最高拿车款80%</p>
        </li>
        <li>
          <img src="../assets/money_img/gaojia.png" alt="" />
          <p>高价卖车</p>
          <p>卖给个人卖家</p>
          <p>最多多卖20%</p>
        </li>
        <li>
          <img src="../assets/money_img/shengxin.png" alt="" />
          <p>省时省心</p>
          <p>专人专场为您卖车</p>
          <p>全程托管不操心</p>
        </li>
      </ul>
      <div class="chengnuo">
        *承诺成交: 12个工作日未售出，人人车全程付款
      </div>
    </div>
    <!-- 保卖服务标签结束 -->
    <my-border></my-border>
    <div class="lastdown">
      <p class="last_p">卖车交易须知</p>
      <p>
        只有通过本车平台、按照正常电子签约流程完成交易，才能更好的保障您的个人信息、资金、交易等安全。
      </p>
      <p>规范流程如下</p>
      <p>
        1.买卖双方达成交易意向后签署《二手车买卖合同》,该合同为电子合同（非纸质）,加盖本车平台公章,并在asdfkjhasfdhjashf.com上可查；需本人签署；
      </p>
      <div>
        2.确认收到全款之后再进行车辆交付。
        <p>
          请勿直接与任何本平台工作人员进行线下纸质签约、交付款项等,若相关人员要求您私下交易,可拨打4550-784-600
          转 3 进行举报（举报不会泄露您的任何信息）。
        </p>
      </div>
    </div>

    <!-- 引入底部导航栏 -->
    <my-foot></my-foot>
  </div>
</template>

<style scoped>
/* 底部交易须知栏样式开始 */
.money .last_p {
  color: #000;
}
.money .lastdown > div {
  margin-bottom: 80px;
}
.money .lastdown > p {
  margin: 10px 0;
}
.money .lastdown {
  font-size: 12px;
  color: #999;
  width: 340px;
  margin: 0 auto;
}
/* 底部交易须知栏样式结束 */
/* 保卖服务标签样式开始 */
/* 承诺标签样式 */
.money .chengnuo {
  margin: 30px 0;
  font-size: 12px;
  color: #bbb;
  text-align: center;
}
/* 保卖标题样式 */
.money .baomai_oneson {
  margin-bottom: 20px;
}
/* 内容样式标签 */
.money .baomai_ul > li :nth-child(3),
.money .baomai_ul > li :nth-child(4) {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
.money .baomai_ul > li :nth-child(2) {
  font-size: 14px;
  margin: 10px 0;
  font-weight: bold;
}
.money .baomai_ul {
  display: flex;
  justify-content: space-around;
  width: 340px;
  text-align: center;
  margin: 0 auto;
}
/* 保卖服务标签样式结束 */
/* 在线估值 和 历史成交价 样式 开始 */
.money .link {
  text-decoration: none;
}
/* 内部样式 */
.money .guzhi {
  display: flex;
  justify-content: space-around;
  width: 110px;
  padding: 10px 20px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
}
/* 在线估值总体样式 */
.money .guzhi_lishi {
  display: flex;
  justify-content: space-around;
  width: 340px;
  margin: 0 auto;
}
/* 在线估值 和 历史成交价 样式 结束*/

/* 免费卖车按钮样式 */
.money .phone_button span {
  padding: 10px 0;
  background: linear-gradient(to bottom, orange, orangered);
  width: 352px;
  display: inline-block;
  color: white;
  border-radius: 4px;
}
.money .phone_button {
  margin: 10px 0 30px 0;
  text-align: center;
}
/* 手机号验证标签样式 */
.money .money_shouji {
  text-align: center;
}
.money .money_input {
  width: 340px;
  padding: 10px 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
/* 急速卖车标签 */
.money .jisu {
  margin: 20px 0 10px 0;
}
/* 我要卖车  标题图片 */
.money .money_img {
  width: 375px;
  height: 180px;
}
/* 我要卖车----标题标签 */
.money .money_title {
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    phones() {
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.phone)) {
        this.$toast({
          message: "手机号正确",
        });
        return true;
      } else {
        this.$toast({
          message: "手机号格式错误",
        });
        return false;
      }
    },
  },
};
</script>
