interface ButtonReporter {
    (formId: string): void
}
/**
 * @param line theme 为line 是的border color 和 text color 默认为 全局theme color
 * @param fill theme 为fill 时的填充色 默认为 全局theme color
 * @param text 标题字体色 默认为 全局theme color
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
 * @param ctstyle content style defualt is ''
 * @param closer show closer or not default is true
 * @param zindex the modal zindex default is 100
 */
interface PoperConfig {
    ctstyle: string
    closer: boolean
    zindex: number
}

/**
 * @description 模态弹窗的全局设置
 * @param ctstyle content style defualt is ''
 * @param position the modal presen position default is 'bottom'
 * @param ctheight the content height. default is '0px'
 * @param zindex the modal zindex defualt is 100
 */
interface PopupConfig {
    ctstyle: string
    position: 'bottom' | 'top'
    ctheight: string
    zindex: number
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
}
const conf = new Config
export = conf