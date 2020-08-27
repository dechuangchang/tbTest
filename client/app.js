import cloud from '@tbmp/mp-cloud-sdk';
cloud.init({
  env: 'test'
}); 
App({
  cloud,
  userInfo: null,
  brandName:null,
  options:null,
  onLaunch(options) {
    // console.log(options)
    // this.options = options
    // my.alert({
    //   content:options._ariver_appid
    // });
    //模板数据， 从ext.json的ext中读取
    // console.log(options.referrerInfo.appId)
    // appId
    // this.appId = options.referrerInfo.appId
    // my.getExtConfig({ success: (res) => { 
    //   this.brandName =  res.data.brandName
    // }})
    
    
  },

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) {
        resolve(this.userInfo);
      } else {
        // mock api
        my.authorize({
          scopes: 'scope.userInfo',
          success: (res) => {
            my.getAuthUserInfo({
              success:  (userInfo) => {
                this.userInfo =  userInfo;
                resolve(this.userInfo);
              }
            });
          },
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
