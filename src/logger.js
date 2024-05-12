import { createLogger, format, transports } from 'winston'

const logger = createLogger({
    level: 'infor',
    format: format.json(),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
    ]
})

export default logger