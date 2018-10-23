interface Reporter {
    (formId: string): void
}
/**
 * 全局button 样式设置，如果具体的button 设置了相应的变量，将以具体设置优先
 * @lineColor theme 为line 是的border color 和 text color 默认为 全局theme color
 * @fillColor theme 为fill 时的填充色 默认为 全局theme color
 * @textColor 标题字体色 默认为 全局theme color
 */
interface Button {
    reporter?: Reporter
    lineColor?: string
    fillColor?: string
    textColor?: string
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
    themes: GraderThemes
}
/**
 * 全局控件配置
 * @theme 全局主题色 exp '#ffca50'
 * @button 全局button 设置
 * @grader 全局评星器设置
 */
class Config {
    public theme: string = "#ffca50"
    public readonly button: Button = {}
    public readonly grader: Grader = { themes: {}, type: 'theme' }
}
const env = new Config
export = env