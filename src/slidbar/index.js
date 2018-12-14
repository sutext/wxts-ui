
let showedCell = null
Component({
    properties: {
        arrow: Boolean,
        hover: Boolean,
        ctstyle: {
            type: String,
            value: ''
        }
    },
    data: {
        showed: false
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
        _setShowed(showed) {
            if (showed === this.data.showed) {
                return
            }
            var x = showed ? -80 : 0
            this.setData({ x: x, showed: showed })
            if (showed) {
                if (showedCell && showedCell !== this) {
                    showedCell._setShowed(false)
                }
                showedCell = this
            } else {
                if (showedCell && showedCell === this) {
                    showedCell = null
                }
            }
        },
        onTouchStart(e) {
            this._startX = e.changedTouches[0].pageX;
        },
        onTouchEnd(e) {
            var offset = e.changedTouches[0].pageX - this._startX
            if (Math.abs(offset) > 40) {
                this._setShowed(!this.data.showed)
            } else {
                this.setData({ x: (this.data.showed ? -80 : 0) })
            }
        },
        _onDelete() {
            if (this.data.showed) {
                this.triggerEvent('delete')
                this._setShowed(false)
            }
        },
        _onClicked() {
            if (!this.data.showed) {
                this.triggerEvent('click')
            }
        },
    }
})