// pages/home/query/query.js
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
  
  },
  formSubmit: function (e) {
    var name=e.detail.value.name;
    var studentId=e.detail.value.studentId;
    if (name != "" && (studentId != "" && !isNaN(Number(studentId)) && studentId.length == 10)
    ) {
      wx.request({
        method:"POST",
        url: 'http://localhost:888/api/homepage',
        data: {
          "name": name,
          "studentId": studentId
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if(res.data!=null){
            if(res.data.code=="QM8888"){
              var number = Math.floor(Math.random() * 5000 / 1000);
              wx.setStorageSync('ownInfo', res.data.data);
              setTimeout(() => {
                wx.navigateTo({
                  url: 'own/own?own=' + JSON.stringify(res.data.data),
                })
              }, number);
            }else{
              wx.showToast({
                title: '后台没有这条数据',
                icon: 'none',
                duration: 2000
              })
            }
          }else{
            wx.showToast({
              title: '未找到数据，请重新检查姓名和考生号',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '请重新输入',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onShareAppMessage: function () {
  
  }
})