import * as conf from './config'
import * as modal from './modal'
export { conf, modal }
export interface IModal {
    readonly isShow: () => boolean
    readonly toggle: () => void
    readonly present: () => void
    readonly dismiss: () => void
}