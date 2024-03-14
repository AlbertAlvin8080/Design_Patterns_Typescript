import { readFileUtil } from "./util";

export interface InfoProviderFactory<T> {
    getInfo(): Promise<T>;
}

export class PublicInfoTextFactory implements InfoProviderFactory<string> {
    async getInfo(): Promise<string> {
        return readFileUtil("files/public.txt");
    }
}