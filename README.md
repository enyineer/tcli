# TCLI
A CLI for interacting with the Telegram-API. It's easily extendible by adding a new File to `src/commands` that matches the pattern `<name>.command.ts`.

These Classes need to Implement ICommand which forces you to implement a `getCommand()` method. Annotate the class with `@TCommand` to have the `getCommand()` method called automatically. The returned command will get added to the CLI.

## Example
Everything you need is this:
```ts
@TCommand
export class TestCommand implements ICommand {
    getCommand(): Command {
        return new Command('split')
            .description('Split stuff')
            .argument('<string>', 'String to split')
            .option('-s, --separator <char>', 'separator character', ',')
            .action((str, options) => {
                console.log(str.split(options.separator));
            });
    }
}
```
Run this TestCommand:
```sh
yarn tcli split foo,bar,baz

OR

npm run tcli split foo,bar,baz
```
# Contribute
Please add new commands as Pull-Requests. They will be reviewed and added when resolved.