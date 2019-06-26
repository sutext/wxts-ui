var env = require('../index').conf
Component({
    properties: {
        position: {
            type: String,
            value: env.popup.position//top bottom
        },
        ctheight: {
            type: String,
            value: env.popup.ctheight,
        },
        ctstyle: {//用于覆盖默认的content style 设置
            type: String,
            value: env.popup.ctstyle
        },
        zindex: {
            type: Number,
            value: env.popup.zindex
        }
    },
    data: {
        isShow: false,
        ctoffset: "0px"
    },
    ready() {
        this.setData({ ctoffset: "-" + this.data.ctheight })
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
        present(finish) {
            if (this.data.isShow) {
                return
            }
            this.setData({ isShow: true, opacity: 0, ctoffset: "-" + this.data.ctheight })
            var _this = this
            setTimeout(function () {
                _this.setData({ ctoffset: "0px", opacity: 1 })
                if (typeof finish === 'function') {
                    finish()
                }
            }, 100);
        },
        dismiss(finish) {
            if (this.data.isShow) {
                this.setData({ opacity: 0, ctoffset: "-" + this.data.ctheight })
                var _this = this
                setTimeout(function () {
                    _this.setData({ isShow: false })
                    if (typeof finish === 'function') {
                        finish()
                    }
                }, 250);
            }
        }
    }
})