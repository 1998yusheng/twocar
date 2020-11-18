<template>
  <div class="price">
    <div>
      <ul class="price_ul">
        <li>
          <router-link to="/money" class="link">
            ×
          </router-link>
        </li>
        <li>在线估值</li>
        <li>
          <router-link to="price">
            <img src="../assets/me_img/fenxiang (1).png" class="fenxiang" />
          </router-link>
        </li>
      </ul>
      <table class="table">
        <tbody>
          <tr>
            <td width="130px">品牌车型</td>
            <td class="td_two">
              <span>请选择</span>
              <span>></span>
            </td>
          </tr>
          <tr>
            <td>当前里程(万公里)</td>
            <td class="td_two">点击填写公里数</td>
          </tr>
          <tr>
            <td>车辆所在地</td>
            <td class="td_two">
              <span>请选择</span>
              <span>></span>
            </td>
          </tr>
          <tr>
            <td>首次上牌时间</td>
            <td class="td_two">
              <span>请选择</span>
              <span>></span>
            </td>
          </tr>
          <tr>
            <td>接受手机</td>
            <td class="td_two">
              请填写手机号
            </td>
          </tr>
          <tr>
            <td>卖车意向</td>
            <td class="td_two">
              <span>请选择</span>
              <span>></span>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="price_p">在线估值</p>
    </div>
    <div class="down">
      <div>
        <p>该估值价格仅供参考，最终成交价格售车辆实际车况，买卖家</p>
        <p>心理等因素影响</p>
        <p>车300、公平价提供技术支持</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price .fenxiang {
  width: 22px;
}
/* 底部标签样式 */
.price .down div {
  padding-top: 100px;
}
/* 底部 p 标签样式 */
.price .down p {
  margin-top: 5px;
}
/* 总体背景设置 */
.price .down {
  background: #e8e8e8;
  height: 270px;
  font-size: 12px;
  color: #666;
  text-align: center;
}
/* 在线估值按钮标签 */
.price .price_p {
  margin: 20px 10px;
  color: #fff;
  background-color: orangered;
  padding: 10px;
  border-radius: 3px;
  text-align: center;
}
/*  第一个 li 样式*/
.price .link {
  text-decoration: none;
  color: #000;
}
.price .price_ul :nth-child(1) {
  font-size: 30px;
}
/* 顶部标题标签样式 */
.price .price_ul {
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
  line-height: 30px;
}
/* table 中右侧 td 样式 */
.price .td_two {
  color: #ccc;
  display: flex;
  justify-content: space-between;
}

/* table 标签总体宽度 */
.price .table {
  width: 340px;
  font-size: 14px;
  color: #333;
  margin: 0 auto;
}

/* 每个标签内边距 */
.price .table td {
  padding: 15px 0;
}
/* 下边线 */
.price .table tr {
  border-bottom: 1px solid #e8e8e8;
}
</style>
