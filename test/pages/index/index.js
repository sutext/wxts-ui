Page({
    data: {
        fillColor: { fill: '#ffca50', text: 'white' },
        disableColor: { fill: '#303030', text: '#999' },
        disabled: true
    },
    onLoad() {
        this.popertest = this.selectComponent('#poper-test')
        this.popuptest = this.selectComponent('#popup-test')
    },
    poperTest() {
        this.popertest.toggle()
    },
    popupTest() {
        this.popuptest.toggle()
    }
})
