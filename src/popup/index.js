Component({
    properties: {
        position: {
            type: String,
            value: "bottom"//top bottom
        },
        ctheight: {
            type: String,
            value: '0px',
        },
        ctoffset: {
            type: String,
            value: "0px"
        },
        ctstyle: {//用于覆盖默认的content style 设置
            type: String,
            value: ''
        }
    },
    data: {
        isShow: false
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
            this.wpani = this.wpani || wx.createAnimation({ duration: 250 })
            this.ctani = this.ctani || wx.createAnimation({ duration: 250, timingFunction: "ease" })
            this.setData({ isShow: true, ctoffset: "-" + this.data.ctheight })
            setTimeout(() => {
                let ctani = this.ctani[this.data.position](0).step().export()
                let wpani = this.wpani.opacity(1).step().export()
                this.setData({ wpani, ctani, ctoffset: 0 })
                if (typeof finish === 'function') {
                    finish()
                }
            }, 200);
        },
        dismiss(finish) {
            if (this.data.isShow) {
                let ctani = this.ctani[this.data.position]("-" + this.data.ctheight).step().export()
                let wpani = this.wpani.opacity(0).step().export()
                this.setData({ ctani, wpani })
                setTimeout(() => {
                    this.setData({ isShow: false, ctoffset: "-" + this.data.ctheight })
                    if (typeof finish === 'function') {
                        finish()
                    }
                }, 250);
            }
        }
    }
})