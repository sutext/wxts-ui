
var env = require('../config')
Component({
    properties: {
        items: Array,
        value: {
            type: Number,
            value: 0,
            observer: "_valueChanged"
        },
        loading: Boolean
    },
    data: {
        color: env.theme,
        width: 0
    },
    ready() {
        var _this = this
        this.createSelectorQuery().select('#warp').boundingClientRect(function (rect) {
            _this.setData({ width: rect['width'] })
        }).exec()
    },
    methods: {
        _valueChanged(value) {
            this.triggerEvent('change', { value })
        },
        _tapAtIndex(e) {
            let oldval = this.data.value
            let value = e.currentTarget.dataset.idx
            if (oldval != value) {
                this.setData({ value })
            }
        },
    }
})