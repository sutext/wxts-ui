interface ButtonReporter {
    (formId: string): void
}
interface ButtonColor {
    /**@description 线框颜色 theme=line时生效 默认为全局theme color */
    line?: string
    /**@description 背景填充色 theme！=line时生效 默认为全局theme color */
    fill?: string
    /**@description 文字颜色 theme！=line时生效 默认为全局theme color */
    text?: string
}
type ButtonTheme = 'fill' | 'line' | 'image' | 'row' | 'column'
/**
 * @description 全局button 样式设置，如果具体的button 设置了相应的变量，将以具体设置优先
 * @event login detail: { iv, rawData }
 * @event click detail: { iv, rawData }
 */
interface ButtonConfig {
    /**@description 全局按钮颜色配置 */
    readonly color: ButtonColor
    /**@description 全局按钮默认theme */
    theme: ButtonTheme
    /**@description 全局按钮点击 report回调 */
    reporter?: ButtonReporter
}
interface GraderIcon {
    /**@description 点亮的星星的图片地址，本地图片请用绝对路径 */
    readonly on: string
    /**@description 点亮的星星的图片地址，本地图片请用绝对路径 */
    readonly off: string
}
interface GraderThemes {
    [type: string]: GraderIcon
}
/**
 * @description 评星控件
 * @event change detail: { value: score }
 */
interface GraderConfig {
    /**@description 分数文字颜色 */
    color?: string
    /**@description 默认主题配置 此值必须为themes中的一个key */
    theme: string
    /**@description 星星尺寸 */
    size: number
    /**@description 所有的主题配置 */
    readonly themes: GraderThemes
}
/**
 * @description 气泡弹窗的全局设置
 */
interface PoperConfig {
    /**@description 气泡弹窗默认 content style @defualt  '' */
    ctstyle: string
    /**@description 是否显示 圆形x作为关闭按钮 @default  false */
    closer: boolean
    /**@description 气泡弹窗默认  zindex @default  100 */
    zindex: number
}

/**
 * @description 模态弹窗的全局设置
 */
interface PopupConfig {
    /**@description 模态弹窗默认 content style @defualt  '' */
    ctstyle: string
    /**@description 模态弹窗出现的位置 */
    position: 'bottom' | 'top'
    /**@description 模态弹窗默认 content height @defualt  0px */
    ctheight: string
    /**@description 模态弹窗默认 zindex @default  100 */
    zindex: number
}
/**
 * @description 搜索框全局配置
 * @event typing detail: { value }
 * @event clear detail: {  }
 * @event cancel detail: {  }
 * @param focus 是否自动聚焦 @default false
 */
interface SearchConfig {
    /**@description 键入自动触发搜索的频率 @default 1000毫秒 */
    interval: number
}
/**
 * @description 工具栏全局配置
 */
interface ToolbarConfig {
    /**@description 工具栏下边弧形高度，一般为0若是全面屏则大于0 */
    camber: number
    /**@description 工具栏栏默认真实节点 style @defualt  '' */
    ctstyle: string
}
/**
 * @description 导航栏全局配置
 * @event back detail: {  }
 */
interface NavbarConfig {
    /**@description 导航栏自定返回按钮 */
    back?: { width: number, height: number, src: string }
    /**@description 导航栏默认标题 */
    title?: string
    /**@description 导航栏默认文字和箭头颜色 style @defualt  black */
    color: string
    /**@description 导航栏默认真实节点 style @defualt  '' */
    ctstyle: string
}
/**
 * @description 全局控件配置
 * @event delete detail: {  } for slidbar
 * @event click detail: {  } for slidbar
 * @event change detail: { value } segment
 */
class Config {
    /**@description 全局主题色 @example '#ffca50' */
    public theme: string = "#ffca50"
    /**@description 全局button 配置 */
    public readonly button: ButtonConfig = { color: {}, theme: 'line' }
    /**@description 全局评星控件 配置 */
    public readonly grader: GraderConfig = { themes: {}, theme: 'default', size: 12 }
    /**@description 全局气泡弹窗 配置 */
    public readonly poper: PoperConfig = { ctstyle: '', closer: false, zindex: 100 }
    /**@description 全局模态弹窗 配置 */
    public readonly popup: PopupConfig = { ctstyle: '', ctheight: '0px', position: 'bottom', zindex: 100 }
    /**@description 全局搜索框配置 配置 */
    public readonly search: SearchConfig = { interval: 1000 }
    /**@description 全局自定义导航栏配置 配置 */
    public readonly navbar: NavbarConfig = { color: 'black', ctstyle: '' }
    /**@description 全局工具栏配置 配置 */
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