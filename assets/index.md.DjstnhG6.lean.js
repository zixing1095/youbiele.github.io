import{v as C,o as L,c as S}from"./chunks/framework.BZohXCq9.js";const I=JSON.parse('{"title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","frontmatter":{"layout":"home","title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","hero":{"name":"阿野的野径","text":"记录普通人的逆袭之路","tagline":"野径不通，那就踩出一条路","image":{"src":"/hero.svg","alt":"阿野的野径"},"actions":[{"theme":"brand","text":"关于我","link":"/about"},{"theme":"alt","text":"野径日记","link":"/blog/"},{"theme":"alt","text":"GitHub","link":"https://github.com/zixing1095"}]},"features":[{"icon":"📚","title":"Python 学习","details":"从 0 到 1，3 个月入门实战","link":"/learn/python/"},{"icon":"🗣️","title":"英语自救","details":"英语渣的 6 个月交流计划","link":"/learn/english/"},{"icon":"🎓","title":"在职读研","details":"双非本逆袭 985/211"},{"icon":"🤖","title":"OpenClaw","details":"打工人效率提升神器","link":"/tools/openclaw/"},{"icon":"✈️","title":"旅行生活","details":"工作再忙也要看世界"},{"icon":"💡","title":"个人成长","details":"普通人的自救之路"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1773650586000}'),q={name:"index.md"},z=Object.assign(q,{setup(k){return C(()=>{if(window.__musicPlayerInitialized)return;window.__musicPlayerInitialized=!0,window.__globalAudio||(window.__globalAudio={audio:new Audio("/bgm.mp3"),isPlaying:!1,volume:.3,audioContext:null,analyser:null,dataArray:null,animationId:null},window.__globalAudio.audio.loop=!0,window.__globalAudio.audio.volume=.3);const{audio:t,isPlaying:A}=window.__globalAudio,i=document.createElement("div");i.className="music-player",i.innerHTML=`
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
  `,document.body.appendChild(i);const l=i.querySelector(".music-btn"),u=l.querySelector(".icon-play"),c=l.querySelector(".icon-pause"),a=i.querySelector(".volume-slider"),w=i.querySelector(".volume-value"),p=i.querySelector(".music-disc"),h=i.querySelector(".ripple-container"),m=i.querySelector(".disc-inner"),v=i.querySelector(".music-info"),_=i.querySelector(".play-wrapper"),n=i.querySelector(".volume-menu"),y=()=>{a.value=window.__globalAudio.volume*100,w.textContent=Math.round(window.__globalAudio.volume*100)+"%",window.__globalAudio.isPlaying?(u.style.display="none",c.style.display="block",p.classList.add("rotating")):(u.style.display="block",c.style.display="none",p.classList.remove("rotating"))},f=()=>{window.__globalAudio.audioContext||(window.__globalAudio.audioContext=new(window.AudioContext||window.webkitAudioContext),window.__globalAudio.analyser=window.__globalAudio.audioContext.createAnalyser(),window.__globalAudio.audioContext.createMediaElementSource(t).connect(window.__globalAudio.analyser),window.__globalAudio.analyser.connect(window.__globalAudio.audioContext.destination),window.__globalAudio.analyser.fftSize=64,window.__globalAudio.dataArray=new Uint8Array(window.__globalAudio.analyser.frequencyBinCount))},P=e=>{const o=document.createElement("div");o.className="ripple";const s=1+e/255*2,d=220+e/255*60,r=.3+e/255*.5;o.style.setProperty("--ripple-scale",s),o.style.setProperty("--ripple-hue",d),o.style.setProperty("--ripple-opacity",r),h.appendChild(o),setTimeout(()=>{o.remove()},1500)},g=()=>{if(!window.__globalAudio.isPlaying||!window.__globalAudio.analyser)return;window.__globalAudio.analyser.getByteFrequencyData(window.__globalAudio.dataArray);const o=window.__globalAudio.dataArray.reduce((r,x)=>r+x,0)/window.__globalAudio.dataArray.length,s=220+o/255*60,d=50+o/255*20;m.style.setProperty("--disc-hue",s),m.style.setProperty("--disc-lightness",d),o>100&&P(o),window.__globalAudio.animationId=requestAnimationFrame(g)},b=async()=>{if(window.__globalAudio.isPlaying)t.pause(),window.__globalAudio.isPlaying=!1,window.__globalAudio.animationId&&cancelAnimationFrame(window.__globalAudio.animationId);else try{await t.play(),window.__globalAudio.isPlaying=!0,f(),window.__globalAudio.audioContext&&window.__globalAudio.audioContext.state==="suspended"&&await window.__globalAudio.audioContext.resume(),g()}catch(e){console.log("播放失败",e)}y()};l.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),b()}),a.addEventListener("input",e=>{e.stopPropagation(),e.preventDefault();const o=parseInt(e.target.value);window.__globalAudio.volume=o/100,t.volume=o/100,w.textContent=o+"%",console.log("音量:",o+"%")}),a.addEventListener("change",e=>{e.stopPropagation(),e.preventDefault();const o=parseInt(e.target.value);window.__globalAudio.volume=o/100,t.volume=o/100}),i.addEventListener("mouseenter",()=>{v.classList.add("hover")}),i.addEventListener("mouseleave",()=>{setTimeout(()=>{v.classList.remove("hover")},300)}),_.addEventListener("mouseenter",()=>{n.classList.add("show")}),_.addEventListener("mouseleave",()=>{setTimeout(()=>{n.classList.remove("show")},500)}),n.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault()}),y(),window.addEventListener("beforeunload",()=>{}),setTimeout(()=>{b()},1e3)}),(t,A)=>(L(),S("div"))}});export{I as __pageData,z as default};
