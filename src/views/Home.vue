<template>
  <div class="home">
    <!-- 引入头部标签 -->
    <my-header></my-header>
    <!-- 轮播图开始 -->
    <div class="swipe">
      <mt-swipe>
        <mt-swipe-item v-for="(p, i) of carousel" :key="i">
          <img :src="p.img" class="swipe_img" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    <!-- 轮播图下一级固定样式开始 -->
    <div class="swipe_next_div">
      <span>
        <img src="../assets/img/banshou.png" class="swipe_next_img" />
        1年2万公里质保
      </span>
      <span>
        <img src="../assets/img/249.png" class="swipe_next_img" />
        247项检测
      </span>
      <span>
        <img src="../assets/img/tui.png" class="swipe_next_img" />
        90天可退
      </span>
    </div>
    <!-- 轮播图下一级固定样式结束 -->
    <!-- button按钮样式开始 -->
    <div class="button_father_car">
      <div class="div_button_car">
        <!-- 买车 -->
        <span class="span_button_car">
          <router-link to="/car" class="span_button_router">
            <img src="../assets/img/button_car1.png" />
            买车
          </router-link>
        </span>
        <!-- 卖车 -->
        <span class="span_button_car">
          <router-link to="/money" class="span_button_router">
            <img src="../assets/img/button_car2.png" alt="" />
            卖车
          </router-link>
        </span>
      </div>
    </div>
    <!-- button按钮链接结束 -->
    <!-- button按钮下一级开始 -->
    <div class="button_next">
      <span>
        <img src="../assets/img/qianbao.png" alt="" />
        分期购
      </span>
      <span>
        <img src="../assets/img/store.png" alt="" />
        严选店
      </span>
      <span> | </span>
      <span>
        <img src="../assets/img/jiazhi.png" alt="" />
        估值
      </span>
      <span>
        <img src="../assets/img/woshou.png" alt="" />
        查成交
      </span>
    </div>
    <!-- button按钮下一级结束 -->
    <!-- 引入的table组件开始 -->
    <div>
      <router-link to="/car" class="div_router_table">
        <!-- 引入component中的my-table组件 -->
        <my-table></my-table>
      </router-link>
    </div>
    <!-- table组件结束 -->
    <!-- 抽奖开始 -->
    <div class="lottery">
      <router-link to="/">
        <img src="../assets/home_img/timg.jpg" class="lottery_img" />
      </router-link>
    </div>
    <!-- 抽奖结束 -->
    <!-- 每日好车推荐开始 -->
    <div class="everday">
      <div class="">
        <my-left></my-left>
        <span>每日好车推荐</span>
      </div>
      <my-every></my-every>
    </div>
    <!-- 每日好车推荐结束 -->
    <my-border></my-border>
    <!-- 分期开好车标签开始 -->
    <div class="fenqi">
      <div>
        <my-left></my-left>
        <span> 分期开好车</span>
        <router-link to="/car" class="fenqi_title">
          查看全部车辆 >
        </router-link>
      </div>
      <router-link to="/car" class="link">
        <div class="fenqi_content">
          <div class="fenqi_content_red">
            <div>
              <p>福克斯</p>
              <p>首付0.57万起</p>
              <img src="../assets/home_img/swipe1.jpg" class="fenqi_img" />
            </div>
            <div>
              <p>速腾</p>
              <p>首付0.84万起</p>
              <img src="../assets/home_img/swipe1.jpg" class="fenqi_img" />
            </div>
            <div>
              <p>哈佛H6</p>
              <p>首付0.57万起</p>
              <img src="../assets/home_img/swipe1.jpg" class="fenqi_img" />
            </div>
          </div>
          <div class="fenqi_content_black">
            <div class="fenqi_div">
              <div>
                <p class="fenqi_p">首付0.84万起</p>
                <p class="fenqi_ptwo">准新车</p>
              </div>
              <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
            </div>
            <div class="fenqi_div">
              <div>
                <p class="fenqi_p">月供364元起</p>
                <p class="fenqi_ptwo">还款无压力</p>
              </div>
              <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 分期开好车标签结束 -->
    <my-border></my-border>
    <!-- 超值好车标签开始 -->
    <div class="chaozhi">
      <div class="chaozhi_car">
        <my-left></my-left>
        超值好车
      </div>
      <router-link to="/car" class="link">
        <div class="chaozhi_tan">
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">手慢无</p>
              <p class="fenqi_ptwo">严选好车限量抢</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">精选SUV车系</p>
              <p class="fenqi_ptwo">15万封顶随便挑</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
        </div>
        <div class="chaozhi_tan">
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">动力系数</p>
              <p class="fenqi_ptwo">高性能好车</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">价低高品</p>
              <p class="fenqi_ptwo">二手价格一手品啥地方萨芬</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
        </div>
      </router-link>
    </div>
    <!-- 超值好车标签结束 -->
    <my-border></my-border>
    <div class="chaozhi">
      <div class="chaozhi_car">
        <my-left></my-left>
        新上好车
      </div>
      <router-link to="/car" class="link">
        <div class="chaozhi_tan">
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">严选新上</p>
              <p class="fenqi_ptwo">严选好车限量抢</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">精选SUV车系</p>
              <p class="fenqi_ptwo">15万封顶随便挑</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
        </div>

        <div class="chaozhi_tan">
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">动力系数</p>
              <p class="fenqi_ptwo">高性能好车</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
          <div class="chaozhi_div">
            <div>
              <p class="fenqi_p">价低高品</p>
              <p class="fenqi_ptwo">二手价格一手品啥地方萨芬</p>
            </div>
            <img src="../assets/home_img/swipe1.jpg" class="fenqi_twoimg" />
          </div>
        </div>
      </router-link>
    </div>
    <!-- 超值好车标签结束 -->
    <my-border></my-border>
    <!-- 今日推荐标签开始 -->
    <div class="tuijian">
      <div class="tuijian_div">
        <my-left></my-left>
        今日推荐
        <router-link to="/more" class="link_span">
          全部推荐 &nbsp;&nbsp;&nbsp;&nbsp;>
        </router-link>
      </div>
      <router-link to="/shopcart" class="link">
        <div class="tuijian_border">
          <div class="tuijian_content">
            <img src="../assets/home_img/swipe1.jpg" class="tuijian_img" />
            <div class="tuijian_right">
              <p>雪佛兰-赛欧 2010款</p>
              <p>三厢1.2L ATM理想版</p>
              <p>
                <span>2011年02月</span>
                <span>14.58公里</span>
              </p>
              <p>2.00万</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 今日推荐标签结束 -->
    <!-- 点击查看更多标签开始 -->
    <div class="gengduo">
      <router-link to="/more">
        <span>点击查看更多</span>
      </router-link>
    </div>
    <!-- 点击查看更多标签结束 -->
    <my-border></my-border>
    <!-- 底部内容标签开始 -->
    <div class="lastdown">
      <p class="lastdown_pone">平台保障</p>
      <p class="lastdown_ptwo">查看保障平台 ></p>
      <ul class="lastdown_ul">
        <li>
          <img src="../assets/home_img/zhibao.png" alt="" />
          <p>一年质保</p>
        </li>
        <li>
          <img src="../assets/home_img/tui.png" alt="" />
          <p>90天可退</p>
        </li>
        <li>
          <img src="../assets/home_img/baozhang.png" alt="" />
          <p>2亿保障金</p>
        </li>
      </ul>
      <div class="lastdown_div">
        <div>
          <div class="lastdown_down">
            <img src="../assets/home_img/315.png" alt="" />
            3.15认证金盾企业 >
          </div>
          <div class="lastdown_down">
            <img src="../assets/home_img/cctv.png" alt="" />
            cctv多次报道 >
          </div>
        </div>
        <div>
          <div class="lastdown_down">
            <img src="../assets/home_img/renzheng.png" alt="" />
            3.15认证金盾企业 >
          </div>
          <div class="lastdown_down">
            <img src="../assets/home_img/huangguan.png" alt="" />
            互联网诚信示范单位 >
          </div>
        </div>
      </div>
    </div>
    <!-- 底部内容标签结束 -->

    <!-- 引入component中的全剧组件my-foot -->
    <my-foot></my-foot>
  </div>
