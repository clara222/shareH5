<template>
  <div class="hello">
    <div class = "imgCenter">
      <img :src="imgUrl" alt="" class="imgStyle">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imgUrl: ""
    };
  },
  created() {
    //前端分享的二维码地址：https://stg-pteppp.leanapp.cn/h5/reportAnalysis/index.html?data=%7B%22user%22%3A%225a4cb45417d009088dd50b9c%22%2C%22bad%22%3A%22DI.RA%22%2C%22good%22%3A%22WE.SST.SWT%22%2C%22beat%22%3A35%2C%22l%22%3A59%2C%22s%22%3A51%2C%22r%22%3A64%2C%22w%22%3A78%7D#/
    let url = window.location.href;
    var wxn = url.indexOf("from");
    //海报生成的二维码地址：https://stg-pteppp.leanapp.cn/h5/reportAnalysis/index.html?frompteuser=5a4cb45417d009088dd50b9c扫描二维码授权
    var n = url.indexOf("frompteuser");
    if (n !== -1) {
      //如果当前路由中有frompteuser字段，跳转授权页
      var userId = url.slice(n + 12);
      if (userId.length < 30) {
        this.$router.push(`/page_relation?frompteuser=${userId}`);
      }
    } else {
      if (wxn !== -1) {
        url = url.slice(0, wxn - 1);
        this.$emit("getPageUrl", url);
        this.getImageUrl(url);
      } else {
        //将当前可以分享的地址发给App.vue
        this.$emit("getPageUrl", url);
        this.getImageUrl(url); 
      }
    }
  },
  methods: {
    getImageUrl(url) {
      var dataIndex = url.indexOf("data");
      url = url.slice(dataIndex + 5).split("#/");
      url = decodeURIComponent(url[0]);
      var linkData = JSON.parse(url);
      var link =
        "https://stg-pteppp.leanapp.cn/h5/reportAnalysis/poster?user=" +
        linkData.user +
        "&l=" +
        linkData.l +
        "&s=" +
        linkData.s +
        "&w=" +
        linkData.w +
        "&r=" +
        linkData.r +
        "&good=" +
        linkData.good +
        "&bad=" +
        linkData.bad +
        "&beat=" +
        linkData.beat;
      this.imgUrl = link;
      console.log(this.imgUrl);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #000;
}
.imgCenter {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.imgStyle {
  width: 100vw;
  vertical-align: middle;
}
</style>
