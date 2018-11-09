
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
            if (this.data.isShow) {
                return
            }
            this.setData({ isShow: true, opacity: 0 })
            var _this = this
            setTimeout(function () {
                _this.setData({ opacity: 1 })
            }, 100);
        },
        dismiss() {
            if (!this.data.isShow) {
                return
            }
            this.setData({ opacity: 0 })
            var _this = this
            setTimeout(function () {
                _this.setData({ isShow: false })
            }, 350);
        },
    }
})