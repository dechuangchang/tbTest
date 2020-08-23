const app = getApp();
Page({
  data: {
    copyright: '技术支持：©北京客度科技有限公司-互动任务',
    userInfo:{
      avatar:'',
      nickName:'',
    }
  },
  onLoad(query) {
    app.getUserInfo()
    .then(user => {
      this.setData({
        userInfo:user
      })
    });
  },
});
