<template>
  <div class="my_header">
    <!-- 头部标签开始 -->
    <div class="header_input_father">
      <div class="header_input">
        <span>
          <!-- 链接到地图 -->
          <router-link to="/" class="header_input_router">
            郑州
            <img src="../../assets/img/bottom.png" class="header_input_img" />
          </router-link>
        </span>
        <span> | </span>
        <!-- 输入框 -->
        <input type="text" placeholder="二手新车" />
      </div>
    </div>
    <!-- 头部标签结束 -->
  </div>
</template>
<style scoped>
.my_header {
  position: fixed;
  top: 0;

  width: 100%;
  height: 53px;
}
/* 头部最外元素北京背景元素样式 */
.my_header .header_input_father {
  background-color: #01aeed;
  padding: 10px;
}
/* 头部导航栏中的 | 的样式 */
.my_header .header_input :nth-child(2) {
  font-size: 16px;
  padding: 0 10px;
}
/* input 输入框的样式 */
.my_header .header_input :last-child {
  border: 0;
  color: black;
}
/* 头部输入框导航栏样式 */
.my_header .header_input {
  font-size: 12px;
  color: #999;
  border: 1px solid black;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #fff;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
}
.my_header .header_input_img {
  width: 12px;
  margin-bottom: 7px;
}
/* 头部中链接样式 */
.my_header .header_input_father .header_input .header_input_router {
  text-decoration: none;
  color: #999;
}
</style>
