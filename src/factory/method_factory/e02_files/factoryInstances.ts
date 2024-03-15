import { InfoProviderFactory } from "./factoryContracts";
import { ConfidentialInfoProvider, ConfidentialInfoProviderSync, InfoProvider, PublicInfoProvider, PublicInfoProviderSync } from "./infoProvider";

// async
export class PublicInfoProviderFactory implements InfoProviderFactory {
    getInfoProvider(): InfoProvider<any> {
        return new PublicInfoProvider;
    }
}

// async
export class ConfidentialInfoProviderFactory implements InfoProviderFactory {
    getInfoProvider(): InfoProvider<any> {
        return new ConfidentialInfoProvider();
    }
}

// sync
export class PublicInfoProviderFactorySync implements InfoProviderFactory {
    getInfoProvider(): InfoProvider<any> {
        return new PublicInfoProviderSync();
    }
}

// sync
export class ConfidentialInfoProviderFactorySync implements InfoProviderFactory {
    getInfoProvider(): InfoProvider<any> {
        return new ConfidentialInfoProviderSync();
    }
}