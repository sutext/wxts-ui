var env = require('../config')
Component({
    properties: {
        theme: {
            type: String,
            value: "line",// line fill image row column
            observer: '_themeChanged'
        },
        color: String,
        report: Boolean,
        openType: String, //the wx button open-type
        src: String, //image src
        text: String, // button title
    },
    ready() {
        this._updateStyle()
    },
    methods: {
        _ignore() { },
        _themeChanged(newval) {
            this._updateStyle()
        },
        _updateStyle() {
            var style = ''
            if (this.data.theme === 'fill') {
                var fillColor = this.data.color || env.button.fillColor || env.theme
                style = `background-color:${fillColor};`
            } else if (this.data.theme === 'line') {
                var lineColor = this.data.color || env.button.lineColor || "#dbdbdb"
                var color = this.data.color || env.button.textColor || '#343434'
                style = `color:${color};border: 1px solid ${lineColor};`
            }
            this.setData({ style })
        },
        _onUserInfo(e) {
            var iv = e.detail.iv
            var rawData = e.detail.encryptedData
            if (iv && rawData) {
                this.triggerEvent('login', { iv, rawData })
            }
        },
        _onClick(e) {
            var detail = {}
            var formId = e.detail.formId
            detail.formId = formId
            if (env.button.reporter || formId) {
                env.button.reporter(formId)
            }
            this.triggerEvent('click', detail)
        }
    }
})