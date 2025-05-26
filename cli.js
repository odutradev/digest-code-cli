#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  const config = {};
  
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        config[key.trim()] = value.trim().replace(/['"]/g, '');
      }
    });
  }
  
  return config;
}

const config = loadEnv();
const baseDir = config.BASE_DIR || process.argv[2] || process.cwd();
const command = config.COMMAND || 'python -m main';
const workingDir = config.WORKING_DIR || null;

if (!fs.existsSync(baseDir)) {
  console.error(`Directory not found: ${baseDir}`);
  process.exit(1);
}

const absolutePath = path.resolve(baseDir);
const items = fs.readdirSync(absolutePath);

items.forEach(item => {
  const itemPath = path.join(absolutePath, item);
  
  if (fs.statSync(itemPath).isDirectory()) {
    console.log(`Processing: ${item}`);
    
    try {
      const options = { stdio: 'inherit' };
      if (workingDir) {
        options.cwd = workingDir;
      }
      execSync(`${command} "${itemPath}"`, options);
    } catch (error) {
      
    }
  }
});