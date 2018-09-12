<template>
  <div>

  </div>
</template>

<script>
// import wx from'weixin-js-sdk'

export default {
  name: 'page_relation',
  data () {
    return {
    
    }
  },
  created() {
    var uid = this.$route.query.frompteuser;
    console.log(uid)
    this.todo(uid)
  },

  methods: {
    todo(userId){
    let url = 'https://stg-pteppp.leanapp.cn/h5/reportAnalysis/relation?frompteuser=' + userId;
    url = encodeURIComponent(url);                     
    console.log('回调地址为：'+'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6e8235ac81ee7570&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')
    window.location.href ='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6e8235ac81ee7570&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
  }
        
      
    
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
