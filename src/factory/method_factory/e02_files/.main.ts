import { log } from 'console';
import { ConfidentialInfoProviderFactory, ConfidentialInfoProviderFactorySync, PublicInfoProviderFactory, PublicInfoProviderFactorySync } from './factoryInstances';

async function mainAsync(pwd: string) {
  try 
  {
    const publicInfo = new PublicInfoProviderFactory();
    const confidentialInfo = new ConfidentialInfoProviderFactory();

    if(pwd === "designpatterns") {
      log(await confidentialInfo.getInfoProvider().getInfo());
    }
    else {
      log(await publicInfo.getInfoProvider().getInfo());
    }
    
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

function mainSync(pwd: string): void {
  const publicInfo = new PublicInfoProviderFactorySync();
  const confInfo = new ConfidentialInfoProviderFactorySync();

  if(pwd === "designpatterns") {
    log(publicInfo.getInfoProvider().getInfo());
  }
  else {
    log(confInfo.getInfoProvider().getInfo());
  }
}

const pwd = "designpatterns";
log();
mainAsync(pwd);
mainSync(pwd);