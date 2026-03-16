#!/usr/bin/env node

/**
 * VitePress 构建包装脚本
 * 解决 ESM 模块加载问题
 */

import { build } from 'vitepress';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const docsDir = join(__dirname, 'docs');

console.log('🚀 开始构建 VitePress 站点...');
console.log('📁 文档目录:', docsDir);

try {
  await build(docsDir);
  console.log('✅ 构建成功！');
  console.log('📦 输出目录：docs/.vitepress/dist');
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}
