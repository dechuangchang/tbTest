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
require('../../pages/index/index?hash=c7ce50f43e06c27e84ed556b843f26b2733b984f');
require('../../pages/shop/shop?hash=672a834b7220996eeb6dcb0f6cd867a870c8310c');
require('../../pages/task/task?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/back/back?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}