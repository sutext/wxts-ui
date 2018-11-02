
var env = require('../config')
Component({
    properties: {
        ctstyle: {
            type: String,
            value: env.poper.ctstyle
        },
        closer: {
            type: Boolean,
            value: env.poper.closer
        },
        zindex: {
            type: Number,
            value: env.poper.zindex
        }
    },
    data: {
        isShow: false,
    },
    methods: {
        _ignore() { },
        toggle() {
            if (this.data.isShow) {
                this.dismiss()
            } else {
                this.present()
            }
        },
        present() {
            this.setData({ isShow: true })
            this.wpani = this.wpani || wx.createAnimation({ duration: 350 })
            let wpani = this.wpani.opacity(1).step().export()
            setTimeout(() => {
                this.setData({ wpani })
            }, 100);
        },
        dismiss() {
            let wpani = this.wpani.opacity(0).step().export()
            this.setData({ wpani })
            setTimeout(() => {
                this.setData({ isShow: false })
            }, 350);
        },
    }
})