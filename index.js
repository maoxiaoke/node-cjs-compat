import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

export const __dirname = (url) => dirname(fileURLToPath(url));

export const require = (url) => createRequire(url);
