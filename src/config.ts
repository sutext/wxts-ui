interface Reporter {
    (formId: string): void
}
/**
 * @line theme 为line 是的border color 和 text color 默认为 全局theme color
 * @fill theme 为fill 时的填充色 默认为 全局theme color
 * @text 标题字体色 默认为 全局theme color
 */
interface ButtonColor {
    line?: string
    fill?: string
    text?: string
}
type ButtonTheme = 'fill' | 'line' | 'image' | 'row' | 'column'
/**
 * 全局button 样式设置，如果具体的button 设置了相应的变量，将以具体设置优先
 * @color 默认颜色设置
 * @theme 默认主题
 * @reporter 全局report回调
 */
interface Button {
    readonly color: ButtonColor
    theme: ButtonTheme
    reporter?: Reporter
}
/**
 * @on 点亮的星星的图片地址，本地图片请用绝对路径
 * @off 点亮的星星的图片地址，本地图片请用绝对路径
 */
interface GraderIcon {
    on: string
    off: string
}
interface GraderThemes {
    [type: string]: GraderIcon
}
/**
 * 评星控件
 * @color 分数颜色
 * @type 默认主题类型 theme
 */
interface Grader {
    color?: string
    type: string
    readonly themes: GraderThemes
}
/**
 * 全局控件配置
 * @theme 全局主题色 exp '#ffca50'
 * @button 全局button 设置
 * @grader 全局评星器设置
 */
class Config {
    public theme: string = "#ffca50"
    public readonly button: Button = { color: {}, theme: 'line' }
    public readonly grader: Grader = { themes: {}, type: 'theme' }
}
const conf = new Config
export = conf