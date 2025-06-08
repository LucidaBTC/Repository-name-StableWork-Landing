#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const MAX_FILE_SIZE_KB = 50; // 50KB max file size
const ALLOWED_COLOR_FORMATS = [
  /^#[0-9a-f]{6}$/i, // #RRGGBB
  /^#[0-9a-f]{8}$/i, // #RRGGBBAA
  /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i, // rgb(r, g, b)
  /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/i, // rgba(r, g, b, a)
];

// Directories to check
const DIRECTORIES = [
  'app',
  'components',
  'lib',
];

// File extensions to check
const EXTENSIONS = [
  '.tsx',
  '.ts',
  '.js',
  '.jsx',
  '.css',
  '.scss',
];

// Results tracking
const results = {
  oversizedFiles: [],
  rogueColors: [],
  errors: [],
};

// Check file size
function checkFileSize(filePath) {
  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;
  
  if (sizeKB > MAX_FILE_SIZE_KB) {
    results.oversizedFiles.push({
      file: filePath,
      size: sizeKB.toFixed(2),
    });
  }
}

// Check for rogue colors
function checkColors(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const colorRegex = /#[0-9a-f]{3,8}|rgb\([^)]+\)|rgba\([^)]+\)/gi;
  const matches = content.match(colorRegex) || [];

  matches.forEach(color => {
    const isValid = ALLOWED_COLOR_FORMATS.some(format => format.test(color));
    if (!isValid) {
      results.rogueColors.push({
        file: filePath,
        color,
      });
    }
  });
}

// Process a single file
function processFile(filePath) {
  try {
    checkFileSize(filePath);
    checkColors(filePath);
  } catch (error) {
    results.errors.push({
      file: filePath,
      error: error.message,
    });
  }
}

// Walk through directories
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (EXTENSIONS.includes(path.extname(filePath))) {
      processFile(filePath);
    }
  });
}

// Main execution
console.log('🔍 Running StableWork rule check...\n');

// Process each directory
DIRECTORIES.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  }
});

// Report results
let hasErrors = false;

if (results.oversizedFiles.length > 0) {
  hasErrors = true;
  console.log('❌ Oversized files found:');
  results.oversizedFiles.forEach(({ file, size }) => {
    console.log(`   - ${file} (${size}KB)`);
  });
  console.log();
}

if (results.rogueColors.length > 0) {
  hasErrors = true;
  console.log('❌ Rogue colors found:');
  results.rogueColors.forEach(({ file, color }) => {
    console.log(`   - ${file}: ${color}`);
  });
  console.log();
}

if (results.errors.length > 0) {
  hasErrors = true;
  console.log('❌ Errors during check:');
  results.errors.forEach(({ file, error }) => {
    console.log(`   - ${file}: ${error}`);
  });
  console.log();
}

if (!hasErrors) {
  console.log('✅ All checks passed!\n');
  process.exit(0);
} else {
  console.log('❌ Rule check failed. Please fix the issues above.\n');
  process.exit(1);
} 