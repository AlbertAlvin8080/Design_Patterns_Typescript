import { Interceptor } from "./contracts";
import { formattedDateTime } from "./util";

export class LoggerInterceptor extends Interceptor {
    doJob(): void {
        const now = formattedDateTime();
        console.log(`LOGGER: ${now}`);
        this.job.doJob();
    }
}

export class SecondsVerifierInterceptor extends Interceptor {
    doJob(): void {
        const seconds = new Date().getSeconds();
        if(seconds % 2 === 0) {
            // throw new Error("### EVEN SECONDS ###");
        }
        this.job.doJob();
    }
}

export class TimerInterceptor extends Interceptor {
    doJob(): void {
        const start = new Date();
        this.job.doJob();
        const end = new Date();
        console.log(`TIMER: elapsed time: ${(end.getTime() - start.getTime())}ms`);
    }
}