</template>

<style scoped>
.home .lastdown {
  margin-bottom: 80px;
}
.home .lastdown .lastdown_down {
  border: 1px solid orange;
  margin-top: 10px;
  width: 160px;
  padding: 5px 2px;
}
.home .lastdown .lastdown_div {
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 0 auto;
  font-size: 12px;
  color: orange;
}
/* 底部标签内容样式标签 */
.home .lastdown_ul {
  display: flex;
  justify-content: space-around;
  margin: 40px 30px;
  font-size: 14px;
  text-align: center;
  color: #ef9e52;
}
.home .lastdown_ul > li > p {
  margin-top: 10px;
}
.home .lastdown_ul > li > img {
  width: 60px;
}
/* 底部标签头部标题 */
.home .lastdown_pone,
.home .lastdown_ptwo {
  color: #ef9e52;
  text-align: center;
}
.home .lastdown_pone {
  font-size: 22px;
}
.home .lastdown_ptwo {
  font-size: 12px;
  margin-top: 10px;
}
/* 点击查看更多标签样式 */
.home .gengduo {
  width: 340px;
  margin: 0 auto;
  text-align: center;
}
.home .gengduo span {
  background: linear-gradient(to right, #dc143c, #f00);
  border: 1px solid #f00;
  color: #fff;
  padding: 10px 0;
  display: inline-block;
  width: 340px;
  margin-top: 30px;
  font-size: 14px;
}
/* 推荐标签样式 */
/* 推荐标签文本样式 */
.home .tuijian_right > p {
  margin-top: 10px;
  font-size: 14px;
}
.home .tuijian_right :nth-child(3) {
  font-size: 12px;
  color: #999;
}
.home .tuijian_right :nth-child(4) {
  color: #f00;
}
/* 推荐标签内容样式 */
.home .tuijian_content {
  display: flex;
  justify-content: space-around;
  width: 340px;
  margin: 0 auto;
}
/* 推荐总体布局样式 */
.home .tuijian_border {
  padding-top: 10px;
  border-top: 1px solid #eee;
}
/* 推荐标签图片样式 */
.home .tuijian_img {
  width: 150px;
  height: 100px;
  border-radius: 5px;
}
/* 推荐标签标题样式 */
.home .tuijian_div {
  margin-bottom: 20px;
}
.home .link_span {
  text-decoration: none;
  color: #999;
  font-size: 12px;
  position: absolute;
  right: 20px;
}
.home .link {
  text-decoration: none;
  color: #000;
}
/* 超值好车样式 */
/* 超值内部小样式布局 */
/* 溢出隐藏样式 */
.home .fenqi_p,
.home .fenqi_ptwo {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 95px;
}
.home .chaozhi .chaozhi_car {
  margin-bottom: 20px;
}
/* 每一个超值好车子标签的样式 */
.home .chaozhi_div {
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 4px;
  width: 154px;
}
/* 超值好车总体样式布局 */
.home .chaozhi_tan {
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 0 auto;
}
/* 分期底部图片样式 */
.home .fenqi_twoimg {
  width: 50px;
  height: 40px;
  border-radius: 3px;
}
/* 分期内容底部 弹性布局样式*/
.home .fenqi_content_black {
  display: flex;
  justify-content: space-between;
}
/* 分期底部文字样式 */
.home .fenqi_div > div > p {
  margin-bottom: 10px;
}
/* 分期开好车底部内容样式 */
.home .fenqi_div {
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 50px;
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
}
/* 分期内容样式 */
.home .fenqi_content {
  width: 350px;
  margin: 0 auto;
}
.home .fenqi_content_red > div > :first-child,
.home .fenqi_p {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
}
.home .fenqi_ptwo {
  color: #999;
  font-size: 10px;
}
.home .fenqi_content_red > div > :nth-child(2) {
  color: #f00;
  font-size: 12px;
}
.home .fenqi_content_red > div {
  width: 110px;
  background-color: #eee;
  padding: 20px 0;
  margin: 20px 0 10px 0;
  text-align: center;
  border-radius: 4px;
}
.home .fenqi_content_red {
  display: flex;
  justify-content: space-between;
}
.home .fenqi_img {
  width: 60px;
  margin-top: 20px;
  border-radius: 3px;
}
/* 分期标签标题样式 */
.home .fenqi_title {
  position: absolute;
  right: 15px;
  text-decoration: none;
  color: #999;
  font-size: 12px;
}
/* 抽奖标签样式 */
.home .lottery {
  background-color: #eee;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}
/* 抽奖样式标签图片 */
.home .lottery_img {
  width: 340px;
  height: 60px;
}
/* button的下一级样式 */
.home .button_next {
  font-size: 14px;
  color: #999;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
}

/* table 组件样式设置 */
.home .div_router_table {
  text-decoration: none;
  color: #000;
}

/* 轮播图样式 */
.home .swipe {
  height: 200px;
}
/* 轮播图图片样式 */
.home .swipe .swipe_img {
  height: 200px;
  width: 375px;
}
/* 轮播图下一级导航栏样式 */
.home .swipe_next_div {
  font-size: 12px;
  background-color: orange;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  color: #666;
}
.home .swipe_next_div > span {
  line-height: 26px;
}
/* 轮播图下一级导航栏组件图片样式 */
.home .swipe_next_img {
  width: 16px;
}
/* button按钮样式  买车 卖车 */
.home .span_button_car {
  background-image: linear-gradient(to right, #e00, #dfce99);
  padding: 5px 30px;
  border-radius: 4px;
}

/* button 按钮样式  里面字体的样式 */
.home .span_button_router {
  text-decoration: none;
  color: #fff;
}
/*  button 弹性布局 */
.home .div_button_car {
  display: flex;
  justify-content: space-evenly;
}
/* button  按钮外部样式 */
.home .button_father_car {
  margin: 10px 0;
}
</style>

<script>
export default {
  data() {
    return {
      carousel: [],
    };
  },
  mounted() {
    this.axios.get("/carousel").then((res) => {
      // console.log(res.data.result);
      let data = res.data.result;
      data.forEach((item) => {
        console.log(item.img);
        item.img = require("../assets/" + item.img);
        console.log(item.img);
        this.carousel.push(item);
      });
      // console.log(this.carousel);
    });
  },
};
</script>
