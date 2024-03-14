import { HardWorkingJob } from './decorated';
import { LoggerInterceptor, SecondsVerifierInterceptor, TimerInterceptor } from "./decorator";

console.log();
const hardWorkingJob = new HardWorkingJob();
const logger = new LoggerInterceptor(hardWorkingJob);
const secondsVerifier = new SecondsVerifierInterceptor(logger);
const timer = new TimerInterceptor(secondsVerifier);
timer.doJob();