const app = getApp(); 
Page({
  data: {
    nickName:null,
    appid:null,
    options:null
  },
  onLoad(q) {
    app.cloud.function.invoke('getContext').then(res => {
      this.setData({
        appid:JSON.stringify(res.sourceMiniAppId)
      });
    })  
    app.getUserInfo().then(user =>{
      this.setData({
        nickName: user.nickName
      });
    });
  },
  onReady() {
    // 页面加载完成


  },
  onShow() {

    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  },
  onNavigateTo(event){
    my.switchTab({ url: event.target.dataset.url })
  }
});
