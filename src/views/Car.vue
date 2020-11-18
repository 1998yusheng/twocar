<template>
  <div class="car">
    <!-- 引入头部标签 -->
    <my-header></my-header>

    <div class="title">
      <ul>
        <li class="title_li">
          排序<img src="../assets/img/bottom.png" alt="" />
        </li>
        <li class="title_li">
          品牌<img src="../assets/img/bottom.png" alt="" />
        </li>
        <li class="title_li">
          价格<img src="../assets/img/bottom.png" alt="" />
        </li>
        <li class="title_li">
          筛选<img src="../assets/img/bottom.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="car_clear"></div>
    <!-- 内容列表样式标签开始 -->
    <div class="tuijian_border">
      <router-link to="/shopcart" class="link">
        <div class="tuijian_content">
          <img src="../assets/home_img/swipe1.jpg" class="tuijian_img" />
          <div class="tuijian_right">
            <p>雪佛兰-赛欧 2010款</p>
            <p>三厢1.2L ATM理想版</p>
            <p>
              <span>2011年02月</span>
              <span>14.58公里</span>
            </p>
            <p>2.00万 <span>首付1.25万</span></p>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 内容列表样式标签结束 -->
    <!-- 引入底部导航栏标签 -->
    <my-foot></my-foot>
  </div>
</template>

<style scoped>
.car .link {
  text-decoration: none;
  color: #333;
}
/* 内容文字样式设置 */
.car .tuijian_right :nth-child(4) span {
  font-size: 12px;
  color: #f08080;
}
.car .tuijian_right :nth-child(4) {
  color: #f00;
  font-size: 16px;
}
.car .tuijian_right :nth-child(3) {
  color: #999;
  font-size: 12px;
}
.car .tuijian_right > p {
  margin-top: 10px;
  font-size: 14px;
}
/* 内容列表图片样式设置 */
.car .tuijian_img {
  width: 150px;
  height: 100px;
  border-radius: 5px;
}
/* 内容布局样式 */
.car .tuijian_content {
  display: flex;
  justify-content: space-around;
}
/* 内容列表样式  总体样式*/
.car .tuijian_border {
  border-bottom: 1px solid #ccc;
  width: 340px;
  margin: 0 auto;
  padding: 10px;
}
/* 顶部导航栏 ul 中 img 的样式 */
.car .title_li > img {
  width: 10px;
  margin-left: 5px;
}
/* 清除顶部定位 */
.car .car_clear {
  margin-top: 103px;
}
/* 顶部标签ul的样式 */
.car .title > ul {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  margin: 20px 0;
}
/* 顶部标签样式 */
.car .title {
  background-color: #e8e8e8;
  height: 50px;
  position: fixed;
  top: 52px;
  width: 100%;
}
</style>

<script>
export default {};
</script>
