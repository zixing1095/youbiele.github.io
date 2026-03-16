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
  // 背景音乐控制
  const musicBtn = document.createElement('div')
  musicBtn.className = 'music-player'
  musicBtn.innerHTML = '🎵'
  musicBtn.title = '播放/暂停背景音乐'
  document.body.appendChild(musicBtn)
  
  const audio = new Audio('/bgm.mp3')
  audio.loop = true
  audio.volume = 0.3
  
  let isPlaying = false
  
  // 尝试自动播放（浏览器可能阻止）
  const tryAutoPlay = async () => {
    try {
      await audio.play()
      isPlaying = true
      musicBtn.classList.add('playing')
      musicBtn.innerHTML = '⏸️'
    } catch (e) {
      console.log('自动播放被阻止，需要用户交互')
      // 第一次点击任意位置时尝试播放
      document.addEventListener('click', () => {
        if (!isPlaying) {
          audio.play().catch(() => {})
          isPlaying = true
          musicBtn.classList.add('playing')
          musicBtn.innerHTML = '⏸️'
        }
      }, { once: true })
    }
  }
  
  // 页面加载后尝试自动播放
  setTimeout(tryAutoPlay, 1000)
  
  // 手动控制
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    if (isPlaying) {
      audio.pause()
      musicBtn.classList.remove('playing')
      musicBtn.innerHTML = '🎵'
    } else {
      audio.play().catch(() => {
        alert('请确保 docs/public/ 目录下有 bgm.mp3 文件（平凡之路钢琴曲）')
      })
      musicBtn.classList.add('playing')
      musicBtn.innerHTML = '⏸️'
    }
    isPlaying = !isPlaying
  })
})
</script>
