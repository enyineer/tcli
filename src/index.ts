import { CLI } from './cli/cli';
import { Logger } from './utils/logger';

const logger = Logger.get();

export class Main {
    constructor() {
        CLI.getCli();
    }
}

(async () => { new Main(); })().catch((err) => logger.error(err.toString()));