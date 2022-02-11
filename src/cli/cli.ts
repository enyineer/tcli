import { Command } from 'commander';
import { readdirSync } from 'fs';
import { Logger } from '../utils/logger';

export class CLI {
    private static logger = Logger.get();
    private static cli: Command;

    static getCli(): Command {
        if (this.cli === undefined) {
            this.initialize();
        }
        return this.cli;
    }

    private static initialize() {
        this.logger.info('Starting CLI!');
        this.cli = new Command()
                .name('tcli')
                .description('CLI for interacting with the Telegram API')
                .version('1.0.0')

        this.loadClasses();
        
        this.cli.parse();
    }

    private static loadClasses() {
        const path = `${__dirname}/../commands`;
        const files = readdirSync(path);

        for (const file of files) {
            if (file.endsWith('.command.ts')) {
                require(`${path}/${file}`);
            }
        }
    }
}