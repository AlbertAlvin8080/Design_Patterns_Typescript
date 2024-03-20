export interface Command {
    // In Java you would need to create a specific
    // command interface which would receive a String
    // as parameter. But here you can delegate the type 
    // of the provided parameter to the implementation.
    execute(param: any): void;
    undo(): void;
}