import { log } from 'console';
import * as readline from 'readline';

type strOrNull = string | null;

export abstract class ConsoleStringReader {
    protected str: strOrNull = null;

    // template method
    public read() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter a string: ', (answer: string) => {
            this.str = answer;
            log();
            log(`You entered: ${this.str}`);
            log(`Transformed: ${this.transform()}`);
            rl.close();
        });
        
    }

    // part of the algorithm delegated to subclasses
    protected abstract transform(): string;
}