if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/_mini-ali-ui-rpx@1.1.4@mini-ali-ui-rpx/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/_mini-ali-ui-rpx@1.1.4@mini-ali-ui-rpx/es/title/index?hash=caaf058f99517f81cc1f6de01841ac10191c8022');
require('../../node_modules/_mini-ali-ui-rpx@1.1.4@mini-ali-ui-rpx/es/calendar/index?hash=caaf058f99517f81cc1f6de01841ac10191c8022');
require('../../pages/index/index?hash=5b6be038e537c18b7f83f5dfa51e988fa9e1b850');
require('../../pages/shop/shop?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/task/task?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/back/back?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}