
var env = require('../index').conf
Component({
    properties: {
        type: String,
        size: {
            type: Number,
            value: env.grader.size
        },
        score: {
            type: Number,
            value: 0,
            observer: "_scoreChanged"
        },
        digit: Boolean,
        disabled: Boolean
    },
    data: {
        color: env.grader.color || env.theme,
        scoreText: '0.0'
    },
    ready() {
        var theme = this.data.theme || env.grader.theme
        var icon = env.grader.themes[theme]
        if (!icon) {
            throw new Error('找不到相应的主题配置')
        }
        var on = icon.on
        var off = icon.off
        var stars = [{ off, on }, { off, on }, { off, on }, { off, on }, { off, on },]
        this.setData({ stars })
    },
    methods: {
        _scoreChanged(score) {
            var scoreText = score.toFixed(1)
            this.setData({ scoreText })
        },
        _tapAtIndex(e) {
            let score = e.currentTarget.dataset.idx + 1
            this.setData({ score })
            this.triggerEvent('change', { value: score })
        }
    }
})