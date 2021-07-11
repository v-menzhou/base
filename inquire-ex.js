'use strict'

const PromptBase = require('inquirer/lib/prompts/base')

class InfoPrompt {
    constructor(questions, rl, answers) {
        // name required
        questions.name = 'noop'

        // gets rid of the `? ` prefix
        questions.prefix = ''

        this.promptBase = new PromptBase(questions, rl, answers)

        return this.promptBase
    }

    _run(cb) {
        this.promptBase.render()

        // pause a moment to capture
        // the attention of the reader
        setTimeout(() => {
            // then proceed to next prompt
            this.promptBase.status = 'answered'
            this.promptBase.screen.done()
            cb()
        }, 500)
    }

    render() {
        let message = this.promptBase.getQuestion()

        // eslint-disable-next-line new-cap
        message = Utils.formatBoxMessage(message, 66, {
            margin: {
                top: 1,
                left: 3,
                right: 3,
                bottom: 0,
            },
        })

        this.promptBase.screen.render(`${message}\n`)

        return this.promptBase
    }
}

module.exports = InfoPrompt
