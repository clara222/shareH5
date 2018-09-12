# shareH5
网页上扫描二维码用微信打开的h5页面:

1. 由于这个h5网页是后端生成的图片，当扫描图片中的二维码时需进行授权，所以在/（根页面）对路由参数进行判断。跳转到授权页面时携带分享的用户信息.

2. 由于官方文档所说：**通过config接口注入权限验证配置**

   所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用）所以获取签名的代码写在App.vue文件里。created钩子函数里调用一次。watch到route变化时也调用一次。

3. 分享给好友、分享到朋友圈时，发现左小角的图标找不到。正确做法时将这些图片放到服务器上。url使用服务器的链接。

4. 分享的link，根据分享后用户需要看到的内容而定，需要在子组件将link，emit到App.vue里进行获取。

5. 打包到服务器时发现文件都404，在vue-cli2.0的处理方式是：

​           build -> config -> index.js -> build{} -> assetsPublicPath: './'

![assetsPublicPath: './'](https://github.com/clara222/shareH5/blob/master/src/assets/1.png)