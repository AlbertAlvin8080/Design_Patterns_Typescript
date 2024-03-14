import { Job } from "./contracts";

export class HardWorkingJob implements Job {
    doJob(): void {
        console.log("# doing hardworking job...");
        for(let i = 0; i < 1_000_000_000; ++i);
        console.log("# done.");
    }   
}