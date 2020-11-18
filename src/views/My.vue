<template>
  <div class="my">
    <div class="my_input">
      <ul class="my_ul">
        <li>
          <span>用户名：</span>
          <input type="text" value="uname" placeholder="请输入用户名" />
        </li>
        <li>
          <span>密码：</span>
          <input type="text" value="upwd" placeholder="请输入密码" />
        </li>
      </ul>
    </div>
    <div class="denglu" @click="login">登录</div>
  </div>
</template>

<style scoped>
.my .denglu {
  background-color: orange;

  padding: 5px;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  color: #000;
}
.my {
  background-image: url("../assets/my_img/timg.jpg");
  width: 100%;
  height: 650px;
}
.my .my_input {
  margin-bottom: 40px;
}
.my input {
  border: 0;
  opacity: 0.5;
  padding: 5px 10px;
}
.my .my_ul {
  padding-top: 150px;
  text-align: center;
  color: #333;
  width: 280px;
  margin: 0 auto;
}
.my .my_ul span {
  padding: 5px 0;
}
.my .my_ul > li {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
    };
  },
  mounteds: {
    login() {},
  },
};
</script>
