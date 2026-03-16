# 背景音乐添加指南

## 🎵 当前状态

- ✅ 音乐播放功能已实现
- ✅ 右下角控制按钮已添加
- ❌ **音乐文件未上传**

---

## 📝 如何添加音乐

### 方法 1：使用自己的 MP3 文件（推荐）

**步骤**：

1. **准备音乐文件**
   - 格式：MP3
   - 大小：建议 < 5MB
   - 推荐：《平凡之路》钢琴版

2. **重命名**
   ```
   将文件重命名为：bgm.mp3
   ```

3. **放到正确位置**
   ```
   路径：/home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io/docs/public/bgm.mp3
   ```

4. **提交推送**
   ```bash
   cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io
   git add docs/public/bgm.mp3
   git commit -m "add: 背景音乐 - 平凡之路钢琴曲"
   git push origin main
   ```

---

### 方法 2：下载免版权钢琴曲

#### 推荐网站

**1. Pixabay Music**
```
https://pixabay.com/music/search/genre/piano/
```
- 免费免版权
- 可直接商用
- 下载简单

**2. Free Music Archive**
```
https://freemusicarchive.org/
```
- 免费音乐库
- 注意查看许可协议

**3. YouTube Audio Library**
```
https://www.youtube.com/audiolibrary/
```
- YouTube 官方音乐库
- 免费使用

#### 搜索关键词

- `piano`（钢琴）
- `peaceful`（平静）
- `journey`（旅程）
- `inspirational`（励志）
- `emotional`（情感）

---

### 方法 3：从音乐平台下载

#### 网易云音乐

1. 搜索：**平凡之路 钢琴版**
2. 推荐版本：
   - 石进 - 夜的钢琴曲
   - The Daydream - 白日梦
   - 赵海洋 - 钢琴版
3. 下载为 MP3 格式
4. 重命名为 `bgm.mp3`

#### QQ 音乐

1. 搜索：**平凡之路 钢琴**
2. 下载 MP3 格式
3. 重命名为 `bgm.mp3`

---

## 🎹 推荐曲目

### 平凡之路钢琴版

**原唱**：朴树  
**推荐钢琴版本**：
- 石进 - 夜的钢琴曲系列
- The Daydream - 白日梦系列
- 赵海洋 - 钢琴即兴系列

### 其他推荐

**励志类**：
- 《夜空中最亮的星》钢琴版
- 《追梦赤子心》钢琴版
- 《海阔天空》钢琴版

**平静类**：
- 《River Flows in You》- Yiruma
- 《Kiss the Rain》- Yiruma
- 《Comptine d'un autre été》- Yann Tiersen

---

## ⚙️ 音乐播放配置

### 当前设置

编辑 `docs/index.md`：

```javascript
const audio = new Audio('/bgm.mp3')
audio.loop = true      // 循环播放
audio.volume = 0.3     // 音量 30%
```

### 调整音量

```javascript
audio.volume = 0.5     // 50% 音量
audio.volume = 0.3     // 30% 音量（推荐）
audio.volume = 0.1     // 10% 音量（背景音）
```

### 关闭自动播放

如果不想自动播放，删除或注释掉：

```javascript
// setTimeout(tryAutoPlay, 1000)
```

---

## 🎮 控制方式

### 自动播放

- 页面加载后 1 秒尝试播放
- 如果浏览器阻止，第一次点击页面任意位置时播放

### 手动控制

**右下角音乐按钮** 🎵：
- 点击播放
- 再次点击暂停
- 播放时显示 ⏸️ 并旋转动画

---

## 🐛 常见问题

### Q: 音乐不播放？

**A**: 检查以下几点：

1. **文件是否存在**
   ```bash
   ls -lh docs/public/bgm.mp3
   ```

2. **文件名是否正确**
   - 必须是 `bgm.mp3`（小写）
   - 不能是 `BGM.mp3` 或 `bgm.MP3`

3. **文件是否上传**
   ```bash
   git status
   git push origin main
   ```

4. **浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 标签
   - 查看是否有 404 错误

### Q: 自动播放被阻止？

**A**: 这是正常的浏览器行为

**解决**：
- 点击页面任意位置
- 或点击右下角音乐按钮

### Q: 音乐文件太大？

**A**: 建议压缩到 5MB 以内

**工具**：
- 在线压缩：https://cloudconvert.com/mp3-compressor
- 本地工具：Audacity、格式工厂

---

## 📊 上传后验证

### 1. 检查文件

```bash
cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io
ls -lh docs/public/bgm.mp3
```

应该显示文件大小（例如：3.2M）

### 2. 提交推送

```bash
git add docs/public/bgm.mp3
git commit -m "add: 背景音乐 - 平凡之路钢琴曲"
git push origin main
```

### 3. 等待部署

访问：https://github.com/zixing1095/youbiele.github.io/actions

等待部署完成（约 1-2 分钟）

### 4. 测试播放

访问：https://youbeile1203.cn/

- 等待 1 秒，应该自动播放
- 或点击右下角 🎵 按钮
- 或点击页面任意位置

---

## 🎯 快速操作

**如果已有 MP3 文件**：

```bash
# 1. 复制文件到正确位置
cp /path/to/your/music.mp3 \
   /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io/docs/public/bgm.mp3

# 2. 提交推送
cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io
git add docs/public/bgm.mp3
git commit -m "add: 背景音乐"
git push origin main
```

---

## 🔗 相关资源

### 免版权音乐

- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [Bensound](https://www.bensound.com/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary/)

### 音乐下载

- [网易云音乐](https://music.163.com/)
- [QQ 音乐](https://y.qq.com/)
- [酷狗音乐](https://www.kugou.com/)

---

**添加音乐文件后，网站会更有意境！** 🎵🚀

*Last updated: 2026-03-16*
