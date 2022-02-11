import { Command } from 'commander';
import { ICommand, TCommand } from '../cli/command';
import { Logger } from '../utils/logger';

@TCommand
export class TestCommand implements ICommand {
    private logger = Logger.get();

    getCommand(): Command {
        return new Command('split')
            .description('Split stuff')
            .argument('<string>', 'String to split')
            .option('-s, --separator <char>', 'separator character', ',')
            .action((str, options) => {
                this.logger.info(str.split(options.separator));
            });
    }
}