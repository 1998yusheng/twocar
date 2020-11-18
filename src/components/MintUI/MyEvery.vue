<template>
  <div class="my_every">
    <!-- 每日新上标签开始 -->
    <router-link to="/car" class="link">
      <div class="new_div">
        <div class="new_divone">
          <p class="new_div_p">每日新上</p>
          <p class="new_div_ptwo">海量新上好车等你挑</p>
          <div class="new_divtwo">
            <img src="../../assets/home_img/swipe1.jpg" class="new_div_img" />
            <p class="new_divone_bieke">别克</p>
            <p class="new_divone_price">0.88万</p>
          </div>
        </div>

        <!-- 每日新上标签结束 -->
        <!-- 急售降价车标签开始 -->

        <div class="right_first">
          <div class="right_first_div">
            <div>
              <p class="new_div_p">急售降价车</p>
              <p class="right_first_ptwo">高性价比好车</p>
            </div>
            <div>
              <img
                src="../../assets/home_img/clock.png"
                class="first_right_oneimg"
              />
            </div>
          </div>
          <!-- 急售降价车标签结束 -->
          <!-- 超值车，捡便宜标签开始 -->
          <div class="right_two_div">
            <div>
              <p class="new_div_p">超值车</p>
              <img src="../../assets/home_img/biaoqian.png" class="right_img" />
            </div>
            <div>
              <p class="new_div_p">捡便宜</p>
              <img src="../../assets/home_img/libo.png" class="right_img" />
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.my_every .link {
  text-decoration: none;
  color: #000;
}
.my_every .right_img {
  margin-top: 10px;
}
.my_every .right_first_ptwo {
  font-size: 12px;
  margin-top: 20px;
}
.my_every .right_two_div > div {
  background-color: #eee;
  padding: 5px 15px;
  border-radius: 3px;
}
/* 右边底部样式 */
.my_every .right_two_div {
  display: flex;
  justify-content: space-around;

  margin-top: 10px;
  border-radius: 4px;
}
/* 右边顶部导航栏样式 */
.my_every .right_first_div {
  background-color: #eee;
  padding: 10px 20px;
}
/* 右侧导航栏 */
.my_every .right_first_div {
  display: flex;
  justify-content: space-around;
}
/* 左侧栏内部小标题图片样式 */
.my_every .new_div_img {
  width: 86px;
  height: 40px;
}
/* 别克样式  */
.my_every .new_divone_bieke {
  font-size: 12px;
  margin: 5px 0;
  color: #999;
}
/* 左侧钱的样式 */
.my_every .new_divone_price {
  color: #f00;
  font-weight: bold;
  font-size: 14px;
}
/* 左侧导航栏内部小标题样式 */
.my_every .new_divtwo {
  border: 1px solid white;
  padding: 10px;
  background-color: white;
  border-radius: 3px;
  text-align: center;
}
/*  p 标签的样式*/
.my_every .new_div_ptwo {
  font-size: 12px;
  color: #666;
  margin: 7px 0;
}
.my_every .new_div_p {
  font-weight: bold;
  margin-top: 5px;
  font-size: 14px;
}
/* 最外层元素样式 */
.my_every {
  margin-top: 30px;
}
/* 左右模块弹性布局 */
.my_every .new_div {
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
}
/* 左边导航栏样式 */
.my_every .new_divone {
  background-color: #eee;
  padding: 3px 20px;
  border-radius: 5px;
  height: 150px;
}
</style>
