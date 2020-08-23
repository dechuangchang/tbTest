Page({
  data: {
    types: [
      {
        id: 0,
        name: '全部',
      },
      {
        id: 1,
        name: '积分换礼品',
      },
      {
        id: 2,
        name: '积分换赠品',
      },
      {
        id: 3,
        name: '积分加钱购',
      },
      {
        id: 4,
        name: '积分换代金券',
      },
      {
        id: 5,
        name: '积分换宝贝券',
      },
      {
        id: 6,
        name: '积分换免邮卡',
      },{
        id: 7,
        name: '积分换红包',
      },
      {
        id: 8,
        name: '积分换勋章',
      },
      {
        id: 9,
        name: '积分换优惠券',
      }
    ],
    type: 0,
    voucherList: [
      {
        title: '店铺代金券40元',
        startTime: '2020-06-11 00:00:00',
        endTime: '2020-06-11 00:00:00',
        price: 500,
        people: 111,
        num: 111,
        overDate: '2020-12-11 00:00:00',
      },
      {
        title: '店铺代金券40元',
        startTime: '2020-06-11 00:00:00',
        endTime: '2020-06-11 00:00:00',
        price: 500,
        people: 111,
        num: 111,
        overDate: '2020-06-11 00:00:00',
      },
      {
        title: '店铺代金券40元',
        startTime: '2020-06-11 00:00:00',
        endTime: '2020-06-11 00:00:00',
        price: 500,
        people: 111,
        num: 111,
        overDate: '2020-06-11 00:00:00',
      },
      {
        title: '店铺代金券40元',
        startTime: '2020-06-11 00:00:00',
        endTime: '2020-06-11 00:00:00',
        price: 500,
        people: 111,
        num: 111,
        overDate: '2020-06-11 00:00:00',
      },
      {
        title: '店铺代金券40元',
        startTime: '2020-06-11 00:00:00',
        endTime: '2020-06-11 00:00:00',
        price: 500,
        people: 111,
        num: 111,
        overDate: '2020-06-11 00:00:00',
      },
      {
        title: '店铺代金券40元',
        startTime: '2020-06-11 00:00:00',
        endTime: '2020-06-11 00:00:00',
        price: 500,
        people: 111,
        num: 111,
        overDate: '2020-06-11 00:00:00',
      }
    ]
  },
  onLoad() {
    my.setNavigationBar({
      title: '积分商城',
      backgroundColor: '#000',
    });
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      type: e.detail.value,
    });
  },
});
