const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var sliderDatas = [
      {
        url: '',
        src: '../../images/a.png'
      }
    ]
    this.setData({ 'sliderDatas': sliderDatas })
    var moudles = [
      {
        url: 'query/query',
        src: '/images/query.png',
        text: '代取服务'
      },
      {
        url: 'more/more',
        src: '/images/more.png',
        text: '更多'
      }
    ]
    this.setData({ 'moudles': moudles })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})