const slides=[...document.querySelectorAll('.exec-slide')];
const prevButton=document.getElementById('prevButton');
const nextButton=document.getElementById('nextButton');
const fullscreenButton=document.getElementById('fullscreenButton');
const printButton=document.getElementById('printButton');
const counter=document.getElementById('slideCounter');
const stage=document.getElementById('stage');
let current=0;

function resizeStage(){
  const scale=Math.min(window.innerWidth/1920,window.innerHeight/1080);
  if(stage)stage.style.transform=`scale(${scale})`;
}

function showSlide(index,{updateHash=true}={}){
  current=Math.max(0,Math.min(index,slides.length-1));
  slides.forEach((slide,i)=>slide.classList.toggle('active',i===current));
  if(counter)counter.textContent=`${current+1} / ${slides.length}`;
  if(prevButton)prevButton.disabled=current===0;
  if(nextButton)nextButton.disabled=current===slides.length-1;
  if(updateHash)history.replaceState(null,'',`#${slides[current].id}`);
  document.title=`AK9I Executive Summary — ${current+1} of ${slides.length}`;
}

function next(){showSlide(current+1)}
function previous(){showSlide(current-1)}

prevButton?.addEventListener('click',previous);
nextButton?.addEventListener('click',next);
printButton?.addEventListener('click',()=>window.print());
fullscreenButton?.addEventListener('click',async()=>{
  try{
    if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }catch(error){console.warn('Fullscreen could not be changed.',error)}
});

document.addEventListener('fullscreenchange',()=>{
  if(fullscreenButton)fullscreenButton.textContent=document.fullscreenElement?'×':'⛶';
  resizeStage();
});

document.addEventListener('keydown',event=>{
  if(event.target.matches('input,textarea,select,button'))return;
  if(event.key==='ArrowRight'||event.key===' '||event.key==='PageDown'){
    event.preventDefault();next();
  }else if(event.key==='ArrowLeft'||event.key==='PageUp'){
    event.preventDefault();previous();
  }else if(event.key==='Home'){
    event.preventDefault();showSlide(0);
  }else if(event.key==='End'){
    event.preventDefault();showSlide(slides.length-1);
  }else if(event.key.toLowerCase()==='f'){
    event.preventDefault();fullscreenButton?.click();
  }else if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='p'){
    event.preventDefault();window.print();
  }
});

window.addEventListener('resize',resizeStage);
resizeStage();
const requested=location.hash.slice(1);
const initialIndex=slides.findIndex(slide=>slide.id===requested);
showSlide(initialIndex>=0?initialIndex:0,{updateHash:false});
