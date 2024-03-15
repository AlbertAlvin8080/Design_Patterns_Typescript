import { InfoProvider } from "./infoProvider";

export interface InfoProviderFactory {
    getInfoProvider(): InfoProvider<any>;
}