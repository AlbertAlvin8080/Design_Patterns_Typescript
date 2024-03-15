import * as fs from 'fs';

export function readFileUtil(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
}

// function example(filePath: string): string {
//   return fs.readFileSync("file/public.txt", "utf8").toString();
// }