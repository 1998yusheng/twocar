<template>
  <div class="my_foot">
    <mt-tabbar v-model="down" fixed class="tabbar">
      <mt-tab-item id="index">
        首页
        <img src="../../assets/img/index_yes.png" slot="icon" v-if="down=='index'" >
        <img src="../../assets/img/index_no.png" slot="icon" v-else >
      </mt-tab-item>
      <mt-tab-item id="car">
        买车
        <img src="../../assets/img/car_yes.png" slot="icon" v-if="down=='car'" >
        <img src="../../assets/img/car_no.png" slot="icon" v-else >
      </mt-tab-item>
      <mt-tab-item id="money">
        卖车
        <img src="../../assets/img/money_yes.png" slot="icon" v-if="down=='money'" >
        <img src="../../assets/img/money_no.png" slot="icon" v-else >
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img src="../../assets/img/me_yes.png" slot="icon" v-if="down=='me'" >
        <img src="../../assets/img/me_no.png" slot="icon" v-else >
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
  .my_foot {
    color: #999;
  }
 
</style>

<script>
export default {
  data(){
    return {
      down:'index'
    }
  },
  mounted(){
   if(this.$route.path=="/index"){
     this.down='index'
   }  
   if(this.$route.path=='/car'){
     this.down='car'
   }
   if(this.$route.path=='/money'){
     this.down='money'
   }
   if(this.$route.path=='/me'){
     this.down='me'
   }
  },
  watch:{
    down(value){
      // 跳转首页
      if(value=='index'){
        this.$router.push('/').catch(e=>{})
      }
      // 跳转买车页面
      if(value=='car'){
        this.$router.push('/car').catch(e=>{})
      }
      // 跳转卖车页面
      if(value=='money'){
        this.$router.push('/money').catch(e=>{})   
      }
      // 跳转我的页面
      if(value=='me'){
        this.$router.push('/me').catch(e=>{})
      }
    }
  },
  '$route':{
    deep:true,
    handler(to,from){
      if(to.path != from.path){
        this.$router.push(to.path)
      }
    }

  }
}
</script>