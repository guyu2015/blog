//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/product12000712.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/11.jpg',
      'http://flower2.oss-cn-hangzhou.aliyuncs.com/youwx/images/homepage/product/product12000701.jpg'
    ],
    circular : true,
    autoplay: true,
    indicatorDots: true,
    interval: 2000,
    duration: 1000,
    motto: 'Hello World',
    userInfo: {},
    imgUrl:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //提示框
  bindToast:function(){
    wx.showModal({
      // title: '提示',
      content: '您现在没有优惠券，快来剁手吧',
      success: function (res) {
        console.log('用户点击确定')
        // if (res.confirm) {
        //   console.log('用户点击确定')
        // } else {
        //   console.log('用户点击取消')
        // }
      }
    })
  },
  //换头像
   bindImg : function(){
     var page=this;
     wx.chooseImage({
       count: 1, // 默认9
       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
       success: function (res) {
         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
         var tempFilePaths = res.tempFilePaths
         console.log(tempFilePaths)
        page.setData({imgUrl:tempFilePaths})
       }
     })
   },
  //跳转页面
  bindStart:function(){
    wx.redirectTo({
      url: '../order/order'
    })
  },
  //rank
  bindRank:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  //扫码支付
  bindScan:function(){
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  bindCall:function(){
    wx.makePhoneCall({
      phoneNumber: '13126583842' //仅为示例，并非真实的电话号码
    })
  },
  //banner
  bindDetail:function(){
    wx.redirectTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
