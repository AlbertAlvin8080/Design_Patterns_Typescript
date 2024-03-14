interface Job {
    doJob(): void;
}

abstract class Interceptor implements Job {
    public job: Job;

    constructor(job: Job) {
        this.job = job;
    }

    abstract doJob(): void;
}

export {Interceptor, Job};