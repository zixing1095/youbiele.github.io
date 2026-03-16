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
  // 检查是否已存在播放器（防止多页面重复创建）
  if (window.__musicPlayerInitialized) {
    return
  }
  window.__musicPlayerInitialized = true
  
  // 全局音频对象（单例）
  if (!window.__globalAudio) {
    window.__globalAudio = {
      audio: new Audio('/bgm.mp3'),
      isPlaying: false,
      volume: 0.3,
      audioContext: null,
      analyser: null,
      dataArray: null,
      animationId: null
    }
    window.__globalAudio.audio.loop = true
    window.__globalAudio.audio.volume = 0.3
  }
  
  const { audio, isPlaying: globalIsPlaying } = window.__globalAudio
  
  // 音乐播放器
  const player = document.createElement('div')
  player.className = 'music-player'
  player.innerHTML = `
    <div class="music-info">
      <div class="music-disc-wrapper">
        <div class="music-disc">
          <div class="disc-inner">
            <span class="disc-text">野径</span>
          </div>
        </div>
        <div class="ripple-container"></div>
      </div>
      <div class="music-text">
        <div class="music-title">Peaceful Piano</div>
        <div class="music-desc">平静的钢琴曲</div>
      </div>
    </div>
    <div class="music-controls">
      <div class="play-wrapper">
        <button class="music-btn" title="播放/暂停">
          <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        </button>
        <div class="volume-menu">
          <div class="volume-label">音量</div>
          <input type="range" class="volume-slider" min="0" max="100" value="30">
          <div class="volume-value">30%</div>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(player)
  
  // DOM 元素
  const musicBtn = player.querySelector('.music-btn')
  const iconPlay = musicBtn.querySelector('.icon-play')
  const iconPause = musicBtn.querySelector('.icon-pause')
  const volumeSlider = player.querySelector('.volume-slider')
  const volumeValue = player.querySelector('.volume-value')
  const musicDisc = player.querySelector('.music-disc')
  const rippleContainer = player.querySelector('.ripple-container')
  const discInner = player.querySelector('.disc-inner')
  const musicInfo = player.querySelector('.music-info')
  const playWrapper = player.querySelector('.play-wrapper')
  const volumeMenu = player.querySelector('.volume-menu')
  
  // 同步全局状态
  const syncState = () => {
    volumeSlider.value = window.__globalAudio.volume * 100
    volumeValue.textContent = Math.round(window.__globalAudio.volume * 100) + '%'
    
    if (window.__globalAudio.isPlaying) {
      iconPlay.style.display = 'none'
      iconPause.style.display = 'block'
      musicDisc.classList.add('rotating')
    } else {
      iconPlay.style.display = 'block'
      iconPause.style.display = 'none'
      musicDisc.classList.remove('rotating')
    }
  }
  
  // 初始化音频分析器
  const initAudioAnalyzer = () => {
    if (!window.__globalAudio.audioContext) {
      window.__globalAudio.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      window.__globalAudio.analyser = window.__globalAudio.audioContext.createAnalyser()
      const source = window.__globalAudio.audioContext.createMediaElementSource(audio)
      source.connect(window.__globalAudio.analyser)
      window.__globalAudio.analyser.connect(window.__globalAudio.audioContext.destination)
      window.__globalAudio.analyser.fftSize = 64
      window.__globalAudio.dataArray = new Uint8Array(window.__globalAudio.analyser.frequencyBinCount)
    }
  }
  
  // 创建水波纹
  const createRipple = (intensity) => {
    const ripple = document.createElement('div')
    ripple.className = 'ripple'
    
    const scale = 1 + (intensity / 255) * 2
    const hue = 220 + (intensity / 255) * 60
    const opacity = 0.3 + (intensity / 255) * 0.5
    
    ripple.style.setProperty('--ripple-scale', scale)
    ripple.style.setProperty('--ripple-hue', hue)
    ripple.style.setProperty('--ripple-opacity', opacity)
    
    rippleContainer.appendChild(ripple)
    
    setTimeout(() => {
      ripple.remove()
    }, 1500)
  }
  
  // 音频可视化动画
  const animate = () => {
    if (!window.__globalAudio.isPlaying || !window.__globalAudio.analyser) return
    
    window.__globalAudio.analyser.getByteFrequencyData(window.__globalAudio.dataArray)
    const average = window.__globalAudio.dataArray.reduce((a, b) => a + b, 0) / window.__globalAudio.dataArray.length
    const intensity = average
    
    const hue = 220 + (intensity / 255) * 60
    const lightness = 50 + (intensity / 255) * 20
    discInner.style.setProperty('--disc-hue', hue)
    discInner.style.setProperty('--disc-lightness', lightness)
    
    if (intensity > 100) {
      createRipple(intensity)
    }
    
    window.__globalAudio.animationId = requestAnimationFrame(animate)
  }
  
  // 播放/暂停
  const togglePlay = async () => {
    if (window.__globalAudio.isPlaying) {
      audio.pause()
      window.__globalAudio.isPlaying = false
      if (window.__globalAudio.animationId) {
        cancelAnimationFrame(window.__globalAudio.animationId)
      }
    } else {
      try {
        await audio.play()
        window.__globalAudio.isPlaying = true
        initAudioAnalyzer()
        if (window.__globalAudio.audioContext && window.__globalAudio.audioContext.state === 'suspended') {
          await window.__globalAudio.audioContext.resume()
        }
        animate()
      } catch (e) {
        console.log('播放失败', e)
      }
    }
    syncState()
  }
  
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault()
    togglePlay()
  })
  
  // 音量调节
  volumeSlider.addEventListener('input', (e) => {
    e.stopPropagation()
    e.preventDefault()
    const value = parseInt(e.target.value)
    window.__globalAudio.volume = value / 100
    audio.volume = value / 100
    volumeValue.textContent = value + '%'
    console.log('音量:', value + '%')
  })
  
  volumeSlider.addEventListener('change', (e) => {
    e.stopPropagation()
    e.preventDefault()
    const value = parseInt(e.target.value)
    window.__globalAudio.volume = value / 100
    audio.volume = value / 100
  })
  
  // 鼠标悬停显示歌曲信息
  player.addEventListener('mouseenter', () => {
    musicInfo.classList.add('hover')
  })
  
  player.addEventListener('mouseleave', () => {
    setTimeout(() => {
      musicInfo.classList.remove('hover')
    }, 300)
  })
  
  // 鼠标悬停播放按钮显示音量菜单
  playWrapper.addEventListener('mouseenter', () => {
    volumeMenu.classList.add('show')
  })
  
  playWrapper.addEventListener('mouseleave', () => {
    setTimeout(() => {
      volumeMenu.classList.remove('show')
    }, 500)
  })
  
  // 阻止音量菜单点击事件关闭
  volumeMenu.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault()
  })
  
  // 初始化状态
  syncState()
  
  // 页面卸载时清理（可选）
  window.addEventListener('beforeunload', () => {
    // 保持播放器状态，不清理
  })
  
  // 尝试自动播放
  setTimeout(() => {
    togglePlay()
  }, 1000)
})
</script>
