// pages/page2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datax:null,
    datay:null,
    dataz:null,
    direction:null,
    tdatax: null,
    tdatay: null,
    tdataz: null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.startGyroscope().success(res){
    //   console.log(res)

    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  btnstart: function(e) {
    var that=this;
    console.log("start")
    wx.onAccelerometerChange(function(res) {
      that.setData({
        datax:res.x,
        datay:res.y,
        dataz:res.z,
      },
      )
    })
    wx.onCompassChange(function(res){
      that.setData({
        direction:res.direction
      })

      
    })
  //   // 陀螺仪
  //   wx.onGyroscopeChange(function(res){
  //     console.log("陀螺仪")
  //     that.setData({
  //       tdatax: res.x,
  //       tdatay:res.y,
  //       tdataz:res.z
  //     })
  //     console.log(res)
  //   })
  // },
  },

  btnover: function(e) {
    console.log("over")
  },
  btncancel: function(e) {
    console.log("cancel")
  },
  btnmove: function(e) {
    console.log(e)
    console.log("move")
  },
  btnlongtap: function(e) {
    console.log("long tap")
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
      },
    })
  }
})