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
  if (window.__musicPlayerInitialized) return
  window.__musicPlayerInitialized = true
  
  if (!window.__globalAudio) {
    window.__globalAudio = {
      audio: new Audio('/bgm.mp3'),
      isPlaying: false,
      volume: 0.3,
      audioContext: null,
      analyser: null,
      dataArray: null
    }
    window.__globalAudio.audio.loop = true
    window.__globalAudio.audio.volume = 0.3
  }
  
  const { audio } = window.__globalAudio
  
  const player = document.createElement('div')
  player.className = 'music-player'
  player.innerHTML = `
    <div class="disc"><div class="disc-inner"></div></div>
    <div class="info">
      <span class="title">Peaceful Piano</span>
      <span class="artist">钢琴曲</span>
    </div>
    <button class="btn" title="播放/暂停">
      <svg class="play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      <svg class="pause" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
    </button>
    <div class="vol-ctrl">
      <button class="vol-btn" title="音量">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
      </button>
      <div class="vol-menu">
        <input type="range" class="vol-slider" min="0" max="100" value="30">
      </div>
    </div>
  `
  document.body.appendChild(player)
  
  const disc = player.querySelector('.disc')
  const discInner = player.querySelector('.disc-inner')
  const btn = player.querySelector('.btn')
  const playIcon = btn.querySelector('.play')
  const pauseIcon = btn.querySelector('.pause')
  const volBtn = player.querySelector('.vol-btn')
  const volSlider = player.querySelector('.vol-slider')
  const volMenu = player.querySelector('.vol-menu')
  const info = player.querySelector('.info')
  
  // 音频分析器
  const initAnalyzer = () => {
    if (!window.__globalAudio.audioContext) {
      window.__globalAudio.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      window.__globalAudio.analyser = window.__globalAudio.audioContext.createAnalyser()
      const src = window.__globalAudio.audioContext.createMediaElementSource(audio)
      src.connect(window.__globalAudio.analyser)
      window.__globalAudio.analyser.connect(window.__globalAudio.audioContext.destination)
      window.__globalAudio.analyser.fftSize = 64
      window.__globalAudio.dataArray = new Uint8Array(window.__globalAudio.analyser.frequencyBinCount)
    }
  }
  
  // 动画
  let animId = null
  const animate = () => {
    if (!window.__globalAudio.isPlaying || !window.__globalAudio.analyser) return
    window.__globalAudio.analyser.getByteFrequencyData(window.__globalAudio.dataArray)
    const avg = window.__globalAudio.dataArray.reduce((a, b) => a + b, 0) / window.__globalAudio.dataArray.length
    const hue = 220 + (avg / 255) * 60
    discInner.style.setProperty('--hue', hue)
    animId = requestAnimationFrame(animate)
  }
  
  // 更新UI
  const updateUI = () => {
    if (window.__globalAudio.isPlaying) {
      playIcon.style.display = 'none'
      pauseIcon.style.display = 'block'
      disc.classList.add('spin')
    } else {
      playIcon.style.display = 'block'
      pauseIcon.style.display = 'none'
      disc.classList.remove('spin')
    }
  }
  
  // 播放/暂停
  const toggle = async () => {
    if (window.__globalAudio.isPlaying) {
      audio.pause()
      window.__globalAudio.isPlaying = false
      if (animId) cancelAnimationFrame(animId)
    } else {
      await audio.play()
      window.__globalAudio.isPlaying = true
      initAnalyzer()
      if (window.__globalAudio.audioContext?.state === 'suspended') {
        await window.__globalAudio.audioContext.resume()
      }
      animate()
    }
    updateUI()
  }
  
  btn.addEventListener('click', e => { e.stopPropagation(); toggle() })
  
  // 音量
  volSlider.addEventListener('input', e => {
    e.stopPropagation()
    const v = parseInt(e.target.value)
    window.__globalAudio.volume = v / 100
    audio.volume = v / 100
  })
  
  volBtn.addEventListener('click', e => {
    e.stopPropagation()
    volMenu.classList.toggle('show')
  })
  
  document.addEventListener('click', () => volMenu.classList.remove('show'))
  
  // 悬停显示信息
  player.addEventListener('mouseenter', () => info.classList.add('show'))
  player.addEventListener('mouseleave', () => info.classList.remove('show'))
  
  updateUI()
  setTimeout(toggle, 1000)
})
</script>