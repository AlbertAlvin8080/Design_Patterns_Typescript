export class Incremental {
    private static count: number = 0;
    private numero: number = 0;

    constructor() {
        this.numero = ++Incremental.count;
    }

    public toString(): string {
        return " Incremental " + this.numero;
    }
}

export class IncrementalV2 {
    private static instance: IncrementalV2 | null = null;
    private static count: number = 0;
    private numero: number = 0;

    private constructor() {
        this.numero = ++IncrementalV2.count;
    }

    public static getInstance(): IncrementalV2 {
        if(IncrementalV2.instance == null) {
            IncrementalV2.instance = new IncrementalV2();
        } 
        return IncrementalV2.instance;
    }

    public toString(): string {
        return " Incremental " + this.numero;
    }
}

export class IncrementalV3 {
    private static count: number = 0;
    private numero: number = 0;

    private static instance: IncrementalV3;
    static {
        IncrementalV3.instance = new IncrementalV3();
    }

    private constructor() {
        this.numero = ++IncrementalV3.count;
    }

    public static getInstance(): IncrementalV3 {
        return IncrementalV3.instance;
    }

    public toString(): string {
        return " Incremental " + this.numero;
    }
}