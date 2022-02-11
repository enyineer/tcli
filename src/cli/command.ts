import { Command as CommanderCommand } from 'commander';
import { CLI } from './cli';
import { Logger } from '../utils/logger';

export abstract class ICommand {
    constructor() {}
    abstract getCommand(): CommanderCommand
}

export function TCommand(objConstructor: Function) {
    const logger = Logger.get();
    const getCommandFun: Function = objConstructor.prototype.getCommand;

    if (typeof getCommandFun !== 'function') {
        logger.error(`Could not find getCommand() in class ${objConstructor.name}.`);
        logger.error(`Make sure that the class ${objConstructor.name} implements the interface "ICommand".`);
        return;
    }

    const command = getCommandFun() as CommanderCommand;
    CLI.getCli().addCommand(command);
    logger.info(`Loaded ${objConstructor.name}`)
}