//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        red: '#228B22',
        loadingHidden: true,  // loading
        images: ['https://gd1.alicdn.com/imgextra/i1/3709723567/O1CN01SjxPjN1cDjLGv1OeD_!!3709723567.jpg_400x400.jpg', 'https://gd1.alicdn.com/imgextra/i1/3709723567/O1CN0145XEGf1cDjLMvSBam_!!3709723567.jpg_400x400.jpg', 'https://gd2.alicdn.com/imgextra/i2/3709723567/O1CN01fQ3IQo1cDjLMieC8P_!!3709723567.jpg_400x400.jpg']
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    // onLoad: function() {
    //     console.log('onLoad')
    //     var that = this
    //         //调用应用实例的方法获取全局数据
    //     app.getUserInfo(function(userInfo) {
    //         //更新数据
    //         that.setData({
    //             userInfo: userInfo
    //         })
    //     })

    //     //sliderList 
    //     // wx.request({
    //     //   url: 'http://zms123.51vip.biz/test/test',
    //     //     method: 'GET',
    //     //     // data: {},
    //     //     header: {
    //     //         'Accept': 'application/json'
    //     //     },
    //     //     success: function(res) {
    //     //       console.log(res)
    //     //         that.setData({
    //      //           images: res.data
    //     //         })
    //     //       loadingHidden: false;
    //     //     }
    //     // })

    //   //productItem
        
    //     wx.request({
    //       url: 'http://zms123.51vip.biz/wemall/venues/venuesList',
    //         method: 'GET',
    //         data: {},
    //         header: {
    //             'Accept': 'application/json'
    //         },
    //         success: function(res) {
    //             that.setData({
    //               productItem: data.data
    //             })
    //             setTimeout(function () {
    //                 that.setData({
    //                     loadingHidden: true
    //                 })
    //             }, 1500)
    //         }
    //     })

    //     choiceList
    //     wx.request({
    //         url: 'http://zms123.51vip.biz/wemall/goods/choiceList',
    //         method: 'GET',
    //         data: {},
    //         header: {
    //             'Accept': 'application/json'
    //         },
    //         success: function(res) {
    //             that.setData({
    //                 choiceItems: [1,2,3]
    //             })
    //             setTimeout(function () {
    //                 that.setData({
    //                     loadingHidden: true
    //                 })
    //             }, 1500)
    //         }
    //     })

    // }
})
