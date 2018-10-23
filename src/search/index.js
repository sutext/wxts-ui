
var env = require('../index')
Component({
    properties: {
        value: {
            type: String,
            value: ""
        },
        placeholder: {
            type: String,
            value: "搜索"
        },
        focus: Boolean,
        cancel: Boolean,
        disabled: Boolean
    },
    data: {
        color: env.theme
    },
    methods: {
        _inputTyping(e) {
            let value = e.detail.value
            this.data.value = value
            this.setData({ showClear: value.length > 0 })
            if (this.timer) {
                clearTimeout(this.timer)
            }
            var _this = this
            this.timer = setTimeout(function () {
                _this.triggerEvent('typing', { value })
                _this.timer = null
            }, 1000);
        },
        _clearInput(e) {
            this.setData({ text: "", showClear: false })
            this.triggerEvent("clear")
        },
        _onCancel() {
            this.triggerEvent("cancel")
        }
    }
})