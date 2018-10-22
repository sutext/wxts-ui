Page({
  data: {
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
