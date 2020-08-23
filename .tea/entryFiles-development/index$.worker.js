if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

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

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../node_modules/mini-ali-ui-rpx/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui-rpx/es/title/index?hash=4dc76819ab39c9009cae231986217ccac63ee3f3');
require('../../node_modules/mini-ali-ui-rpx/es/calendar/index?hash=4dc76819ab39c9009cae231986217ccac63ee3f3');
require('../../components/integral/integral?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/voucher/voucher?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/taskItem/taskItem?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui-rpx/es/footer/index?hash=4dc76819ab39c9009cae231986217ccac63ee3f3');
require('../../pages/index/index?hash=2c19e98688804d4ed54f7e29aea08a1d78714096');
require('../../pages/shop/shop?hash=9e386d141940c444c44ef13d841d4e7f0ff36345');
require('../../pages/task/task?hash=c25734f171f608b46a43e8a3f6b584ed63da4c0a');
require('../../pages/user/user?hash=d1566b92875377891de9996c905e721f10edf60c');
require('../../pages/back/back?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}