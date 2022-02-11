import { Command } from 'commander';
import { ICommand, TCommand } from '../cli/command';
import { Logger } from '../utils/logger';

@TCommand
export class TestCommand implements ICommand {

    getCommand(): Command {
        const that = this;
        return new Command('split')
            .description('Split stuff')
            .argument('<string>', 'String to split')
            .option('-s, --separator <char>', 'separator character', ',')
            .action((str, options) => {
                // Cannot use "this" context in actions, thus the need to get the logger here
                const logger = Logger.get();
                logger.info(str.split(options.separator));
            });
    }
}