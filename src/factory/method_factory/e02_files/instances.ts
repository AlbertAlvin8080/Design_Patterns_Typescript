import { InfoProviderFactory } from "./contracts";
import { readFileUtil } from "./util";
import * as fs from 'fs';

// async
export class PublicInfoFactory implements InfoProviderFactory<Promise<string>> {
    async getInfo(): Promise<string> {
        return readFileUtil("files/public.txt");
    }
}

// async
export class ConfidentialInfoFactory implements InfoProviderFactory<Promise<string>> {
    getInfo(): Promise<string> {
        return readFileUtil("files/confidential.txt");
    }
}

// sync
export class PublicInfoFactorySync implements InfoProviderFactory<string> {
    getInfo(): string {
        return fs.readFileSync("files/confidential.txt", "utf-8").toString();
    }
}

// sync
export class ConfidentialInfoFactorySync implements InfoProviderFactory<string> {
    getInfo(): string {
        return fs.readFileSync("files/public.txt", "utf-8").toString();
    }
}