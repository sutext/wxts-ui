var env = require('../config')
Component({
    properties: {
        camber: {
            type: Number,
            value: env.toolbar.camber
        },
        ctstyle: {
            type: String,
            value: env.toolbar.ctstyle
        }
    },
})