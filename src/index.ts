interface ButtonReporter {
    (formId: string): void
}
/**
 * @param line 线框颜色 theme=line时生效 默认为全局theme color
 * @param fill 填background theme=fill时生效 默认为全局theme color
 * @param text 标题字体色 默认为全局theme color
 */
interface ButtonColor {
    line?: string
    fill?: string
    text?: string
}
type ButtonTheme = 'fill' | 'line' | 'image' | 'row' | 'column'
/**
 * @description 全局button 样式设置，如果具体的button 设置了相应的变量，将以具体设置优先
 * @event login detail: { iv, rawData }
 * @event click detail: { iv, rawData }
 * @param color 默认颜色设置
 * @param theme 默认主题
 * @param reporter 全局report回调
 */
interface ButtonConfig {
    readonly color: ButtonColor
    theme: ButtonTheme
    reporter?: ButtonReporter
}
/**
 * @param on 点亮的星星的图片地址，本地图片请用绝对路径
 * @param off 点亮的星星的图片地址，本地图片请用绝对路径
 */
interface GraderIcon {
    on: string
    off: string
}
interface GraderThemes {
    [type: string]: GraderIcon
}
/**
 * @description 评星控件
 * @event change detail: { value: score }
 * @param color 分数颜色
 * @param type 默认主题类型 theme
 */
interface GraderConfig {
    color?: string
    type: string
    size: number
    readonly themes: GraderThemes
}
/**
 * @description 气泡弹窗的全局设置
 * @param ctstyle content style @default  ''
 * @param closer show closer or not @default  true
 * @param zindex the modal zindex @default  100
 */
interface PoperConfig {
    ctstyle: string
    closer: boolean
    zindex: number
}

/**
 * @description 模态弹窗的全局设置
 * @param ctstyle content style @defualt  ''
 * @param position the modal presen position @default  'bottom'
 * @param ctheight the content height. @default  '0px'
 * @param zindex the modal zindex @default  100
 */
interface PopupConfig {
    ctstyle: string
    position: 'bottom' | 'top'
    ctheight: string
    zindex: number
}
/**
 * @description 搜索框全局配置
 * @event typing detail: { value }
 * @event clear detail: {  }
 * @event cancel detail: {  }
 * @param interval 键入自动触发搜索的频率 @default 1000
 * @param focus 是否自动聚焦 @default false
 */
interface SearchConfig {
    interval: number
}
/**
 * @description 工具栏全局配置
 * @param camber bottom camber height @default 0
 * @param ctstyle content style @defualt  ''
 */
interface ToolbarConfig {
    camber: number
    ctstyle: string,
}
/**
 * @description 导航栏全局配置
 * @event back detail: {  }
 * @param back retrun icon config @default null when null use build-in retrun arrow icon
 * @param color text and defalut return bar color @default black
 * @param title 导航标题
 * @param ctstyle content style @defualt  ''
 */
interface NavbarConfig {
    back?: { width: number, height: number, src: string }
    title?: string
    color: string
    ctstyle: string,
}
/**
 * @description 全局控件配置
 * @event delete detail: {  } for slidbar
 * @event click detail: {  } for slidbar
 * @event change detail: { value } segment
 * @param theme 全局主题色 exp '#ffca50'
 * @param button 全局button 设置
 * @param grader 全局评星器设置
 * @param poper 全局气泡弹窗设置
 * @param popup 全局模态弹窗设置
 */
class Config {
    public theme: string = "#ffca50"
    public readonly button: ButtonConfig = { color: {}, theme: 'line' }
    public readonly grader: GraderConfig = { themes: {}, type: 'theme', size: 12 }
    public readonly poper: PoperConfig = { ctstyle: '', closer: true, zindex: 100 }
    public readonly popup: PopupConfig = { ctstyle: '', ctheight: '0px', position: 'bottom', zindex: 100 }
    public readonly search: SearchConfig = { interval: 1000 }
    public readonly navbar: NavbarConfig = { color: 'black', ctstyle: '' }
    public readonly toolbar: ToolbarConfig = { camber: 0, ctstyle: '' }
}
/**@description 全局配置句柄 */
export const conf = new Config()

declare function Behavior({ })
/**
 * @description 模态弹窗需从继承此 Behavior，主要用于poper 和popup 的二次封装
 * @description 模态弹窗的z-index设置为100
 * @description 此时wxts的Widget将具备模态弹窗的相关方法
 * @description wxml 文件中<popup></popup>或<poper></poper>标签必须设置id=‘modal’
 * @example 
 * ``
 * import { widget, Widget } from 'wxts'
 * export default class Index extends Widget  {
 *     behaviors = [modal]
 *     properties = {
 *          example: {
 *              type: String,
 *              value: "#ab1222"
 *          }
 *     }
 *     ...
 *     ...
 * }
 * json
 * {
 *      "component": true,
 *      "usingComponents": {
 *           "poper": "wxts-ui/poper"
 *      }
 * }
 * wxml
 * <popup id="modal" ctheight="320px" position='bottom' ctstyle="background-color: red;">
 *      <view>test1</view>
 *      <view>test2</view>
 * </popup>
 * ``
 */
export const modal: any = Behavior({
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