Page({
  data: {
    list: [
      {
        name: '生日登记',
        name2: '会员生日登记',
        num: '100',
        type: 1,
      },
      {
        name: '邀请好友收藏店铺',
        name2: '',
        num: '50',
        type: 2,
      },
      {
        name: '收藏店铺',
        name2: '',
        num: '20',
        type: 3,
      },
      {
        name: '签到送积分',
        name2: '',
        num: '1',
        type: 4,
      }
    ]
  },
  onLoad() {
    my.setNavigationBar({
      title: '积分任务',
      backgroundColor: '#000',
    });
  },

});
