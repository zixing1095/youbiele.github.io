#!/bin/bash

# 背景音乐添加脚本
# 用于下载并添加《平凡之路》钢琴曲到网站

echo "🎵 背景音乐添加工具"
echo "=================="
echo ""

# 检查是否已有音乐文件
if [ -f "docs/public/bgm.mp3" ]; then
    echo "✅ 音乐文件已存在"
    ls -lh docs/public/bgm.mp3
    exit 0
fi

echo "❌ 音乐文件不存在"
echo ""
echo "请按以下步骤添加音乐："
echo ""
echo "方法 1：使用自己的 MP3 文件"
echo "  1. 准备一个 MP3 文件（建议 < 5MB）"
echo "  2. 重命名为 bgm.mp3"
echo "  3. 放到 docs/public/ 目录"
echo ""
echo "方法 2：下载免版权钢琴曲"
echo "  访问以下网站下载："
echo "  - https://pixabay.com/music/"
echo "  - https://freemusicarchive.org/"
echo "  搜索：piano, peaceful, journey"
echo ""
echo "方法 3：使用网易云/QQ 音乐下载"
echo "  1. 搜索：平凡之路 钢琴版"
echo "  2. 下载为 MP3 格式"
echo "  3. 重命名为 bgm.mp3"
echo ""
echo "添加完成后运行："
echo "  git add docs/public/bgm.mp3"
echo "  git commit -m 'add: 背景音乐 - 平凡之路钢琴曲'"
echo "  git push origin main"
echo ""
