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
  // 全局单例
  if (window.__musicPlayerInitialized) return
  window.__musicPlayerInitialized = true
  
  if (!window.__globalAudio) {
    window.__globalAudio = {
      audio: new Audio('/bgm.mp3'),
      isPlaying: false,
      volume: 0.3
    }
    window.__globalAudio.audio.loop = true
    window.__globalAudio.audio.volume = 0.3
  }
  
  const { audio } = window.__globalAudio
  
  // 简洁播放器
  const player = document.createElement('div')
  player.className = 'music-player'
  player.innerHTML = `
    <button class="play-btn" title="播放/暂停">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </button>
    <div class="track-info">
      <span class="track-name">Peaceful Piano</span>
      <span class="track-artist">平静的钢琴曲</span>
    </div>
    <div class="volume-control">
      <button class="vol-btn" title="音量">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
      </button>
      <div class="vol-slider-wrap">
        <input type="range" class="vol-slider" min="0" max="100" value="30">
      </div>
    </div>
  `
  document.body.appendChild(player)
  
  const playBtn = player.querySelector('.play-btn')
  const volBtn = player.querySelector('.vol-btn')
  const volSlider = player.querySelector('.vol-slider')
  const volWrap = player.querySelector('.vol-slider-wrap')
  const trackInfo = player.querySelector('.track-info')
  
  // 更新图标
  const updateIcon = () => {
    playBtn.innerHTML = window.__globalAudio.isPlaying 
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
    
    if (window.__globalAudio.isPlaying) {
      player.classList.add('playing')
    } else {
      player.classList.remove('playing')
    }
  }
  
  // 播放/暂停
  const toggle = async () => {
    if (window.__globalAudio.isPlaying) {
      audio.pause()
      window.__globalAudio.isPlaying = false
    } else {
      await audio.play()
      window.__globalAudio.isPlaying = true
    }
    updateIcon()
  }
  
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    toggle()
  })
  
  // 音量
  volSlider.addEventListener('input', (e) => {
    const v = parseInt(e.target.value)
    window.__globalAudio.volume = v / 100
    audio.volume = v / 100
  })
  
  // 显示/隐藏音量滑块
  volBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    volWrap.classList.toggle('show')
  })
  
  player.addEventListener('click', () => {
    volWrap.classList.remove('show')
  })
  
  // 悬停显示信息
  player.addEventListener('mouseenter', () => {
    trackInfo.classList.add('show')
  })
  
  player.addEventListener('mouseleave', () => {
    trackInfo.classList.remove('show')
    setTimeout(() => volWrap.classList.remove('show'), 300)
  })
  
  // 初始化
  updateIcon()
  
  // 自动播放
  setTimeout(toggle, 1000)
})
</script>