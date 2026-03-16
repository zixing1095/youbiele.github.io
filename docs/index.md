---
layout: home
title: 阿野的野径 - 记录普通人的逆袭之路
titleTemplate: 双非本科 | 在职读研 | Python 学习 | 英语提升
description: 阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。

hero:
  name: 阿野的野径
  text: 记录普通人的逆袭之路
  tagline: 野径不通，那就踩出一条路
  image:
    src: /hero.svg
    alt: 阿野的野径
  actions:
    - theme: brand
      text: 关于我
      link: /about
    - theme: alt
      text: 野径日记
      link: /blog/
    - theme: alt
      text: GitHub
      link: https://github.com/zixing1095

features:
  - icon: 📚
    title: Python 学习
    details: 从 0 到 1，3 个月入门实战
    link: /learn/python/
  - icon: 🗣️
    title: 英语自救
    details: 英语渣的 6 个月交流计划
    link: /learn/english/
  - icon: 🎓
    title: 在职读研
    details: 双非本逆袭 985/211
  - icon: 🤖
    title: OpenClaw
    details: 打工人效率提升神器
    link: /tools/openclaw/
  - icon: ✈️
    title: 旅行生活
    details: 工作再忙也要看世界
  - icon: 💡
    title: 个人成长
    details: 普通人的自救之路
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 音乐播放器
  const player = document.createElement('div')
  player.className = 'music-player'
  player.innerHTML = `
    <div class="music-info">
      <div class="music-disc">
        <div class="disc-inner"></div>
      </div>
      <div class="music-text">
        <div class="music-title">Peaceful Piano</div>
        <div class="music-desc">平静的钢琴曲</div>
      </div>
    </div>
    <div class="music-controls">
      <button class="music-btn" title="播放/暂停">
        <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
        </svg>
      </button>
      <div class="volume-wrapper">
        <button class="volume-btn" title="音量">
          <svg class="icon-volume" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          </svg>
        </button>
        <div class="volume-slider-wrapper">
          <input type="range" class="volume-slider" min="0" max="100" value="30" orient="vertical">
        </div>
      </div>
    </div>
  `
  document.body.appendChild(player)
  
  // 音频对象
  const audio = new Audio('/bgm.mp3')
  audio.loop = true
  audio.volume = 0.3
  
  let isPlaying = false
  
  // DOM 元素
  const musicBtn = player.querySelector('.music-btn')
  const iconPlay = musicBtn.querySelector('.icon-play')
  const iconPause = musicBtn.querySelector('.icon-pause')
  const volumeBtn = player.querySelector('.volume-btn')
  const volumeSlider = player.querySelector('.volume-slider')
  const volumeWrapper = player.querySelector('.volume-slider-wrapper')
  const musicDisc = player.querySelector('.music-disc')
  
  // 更新播放按钮图标
  const updatePlayIcon = () => {
    if (isPlaying) {
      iconPlay.style.display = 'none'
      iconPause.style.display = 'block'
      musicDisc.classList.add('rotating')
    } else {
      iconPlay.style.display = 'block'
      iconPause.style.display = 'none'
      musicDisc.classList.remove('rotating')
    }
  }
  
  // 播放/暂停
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause()
      isPlaying = false
      player.classList.remove('active')
    } else {
      audio.play().catch(() => {})
      isPlaying = true
      player.classList.add('active')
    }
    updatePlayIcon()
  }
  
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    togglePlay()
  })
  
  // 音量控制
  let showVolumeTimeout
  
  volumeBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    volumeWrapper.classList.toggle('show')
  })
  
  volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value
    audio.volume = value / 100
  })
  
  // 点击其他地方关闭音量滑块
  document.addEventListener('click', () => {
    volumeWrapper.classList.remove('show')
  })
  
  // 尝试自动播放
  setTimeout(() => {
    togglePlay()
  }, 1000)
})
</script>
