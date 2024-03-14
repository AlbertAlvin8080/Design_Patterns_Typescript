export class FullName {
    constructor(readonly name: string, readonly surname: string) { }
}

export interface FullNameFactory {
    getFullName(str: string): FullName;
    checkName(str: string): boolean;
}
