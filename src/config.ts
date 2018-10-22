interface Reporter {
    (formId: string): void
}
interface Button {
    reporter?: Reporter
    lineColor?: string
    fillColor?: string
    textColor?: string
}
interface GraderIcon {
    on: string
    off: string
}
interface GraderThemes {
    [theme: string]: GraderIcon
}
interface Grader {
    color?: string
    themes: GraderThemes
}
class Config {
    public theme: string = "#ffca50"
    public readonly button: Button = {}
    public readonly grader: Grader = { themes: {} }
}
const env = new Config
export = env