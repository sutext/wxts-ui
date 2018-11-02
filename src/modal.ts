declare function Behavior({ })
const modal: any = Behavior({
    created() {
        this.modal = this.selectComponent('#modal')
    },
    methods: {
        isShow() {
            return this.modal.data.isShow
        },
        toggle() {
            this.modal.toggle()
        },
        present() {
            this.modal.present()
        },
        dismiss() {
            this.modal.dismiss()
        },
    }
})
/**
 * @description 模态弹窗需从继承此 Behavior，主要用于poper 和popup 的二次封装
 * @description 模态弹窗的z-index设置为100
 */
export = modal