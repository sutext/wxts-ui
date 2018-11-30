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
 * @param ctstyle content style defualt is ''
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
 * @param interval 键入自动触发搜索的频率 @default 1000
 * @param focus 是否自动聚焦 @default false
 */
interface SearchConfig {
    interval: number
}
/**
 * @description 全局控件配置
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
}
const conf = new Config
export = conf