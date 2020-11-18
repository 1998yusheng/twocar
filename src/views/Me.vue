<template>
  <div class="me">
    <div class="header">
      <!-- 头部标题设置客服图片 -->
      <div class="title">
        <img src="../assets/me_img/shezhi.png" class="title_img" />
        <img src="../assets/me_img/kefu.png" class="title_img" />
      </div>
      <!-- 注册登陆按钮 -->
      <div class="zhuce_denglu">
        <img src="../assets/me_img/touxiang.png" class="zhuce_img" />
        <div class="zhuce">
          <router-link to="/my" class="link">
            注册/登录
          </router-link>
        </div>
      </div>
    </div>
    <!-- 头部标签结束 -->
    <!-- 收藏标签开始 -->
    <div class="shoucang">
      <ul class="shoucang_ul">
        <li>
          <img src="../assets/me_img/love.png" />
          <p>收藏</p>
        </li>
        <li>
          <img src="../assets/me_img/lingdang.png" />
          <p>收藏</p>
        </li>
        <li>
          <img src="../assets/me_img/shizhong.png" />
          <p>收藏</p>
        </li>
      </ul>
    </div>
    <!-- 收藏标签结束 -->
    <div class="me_border"></div>
    <!-- 交易标签开始 -->
    <div class="jiaoyi">
      <router-link to="/me" class="link">
        <div class="jiaoyi_div">
          <span>买车交易详情</span>
          <span class="jiaoyi_span">></span>
        </div>
      </router-link>
      <router-link to="/me" class="link">
        <div>
          <span>卖车交易详情</span>
          <span class="jiaoyi_span">></span>
        </div>
      </router-link>
    </div>
    <!-- 交易标签结束 -->
    <div class="me_border"></div>
    <!-- 底部导航栏开始 -->
    <div class="down">
      <ul class="down_ul">
        <li>
          <img src="../assets/me_img/money.png" alt="" />
          <p>分期购车</p>
        </li>
        <li>
          <img src="../assets/me_img/chezhu.png" alt="" />
          <p>车主服务</p>
        </li>
        <li>
          <img src="../assets/me_img/woshou.png" alt="" />
          <p>加盟合伙</p>
        </li>
        <li>
          <img src="../assets/me_img/kefudianhua.png" alt="" />
          <p>客服电话</p>
        </li>
      </ul>
    </div>
    <!-- 底部导航栏结束 -->
    <!-- 引入底部导航栏组件 -->
    <my-foot></my-foot>
  </div>
</template>

<style scoped>
/* 底部导航栏开始 */
/* 底部导航栏 ul 中 li 下的 p标签的样式 */
.me .down_ul > li > p {
  margin-top: 10px;
}
/* 底部导航栏总体布局样式 */
.me .down {
  margin: 20px 0;
  font-size: 14px;
  text-align: center;
  color: #333;
}
/* 底部导航栏 ul 布局 */
.me .down_ul {
  display: flex;
  justify-content: space-around;
}
/* 底部导航栏结束 */
/* router-link 标签样式 */
.me .link {
  text-decoration: none;
}
/* 交易样式 */
.me .jiaoyi_span {
  color: #999;
}
.me .jiaoyi_div {
  border-bottom: 1px solid #e8e8e8;
}
.me .jiaoyi div {
  display: flex;
  justify-content: space-between;
  width: 340px;
  color: #333;
  padding: 15px 0;
  margin: 0 auto;
}
/* 暗色条 */
.me .me_border {
  height: 7px;
  background-color: #e8e8e8;
}
/* 收藏标题  ul 下的 li 样式 */
.me .shoucang_ul > li > img {
  width: 25px;
}
.me .shoucang_ul > li > p {
  margin: 10px;
  font-size: 14px;
  color: #333;
}
/* 收藏标题  ul 样式 */
.me .shoucang_ul {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
/* 头部标签背景图片样式 */
.me .header {
  background-image: url("../assets/me_img/7ae819c5fd63a4321de3b16eaffe1069.jpg");

  height: 190px;
}
/* 头部注册登陆页面总体布局样式 */
.me .zhuce_denglu {
  text-align: center;
}
/* 头部注册登录页面注册登录按钮样式 */
.me .zhuce > .link {
  color: white;
}
.me .zhuce {
  background-color: orangered;
  padding: 10px 0;
  width: 220px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
}
/* 头部注册登录页面图片样式 */
.me .zhuce_img {
  margin: 30px 0;
}
/* 头部标题样式 */
.me .title {
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 0 auto;
}
/* 头部标题图片样式 */
.me .title_img {
  width: 25px;
  margin-top: 20px;
}
</style>

<script>
export default {};
</script>
