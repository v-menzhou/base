const Joi = require('@hapi/joi')
const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost',
    })

    server.events.on('log', (event) => console.log(event.data))

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hi'
        },
    })

    server.route({
        method: 'POST',
        path: '/validate',
        handler: (request, h) => {
            const Schema = Joi.alternatives()
                .try(Joi.number(), Joi.string())
                .required()

            const { name } = request.payload
            const { value: config, error } = Schema.validate(name)
            if (error) {
                return 'invalid!'
            }

            return 'valid!'
        },
    })

    await server.start()
    server.log('info', `Server starting at  ${server.info.uri}`)
}

init()
