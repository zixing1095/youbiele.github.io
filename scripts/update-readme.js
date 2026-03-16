#!/usr/bin/env node

/**
 * 自动更新 README.md 的脚本
 * 在每次部署前运行，更新最后更新时间
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readmePath = join(__dirname, '../README.md');

try {
  // 读取 README
  let content = readFileSync(readmePath, 'utf-8');
  
  // 获取当前日期
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  
  // 更新最后更新时间
  content = content.replace(
    /\*Last updated: \d{4}-\d{2}-\d{2}\*/,
    `*Last updated: ${dateStr}*`
  );
  
  // 更新徽章中的最后提交时间（可选）
  // content = content.replace(
  //   /\[!\[Last Update\]\(https:\/\/img\.shields\.io\/github\/last-commit\/[^)]+\)\]/,
  //   `[![Last Update](https://img.shields.io/github/last-commit/zixing1095/youbiele.github.io)](https://github.com/zixing1095/youbiele.github.io/commits/main)`
  // );
  
  // 写回 README
  writeFileSync(readmePath, content, 'utf-8');
  
  console.log('✅ README.md 已更新');
  console.log(`📅 最后更新时间：${dateStr}`);
  
} catch (error) {
  console.error('❌ 更新 README 失败:', error.message);
  process.exit(1);
}
