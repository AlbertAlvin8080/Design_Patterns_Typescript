export interface InfoProviderFactory<T> {
    getInfo(): T;
}