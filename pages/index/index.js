const app = getApp();
Page({
  data: {
    tags: ['月光族', '程序员', '女装大佬', '多才多艺'],
    hotList: [
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
  onLoad(query) {
    //  my.alert({

    //   title: JSON.stringify(query),

    // });
    app.getUserInfo().then(user =>{
      // console.log(user, app.brandName)
    }
      
    );
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
