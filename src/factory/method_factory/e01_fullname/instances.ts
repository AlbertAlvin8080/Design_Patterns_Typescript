import { FullName, FullNameFactory } from "./contracts";

export class NameSurnameFullNameFactory implements FullNameFactory {
    checkName(str: string): boolean {
        return str.match(/^\w+\s+\w+$/) !== null;
    }

    getFullName(str: string): FullName {
        const names = str.split(/\s+/);
        return new FullName(names[0], names[1]);
    }
}

export class SurnameNameFullNameFactory implements FullNameFactory {
    checkName(str: string): boolean {
        return str.match(/^\w+,\s+\w+$/) !== null;
    }

    getFullName(str: string): FullName {
        const names = str.split(/,\s+/);
        return new FullName(names[1], names[0]);
    }
}