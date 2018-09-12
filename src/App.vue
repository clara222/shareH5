<template>
  <div id="app">
    <router-view @getPageUrl="getPageUrl"/>
  </div>
</template>

<script>

import wx from'weixin-js-sdk'
import axios from 'axios';
export default {
  name: 'App',
  data () {
    return {
      pageUrl: ''
    }
  },
  watch: {
    '$route': function (n, o) {
      this.reqConfig()
    }
  },
  mounted () {
    this.reqConfig()
  },
  methods: {
    getPageUrl (n) {
      this.pageUrl = n    
    },
    reqConfig() {
      var imgUrl ='';
      var shareLink = this.pageUrl;  
     
      axios.get('/h5/jsconfig',{
        params:{    
          'url': window.location.href,
        }
      }).then((response) => {
        console.log(response.data);
        
        wx.config({
        debug: response.data.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: response.data.appId, // 必填，公众号的唯一标识
        timestamp: response.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: response.data.nonceStr, // 必填，生成签名的随机串
        signature: response.data.signature,// 必填，签名，见附录1
        jsApiList: response.data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
        wx.ready(() => {
          // 分享到朋友
          wx.onMenuShareAppMessage({
            title: 'PTE成绩单免费智能分析',
            desc: '全网首发，成绩单分析。以后再也不用求人了！',
            link: shareLink,
            imgUrl: 'https://static.prim.im/bf3bf28319e302549097.jpeg',  //必须是服务器的图片地址
            success: function() {
              console.log('分享成功')
            },
            cancel: function() {
              console.log('取消分享')
            }
          });
          // 分享给朋友圈
          wx.onMenuShareTimeline({
            title: 'PTE成绩单免费智能分析', // 分享标题
            link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://static.prim.im/bf3bf28319e302549097.jpeg', // 分享图标
            success: function () {
              // 用户点击了分享后执行的回调函数
            },
            cancel: function() {
            
            }
          });
        
      })
        
      }).catch( ()=> {
        console.log('err');
      })
    }       
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
