let { AsyncSeriesWaterfallHook } = require('tapable')

class lesson {
    constructor() {
        this.hooks = {
            arch: new AsyncSeriesWaterfallHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tapAsync('node', function (name, cb) {
            setTimeout(() => {
                console.log('node' + name)
                cb(null,'result')
            }, 1000)

        })
        this.hooks.arch.tapAsync('vue', function (name, cb) {
            setTimeout(() => {
                console.log('vue' + name)
                cb()
            }, 1000)

        })
    }
    start() {
        this.hooks.arch.callAsync("pepsi", function () {
            console.log('end')
        })
    }
}

let pepsi = new lesson;
pepsi.tap();
pepsi.start();