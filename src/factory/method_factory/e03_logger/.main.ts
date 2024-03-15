import { log } from 'console';
import { ConsoleLoggerFactory, FileLoggerFactory } from './factoryContracts';

enum LogType {
    CONSOLE, FILE
}

function main(message: string, logType: LogType) {
    const consoleLogger = new ConsoleLoggerFactory();
    const fileLogger = new FileLoggerFactory();

    if(logType === LogType.CONSOLE) {
        consoleLogger.getLogger().log(message);
    } else if(logType === LogType.FILE) {
        fileLogger.getLogger().log(message);
    }
}

log();
main("testing logger...\n", LogType.FILE);