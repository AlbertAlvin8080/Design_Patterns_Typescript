import { BracesPrinterDecorator, CurlyBracketsPrinterDecorator, ParenthesisPrinterDecorator, SquareBracketsPrinterDecorator } from './decorator';
import { NumberPrinter } from './decorated';

const printer = new NumberPrinter();
const braces = new BracesPrinterDecorator(printer);
const parenthesis = new ParenthesisPrinterDecorator(braces);
const squareBrackets = new SquareBracketsPrinterDecorator(parenthesis);
const curlyBrackets = new CurlyBracketsPrinterDecorator(squareBrackets);

console.log();
console.log(curlyBrackets.print());