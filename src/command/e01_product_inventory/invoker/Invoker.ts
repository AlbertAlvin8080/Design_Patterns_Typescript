import { Command } from "../command/Command";

export class Invoker {

    constructor(
        private _commandIn: Command[] = [],
        private _commandOut: Command[] = []
    ) {}

    public addCommand(commandIn: Command, commandOut: Command): void {
        this._commandIn.push(commandIn);
        this._commandOut.push(commandOut);
    }

    public executeInCommand(idx: number): void {
        this._commandIn[idx].execute();
    }

    public executeOutCommand(idx: number): void {
        this._commandOut[idx].execute();
    }
}