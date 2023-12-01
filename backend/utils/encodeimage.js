import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagePath = path.join(__dirname, '../../frontend/public/TYMLogoMini.png');

try {
    const imageBuffer = fs.readFileSync(imagePath);
    const encodedImage = imageBuffer.toString('base64');
    console.log(encodedImage);
} catch (error) {
    console.error(error);
}