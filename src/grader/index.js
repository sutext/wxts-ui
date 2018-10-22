
var env = require('../config')
Component({
    properties: {
        color: {
            type: String,
            value: 'theme'
        },
        size: {
            type: Number,
            value: 12
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
        var color = this.data.color
        var icon = env.grader.themes[color]
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