import { readFileUtil } from './util';

async function main() {
  try {
    const fileContent = await readFileUtil('my-file.txt');
    console.log(fileContent);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

main();