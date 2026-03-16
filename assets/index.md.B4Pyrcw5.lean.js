import{v as u,o as v,c as p}from"./chunks/framework.BZohXCq9.js";const _=JSON.parse('{"title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","frontmatter":{"layout":"home","title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","hero":{"name":"阿野的野径","text":"记录普通人的逆袭之路","tagline":"野径不通，那就踩出一条路","image":{"src":"/hero.svg","alt":"阿野的野径"},"actions":[{"theme":"brand","text":"关于我","link":"/about"},{"theme":"alt","text":"野径日记","link":"/blog/"},{"theme":"alt","text":"GitHub","link":"https://github.com/zixing1095"}]},"features":[{"icon":"📚","title":"Python 学习","details":"从 0 到 1，3 个月入门实战","link":"/learn/python/"},{"icon":"🗣️","title":"英语自救","details":"英语渣的 6 个月交流计划","link":"/learn/english/"},{"icon":"🎓","title":"在职读研","details":"双非本逆袭 985/211"},{"icon":"🤖","title":"OpenClaw","details":"打工人效率提升神器","link":"/tools/openclaw/"},{"icon":"✈️","title":"旅行生活","details":"工作再忙也要看世界"},{"icon":"💡","title":"个人成长","details":"普通人的自救之路"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1773661097000}'),g={name:"index.md"},h=Object.assign(g,{setup(m){return u(()=>{if(window.__musicPlayerInitialized)return;window.__musicPlayerInitialized=!0,window.__globalAudio||(window.__globalAudio={audio:new Audio("/bgm.mp3"),isPlaying:!1,volume:.3},window.__globalAudio.audio.loop=!0,window.__globalAudio.audio.volume=.3);const{audio:i}=window.__globalAudio,e=document.createElement("div");e.className="music-player",e.innerHTML=`
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
  `,document.body.appendChild(e);const o=e.querySelector(".play-btn"),r=e.querySelector(".vol-btn"),c=e.querySelector(".vol-slider"),l=e.querySelector(".vol-slider-wrap"),a=e.querySelector(".track-info"),n=()=>{o.innerHTML=window.__globalAudio.isPlaying?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',window.__globalAudio.isPlaying?e.classList.add("playing"):e.classList.remove("playing")},s=async()=>{window.__globalAudio.isPlaying?(i.pause(),window.__globalAudio.isPlaying=!1):(await i.play(),window.__globalAudio.isPlaying=!0),n()};o.addEventListener("click",t=>{t.stopPropagation(),s()}),c.addEventListener("input",t=>{const d=parseInt(t.target.value);window.__globalAudio.volume=d/100,i.volume=d/100}),r.addEventListener("click",t=>{t.stopPropagation(),l.classList.toggle("show")}),e.addEventListener("click",()=>{l.classList.remove("show")}),e.addEventListener("mouseenter",()=>{a.classList.add("show")}),e.addEventListener("mouseleave",()=>{a.classList.remove("show"),setTimeout(()=>l.classList.remove("show"),300)}),n(),setTimeout(s,1e3)}),(i,e)=>(v(),p("div"))}});export{_ as __pageData,h as default};
