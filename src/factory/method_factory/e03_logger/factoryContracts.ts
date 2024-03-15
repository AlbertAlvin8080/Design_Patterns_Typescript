import { ConsoleLogger, FileLogger, Logger } from "./logger";

export interface LoggerFactory {
    getLogger(): Logger;
}

export class ConsoleLoggerFactory implements LoggerFactory {
    getLogger(): Logger {
        return new ConsoleLogger();
    }
}

export class FileLoggerFactory implements LoggerFactory {
    getLogger(): Logger {
        return new FileLogger();
    }
}