App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    my.tb.checkShopFavoredStatus({
    id: 7020375952,
    success: (res) => {
      console.log(res)
    },
    fail: (res) => {
        my.alert({ content: "fail" })
    }
})
  },
  onTabItemTap(){
    console.log('ss')
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
