App({
  userInfo: null,
  brandName:null,
  onLaunch(options) {
    //模板数据， 从ext.json的ext中读取
    my.alert({

      title: JSON.stringify(options),
    
    });
    my.getExtConfig({ success: (res) => { 
      this.brandName =  res.data.brandName
    }})
    
    
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) {
        resolve(this.userInfo);
      } else {
        // mock api
        my.getAuthUserInfo({
          success:  (userInfo) => {
            this.userInfo =  userInfo;
            resolve(this.userInfo);
          }
        });
        
      }
    });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    // 第一次打开
    
    
  },
});
