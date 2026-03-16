import{v as h,o as f,c as x}from"./chunks/framework.BZohXCq9.js";const L=JSON.parse('{"title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","frontmatter":{"layout":"home","title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","hero":{"name":"阿野的野径","text":"记录普通人的逆袭之路","tagline":"野径不通，那就踩出一条路","image":{"src":"/hero.svg","alt":"阿野的野径"},"actions":[{"theme":"brand","text":"关于我","link":"/about"},{"theme":"alt","text":"野径日记","link":"/blog/"},{"theme":"alt","text":"GitHub","link":"https://github.com/zixing1095"}]},"features":[{"icon":"📚","title":"Python 学习","details":"从 0 到 1，3 个月入门实战","link":"/learn/python/"},{"icon":"🗣️","title":"英语自救","details":"英语渣的 6 个月交流计划","link":"/learn/english/"},{"icon":"🎓","title":"在职读研","details":"双非本逆袭 985/211"},{"icon":"🤖","title":"OpenClaw","details":"打工人效率提升神器","link":"/tools/openclaw/"},{"icon":"✈️","title":"旅行生活","details":"工作再忙也要看世界"},{"icon":"💡","title":"个人成长","details":"普通人的自救之路"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1773661667000}'),P={name:"index.md"},S=Object.assign(P,{setup(k){return h(()=>{if(window.__musicPlayerInitialized)return;window.__musicPlayerInitialized=!0,window.__globalAudio||(window.__globalAudio={audio:new Audio("/bgm.mp3"),isPlaying:!1,volume:.3,audioContext:null,analyser:null,dataArray:null},window.__globalAudio.audio.loop=!0,window.__globalAudio.audio.volume=.3);const{audio:t}=window.__globalAudio,e=document.createElement("div");e.className="music-player",e.innerHTML=`
    <div class="disc-wrapper">
      <div class="disc">
        <div class="disc-inner"><span>野径</span></div>
      </div>
    </div>
    <div class="track-info">
      <div class="track-title">Peaceful Piano</div>
      <div class="track-artist">平静的钢琴曲</div>
    </div>
    <div class="controls">
      <button class="play-btn" title="播放/暂停">
        <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
      </button>
      <div class="vol-wrap">
        <button class="vol-btn" title="音量">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </button>
        <div class="vol-menu">
          <input type="range" class="vol-slider" min="0" max="100" value="30">
          <span class="vol-val">30%</span>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e);const n=e.querySelector(".disc"),_=e.querySelector(".disc-inner"),a=e.querySelector(".play-btn"),s=a.querySelector(".icon-play"),d=a.querySelector(".icon-pause"),y=e.querySelector(".vol-btn"),g=e.querySelector(".vol-slider"),p=e.querySelector(".vol-val"),c=e.querySelector(".vol-menu"),r=e.querySelector(".track-info"),m=()=>{window.__globalAudio.audioContext||(window.__globalAudio.audioContext=new(window.AudioContext||window.webkitAudioContext),window.__globalAudio.analyser=window.__globalAudio.audioContext.createAnalyser(),window.__globalAudio.audioContext.createMediaElementSource(t).connect(window.__globalAudio.analyser),window.__globalAudio.analyser.connect(window.__globalAudio.audioContext.destination),window.__globalAudio.analyser.fftSize=64,window.__globalAudio.dataArray=new Uint8Array(window.__globalAudio.analyser.frequencyBinCount))};let l=null;const u=()=>{if(!window.__globalAudio.isPlaying||!window.__globalAudio.analyser)return;window.__globalAudio.analyser.getByteFrequencyData(window.__globalAudio.dataArray);const i=220+window.__globalAudio.dataArray.reduce((b,A)=>b+A,0)/window.__globalAudio.dataArray.length/255*60;_.style.setProperty("--hue",i),l=requestAnimationFrame(u)},w=()=>{window.__globalAudio.isPlaying?(s.style.display="none",d.style.display="block",n.classList.add("spin"),e.classList.add("active")):(s.style.display="block",d.style.display="none",n.classList.remove("spin"),e.classList.remove("active"))},v=async()=>{var o;window.__globalAudio.isPlaying?(t.pause(),window.__globalAudio.isPlaying=!1,l&&cancelAnimationFrame(l)):(await t.play(),window.__globalAudio.isPlaying=!0,m(),((o=window.__globalAudio.audioContext)==null?void 0:o.state)==="suspended"&&await window.__globalAudio.audioContext.resume(),u()),w()};a.addEventListener("click",o=>{o.stopPropagation(),v()}),g.addEventListener("input",o=>{o.stopPropagation();const i=parseInt(o.target.value);window.__globalAudio.volume=i/100,t.volume=i/100,p.textContent=i+"%"}),y.addEventListener("click",o=>{o.stopPropagation(),c.classList.toggle("show")}),document.addEventListener("click",()=>c.classList.remove("show")),e.addEventListener("mouseenter",()=>r.classList.add("show")),e.addEventListener("mouseleave",()=>r.classList.remove("show")),w(),setTimeout(v,1e3)}),(t,e)=>(f(),x("div"))}});export{L as __pageData,S as default};
