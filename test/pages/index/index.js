Page({
    data: {
        fillColor: { fill: '#ffca50', text: 'white' },
        disableColor: { fill: '#303030', text: '#999' },
        disabled: true,
        rows: [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
        backconf: { width: 20, height: 20, src: '/pages/index/icon_star_on.png' }
    },
    onLoad() {
        this.popertest = this.selectComponent('#poper-test')
        this.popuptest = this.selectComponent('#popup-test')
    },
    poperTest() {
        // this.popertest.toggle()
        this.setData({ keywords: 'test' })
    },
    popupTest() {
        this.popuptest.toggle()
    },
    onTyping(e) {
        console.log(e.detail.value);
    },
    goBack(e) {
        console.log(e)
    }
})
