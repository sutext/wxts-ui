
var env = require('../index').conf
Component({
    properties: {
        value: {
            type: String,
            value: "",
            observer: '_valueChange'
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
            }, env.search.interval);
        },
        _valueChange(newval) {
            this.setData({ showClear: newval.length > 0 })
        },
        _clearInput(e) {
            this.setData({ value: "", showClear: false })
            this.triggerEvent("clear")
        },
        _onCancel() {
            this.triggerEvent("cancel")
        }
    }
})