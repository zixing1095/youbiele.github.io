import{v as _,o as C,c as A}from"./chunks/framework.BZohXCq9.js";const M=JSON.parse('{"title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","frontmatter":{"layout":"home","title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","hero":{"name":"阿野的野径","text":"记录普通人的逆袭之路","tagline":"野径不通，那就踩出一条路","image":{"src":"/hero.svg","alt":"阿野的野径"},"actions":[{"theme":"brand","text":"关于我","link":"/about"},{"theme":"alt","text":"野径日记","link":"/blog/"},{"theme":"alt","text":"GitHub","link":"https://github.com/zixing1095"}]},"features":[{"icon":"📚","title":"Python 学习","details":"从 0 到 1，3 个月入门实战","link":"/learn/python/"},{"icon":"🗣️","title":"英语自救","details":"英语渣的 6 个月交流计划","link":"/learn/english/"},{"icon":"🎓","title":"在职读研","details":"双非本逆袭 985/211"},{"icon":"🤖","title":"OpenClaw","details":"打工人效率提升神器","link":"/tools/openclaw/"},{"icon":"✈️","title":"旅行生活","details":"工作再忙也要看世界"},{"icon":"💡","title":"个人成长","details":"普通人的自救之路"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1773649171000}'),B={name:"index.md"},T=Object.assign(B,{setup(z){return _(()=>{const e=document.createElement("div");e.className="music-player",e.innerHTML=`
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
          <input type="range" class="volume-slider" min="0" max="100" value="30">
        </div>
      </div>
    </div>
  `,document.body.appendChild(e);const l=new Audio("/bgm.mp3");l.loop=!0,l.volume=.3;let o=!1,i=null,n=null,a=null,c=null;const r=e.querySelector(".music-btn"),m=r.querySelector(".icon-play"),v=r.querySelector(".icon-pause"),b=e.querySelector(".volume-btn"),x=e.querySelector(".volume-slider"),y=e.querySelector(".volume-slider-wrapper"),h=e.querySelector(".music-disc"),k=e.querySelector(".ripple-container"),g=e.querySelector(".disc-inner"),S=()=>{i||(i=new(window.AudioContext||window.webkitAudioContext),n=i.createAnalyser(),i.createMediaElementSource(l).connect(n),n.connect(i.destination),n.fftSize=64,a=new Uint8Array(n.frequencyBinCount))},q=s=>{const t=document.createElement("div");t.className="ripple";const d=1+s/255*2,u=220+s/255*60,p=.3+s/255*.5;t.style.setProperty("--ripple-scale",d),t.style.setProperty("--ripple-hue",u),t.style.setProperty("--ripple-opacity",p),k.appendChild(t),setTimeout(()=>{t.remove()},1500)},f=()=>{if(!o||!n)return;n.getByteFrequencyData(a);const t=a.reduce((p,L)=>p+L,0)/a.length,d=220+t/255*60,u=50+t/255*20;g.style.setProperty("--disc-hue",d),g.style.setProperty("--disc-lightness",u),t>100&&q(t),e.style.setProperty("--audio-intensity",t),c=requestAnimationFrame(f)},P=()=>{o?(m.style.display="none",v.style.display="block",h.classList.add("rotating"),e.classList.add("active")):(m.style.display="block",v.style.display="none",h.classList.remove("rotating"),e.classList.remove("active"))},w=async()=>{if(o)l.pause(),o=!1,c&&cancelAnimationFrame(c),P();else try{await l.play(),o=!0,S(),i&&i.state==="suspended"&&await i.resume(),f(),P()}catch(s){console.log("播放失败",s)}};r.addEventListener("click",s=>{s.stopPropagation(),w()}),b.addEventListener("click",s=>{s.stopPropagation(),y.classList.toggle("show")}),x.addEventListener("input",s=>{const t=s.target.value;l.volume=t/100}),document.addEventListener("click",()=>{y.classList.remove("show")}),setTimeout(()=>{w()},1e3)}),(e,l)=>(C(),A("div"))}});export{M as __pageData,T as default};
