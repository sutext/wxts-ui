interface Reporter {
    (formId: string): void
}
interface Button {//全局button 样式设置，如果具体的button 设置了相应的变量，将以具体设置优先
    reporter?: Reporter //当button的report设置为true 生成formId 之后会自动调用此方法
    lineColor?: string //theme 为line 是的border color 和 text color 默认为 全局theme color
    fillColor?: string //theme 为fill 时的填充色 默认为 全局theme color
    textColor?: string //标题字体色 默认为 全局theme color
}
interface GraderIcon {
    on: string//点亮的星星的图片地址，本地图片请用绝对路径
    off: string//点亮的星星的图片地址，本地图片请用绝对路径
}
interface GraderThemes {
    [type: string]: GraderIcon
}
interface Grader {
    color?: string//分数颜色
    type: string//默认主题类型 theme
    themes: GraderThemes
}
class Config {
    public theme: string = "#ffca50"//全局主题色
    public readonly button: Button = {}
    public readonly grader: Grader = { themes: {}, type: 'theme' }
}
const env = new Config
export = env