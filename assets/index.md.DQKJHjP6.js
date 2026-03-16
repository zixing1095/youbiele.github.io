import{v as p,o as y,c as h}from"./chunks/framework.BZohXCq9.js";const P=JSON.parse('{"title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","frontmatter":{"layout":"home","title":"阿野的野径 - 记录普通人的逆袭之路","titleTemplate":"双非本科 | 在职读研 | Python 学习 | 英语提升","description":"阿野的个人博客，记录双非本科逆袭、在职读研、Python 学习、英语提升、个人成长的真实经历。野径不通，那就踩出一条路。","hero":{"name":"阿野的野径","text":"记录普通人的逆袭之路","tagline":"野径不通，那就踩出一条路","image":{"src":"/hero.svg","alt":"阿野的野径"},"actions":[{"theme":"brand","text":"关于我","link":"/about"},{"theme":"alt","text":"野径日记","link":"/blog/"},{"theme":"alt","text":"GitHub","link":"https://github.com/zixing1095"}]},"features":[{"icon":"📚","title":"Python 学习","details":"从 0 到 1，3 个月入门实战","link":"/learn/python/"},{"icon":"🗣️","title":"英语自救","details":"英语渣的 6 个月交流计划","link":"/learn/english/"},{"icon":"🎓","title":"在职读研","details":"双非本逆袭 985/211"},{"icon":"🤖","title":"OpenClaw","details":"打工人效率提升神器","link":"/tools/openclaw/"},{"icon":"✈️","title":"旅行生活","details":"工作再忙也要看世界"},{"icon":"💡","title":"个人成长","details":"普通人的自救之路"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1773648664000}'),g={name:"index.md"},x=Object.assign(g,{setup(b){return p(()=>{const e=document.createElement("div");e.className="music-player",e.innerHTML=`
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
  `,document.body.appendChild(e);const t=new Audio("/bgm.mp3");t.loop=!0,t.volume=.3;let i=!1;const l=e.querySelector(".music-btn"),o=l.querySelector(".icon-play"),a=l.querySelector(".icon-pause"),d=e.querySelector(".volume-btn"),u=e.querySelector(".volume-slider"),n=e.querySelector(".volume-slider-wrapper"),c=e.querySelector(".music-disc"),v=()=>{i?(o.style.display="none",a.style.display="block",c.classList.add("rotating")):(o.style.display="block",a.style.display="none",c.classList.remove("rotating"))},r=()=>{i?(t.pause(),i=!1,e.classList.remove("active")):(t.play().catch(()=>{}),i=!0,e.classList.add("active")),v()};l.addEventListener("click",s=>{s.stopPropagation(),r()}),d.addEventListener("click",s=>{s.stopPropagation(),n.classList.toggle("show")}),u.addEventListener("input",s=>{const m=s.target.value;t.volume=m/100}),document.addEventListener("click",()=>{n.classList.remove("show")}),setTimeout(()=>{r()},1e3)}),(e,t)=>(y(),h("div"))}});export{P as __pageData,x as default};
