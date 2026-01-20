#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting deployment...');
console.log('Current directory:', __dirname);

try {
  // Change to the project directory
  process.chdir(__dirname);
  console.log('Changed to project directory:', process.cwd());

  // Verify that the src directory exists
  const srcPath = path.join(__dirname, 'src');
  if (!fs.existsSync(srcPath)) {
    throw new Error(`Source directory not found: ${srcPath}`);
  }
  console.log('Source directory verified:', srcPath);

  // Verify that main.jsx exists
  const mainJsxPath = path.join(srcPath, 'main.jsx');
  if (!fs.existsSync(mainJsxPath)) {
    throw new Error(`main.jsx not found: ${mainJsxPath}`);
  }
  console.log('main.jsx verified:', mainJsxPath);

  // Run the build
  console.log('Running build...');
  execSync('npm run vercel-build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}