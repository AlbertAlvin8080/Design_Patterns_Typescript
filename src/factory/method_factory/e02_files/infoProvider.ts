import * as fs from 'fs';
import { readFileUtil } from './util';

export interface InfoProvider<T> {
    getInfo(): T;
}

// async
export class PublicInfoProvider implements InfoProvider<Promise<string>> {
    getInfo(): Promise<string> {
        return readFileUtil("files/public.txt");
    }
}

// async
export class ConfidentialInfoProvider implements InfoProvider<Promise<string>> {
    getInfo(): Promise<string> {
        return readFileUtil("files/confidential.txt");
    }
}

// sync
export class PublicInfoProviderSync implements InfoProvider<string> {
    getInfo(): string {
        return fs.readFileSync("files/confidential.txt", "utf-8").toString();
    }
}

// sync
export class ConfidentialInfoProviderSync implements InfoProvider<string> {
    getInfo(): string {
        return fs.readFileSync("files/public.txt", "utf-8").toString();
    }
}