// pages/home/query/own/own.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var own = wx.getStorageSync('ownInfo');
      this.setData({
        data: own
   })
  //  this.setData({
  //    data:JSON.parse(options.own)
  //  })
  },
  onUnload: function () {
    wx.clearStorageSync('ownInfo');
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})