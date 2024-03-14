import { NameSurnameFullNameFactory, SurnameNameFullNameFactory } from './instances';
import { FullName } from './contracts';

const args: string[] = ["McNealy, Scott", "James Gosling", "Naughton, Patrick"];

console.log();
for (let i = 0; i < args.length; ++i) {
    const nameSurnameFactory = new NameSurnameFullNameFactory();
    const surnameNameFactory = new SurnameNameFullNameFactory();

    const current = args[i];
    if (nameSurnameFactory.checkName(current)) {
        console.log(nameSurnameFactory.getFullName(current));
    }
    else if (surnameNameFactory.checkName(current)) {
        console.log(surnameNameFactory.getFullName(current));
    }
}