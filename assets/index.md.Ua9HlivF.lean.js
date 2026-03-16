import{v as _,o as C,c as A}from"./chunks/framework.BZohXCq9.js";const I=JSON.parse('{"title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","frontmatter":{"layout":"home","title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","hero":{"name":"阿野的野径","text":"记录普通人的逆袭之路","tagline":"野径不通，那就踩出一条路","image":{"src":"/hero.svg","alt":"阿野的野径"},"actions":[{"theme":"brand","text":"关于我","link":"/about"},{"theme":"alt","text":"野径日记","link":"/blog/"},{"theme":"alt","text":"GitHub","link":"https://github.com/zixing1095"}]},"features":[{"icon":"📚","title":"Python 学习","details":"从 0 到 1，3 个月入门实战","link":"/learn/python/"},{"icon":"🗣️","title":"英语自救","details":"英语渣的 6 个月交流计划","link":"/learn/english/"},{"icon":"🎓","title":"在职读研","details":"双非本逆袭 985/211"},{"icon":"🤖","title":"OpenClaw","details":"打工人效率提升神器","link":"/tools/openclaw/"},{"icon":"✈️","title":"旅行生活","details":"工作再忙也要看世界"},{"icon":"💡","title":"个人成长","details":"普通人的自救之路"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1773649688000}'),B={name:"index.md"},M=Object.assign(B,{setup(z){return _(()=>{const s=document.createElement("div");s.className="music-player",s.innerHTML=`
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
  `,document.body.appendChild(s);const i=new Audio("/bgm.mp3");i.loop=!0,i.volume=.3;let o=!1,n=null,l=null,a=null,c=null;const r=s.querySelector(".music-btn"),m=r.querySelector(".icon-play"),y=r.querySelector(".icon-pause"),L=s.querySelector(".volume-btn"),d=s.querySelector(".volume-slider"),h=s.querySelector(".volume-slider-wrapper"),g=s.querySelector(".music-disc"),k=s.querySelector(".ripple-container"),f=s.querySelector(".disc-inner"),P=s.querySelector(".music-info"),S=()=>{n||(n=new(window.AudioContext||window.webkitAudioContext),l=n.createAnalyser(),n.createMediaElementSource(i).connect(l),l.connect(n.destination),l.fftSize=64,a=new Uint8Array(l.frequencyBinCount))},q=e=>{const t=document.createElement("div");t.className="ripple";const u=1+e/255*2,p=220+e/255*60,v=.3+e/255*.5;t.style.setProperty("--ripple-scale",u),t.style.setProperty("--ripple-hue",p),t.style.setProperty("--ripple-opacity",v),k.appendChild(t),setTimeout(()=>{t.remove()},1500)},w=()=>{if(!o||!l)return;l.getByteFrequencyData(a);const t=a.reduce((v,E)=>v+E,0)/a.length,u=220+t/255*60,p=50+t/255*20;f.style.setProperty("--disc-hue",u),f.style.setProperty("--disc-lightness",p),t>100&&q(t),s.style.setProperty("--audio-intensity",t),c=requestAnimationFrame(w)},b=()=>{o?(m.style.display="none",y.style.display="block",g.classList.add("rotating")):(m.style.display="block",y.style.display="none",g.classList.remove("rotating"))},x=async()=>{if(o)i.pause(),o=!1,c&&cancelAnimationFrame(c),b();else try{await i.play(),o=!0,S(),n&&n.state==="suspended"&&await n.resume(),w(),b()}catch(e){console.log("播放失败",e)}};r.addEventListener("click",e=>{e.stopPropagation(),x()}),L.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),h.classList.toggle("show")}),d.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault()}),d.addEventListener("input",e=>{e.stopPropagation(),e.preventDefault();const t=parseInt(e.target.value);i.volume=t/100,console.log("音量调节:",t+"%","实际音量:",i.volume)}),d.addEventListener("change",e=>{e.stopPropagation(),e.preventDefault();const t=parseInt(e.target.value);i.volume=t/100}),document.addEventListener("click",()=>{h.classList.remove("show")}),s.addEventListener("mouseenter",()=>{P.classList.add("hover")}),s.addEventListener("mouseleave",()=>{setTimeout(()=>{P.classList.remove("hover")},300)}),setTimeout(()=>{x()},1e3)}),(s,i)=>(C(),A("div"))}});export{I as __pageData,M as default};
