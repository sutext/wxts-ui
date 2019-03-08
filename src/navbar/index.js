var env = require('../config')
Component({
    properties: {
        back: {
            type: Object,
            value: env.navbar.back
        },
        title: {
            type: String,
            value: env.navbar.title
        },
        color: {
            type: String,
            value: env.navbar.color
        },
        ctstyle: {
            type: String,
            value: env.navbar.ctstyle
        },
    },
    data: {
        camber: wx.getSystemInfoSync().statusBarHeight
    },
    methods: {
        _onBack() {
            if (this.data.back) {
                this.triggerEvent('back')
            } else {
                wx.navigateBack()
            }
        }
    }
})