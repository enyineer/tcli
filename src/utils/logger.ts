import winston from 'winston';

export class Logger {
    static logger: winston.Logger;

    static get(): winston.Logger {
        if (this.logger === undefined) {
            this.logger = winston.createLogger({
                level: 'info',
                transports: [
                    new (winston.transports.Console)({
                        format: winston.format.combine(winston.format.colorize(), this.getConsoleFormat())
                    })
                ]
            });
        }
        return this.logger;
    }

    private static getConsoleFormat() {
        return winston.format.combine(
            winston.format.colorize({
                all: true
            }),
            winston.format.label({
                label: '[TCLI]'
            }),
            winston.format.timestamp({
                format: 'DD.MM.YYYY HH:mm:SS'
            }),
            winston.format.printf(
                info => `${info.label} ${info.level} ${info.timestamp}: ${info.message}`
            )
        );
    }
}