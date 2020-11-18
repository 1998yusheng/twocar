<template>
  <div class="cart">
    <div>
      <mt-swipe class="swipe">
        <mt-swipe-item>
          <img src="../assets/shopcart_img/swipe1.jpg" class="swipe_img" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="header">
      <router-link to="/car">
        <img src="../assets/shopcart_img/left.png" alt="" />
      </router-link>
      <div class="header_bi">
        <router-link to="/shopcart">
          <img src="../assets/shopcart_img/bi.png" alt="" />
        </router-link>
        <router-link to="/shopcart">
          <img src="../assets/shopcart_img/fenxiang.png" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 头部导航栏样式 */
.cart .header {
  position: absolute;
  top: 30px;
  width: 335px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
/* 轮播图片大小 */
.cart .swipe_img {
  height: 200px;
  width: 375px;
}
/* 轮播图大小 */
.cart .swipe {
  height: 200px;
}
</style>
