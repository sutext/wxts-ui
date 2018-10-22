declare function Behavior({ })
const modal: any = Behavior({
    created() {
        this.modal = this.selectComponent('#modal')
    },
    methods: {
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
export = modal