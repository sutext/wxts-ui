
let showedCell = null
Component({
    properties: {
        arrow: Boolean,
        hover: Boolean,
        ctstyle: {
            type: String,
            value: ''
        },
        showed: {
            type: Boolean,
            value: false,
            observer: "_showedChange"
        }
    },
    ready() {
        var _this = this
        this.createSelectorQuery().select('#container').boundingClientRect(function (rect) {
            _this.setData({ width: rect['width'] })
        }).exec()
    },
    detached() {
        if (showedCell === this) {
            showedCell = null
        }
    },
    methods: {
        _showedChange(newval) {
            const x = newval ? -80 : 0
            this.setData({ x })
            if (showedCell && showedCell !== this) {
                showedCell.setData({ showed: false })
            }
            showedCell = this
        },
        onTouchStart: function onTouchStart(e) {
            this._startX = e.changedTouches[0].pageX;
        },
        onTouchEnd: function onTouchEnd(e) {
            const offset = e.changedTouches[0].pageX - this._startX
            if (Math.abs(offset) > 40) {
                this.setData({ showed: !this.data.showed })
            } else {
                this.setData({ x: (this.data.showed ? -80 : 0) })
            }
        },
        _onDelete() {
            if (this.data.showed) {
                this.triggerEvent('delete')
            }
        },
        _onClicked() {
            if (!this.data.showed) {
                this.triggerEvent('click')
            }
        },
    }
})