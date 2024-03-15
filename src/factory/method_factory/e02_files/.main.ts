import { log } from 'console';
import { ConfidentialInfoFactory, ConfidentialInfoFactorySync, PublicInfoFactory, PublicInfoFactorySync } from './instances';

async function mainAsync(pwd: string) {
  try 
  {
    const publicInfo = new PublicInfoFactory();
    const confidentialInfo = new ConfidentialInfoFactory();

    if(pwd === "designpatterns") {
      log(await confidentialInfo.getInfo());
    }
    else {
      log(await publicInfo.getInfo());
    }
    
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

function mainSync(pwd: string): void {
  const publicInfo = new PublicInfoFactorySync();
  const confInfo = new ConfidentialInfoFactorySync();

  if(pwd === "designpatterns") {
    log(publicInfo.getInfo());
  }
  else {
    log(confInfo.getInfo());
  }
}

const pwd = "designpatterns";
log();
// mainAsync(pwd);
mainSync(pwd);