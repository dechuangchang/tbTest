Page({
  data: {},
  onShow() {
    my.switchTab({
      url:"pages/index/index"
    })
    console.log(1)
  },
  onTabItemTap(){
    console.log('ss')
  },
});
