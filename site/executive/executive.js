const fullscreenButton=document.getElementById('fullscreenButton');
const printButton=document.getElementById('printButton');

fullscreenButton?.addEventListener('click',async()=>{
  try{
    if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }catch(error){console.warn('Fullscreen could not be changed.',error)}
});

printButton?.addEventListener('click',()=>window.print());

document.addEventListener('fullscreenchange',()=>{
  if(fullscreenButton)fullscreenButton.textContent=document.fullscreenElement?'Exit Fullscreen':'Fullscreen';
});

document.addEventListener('keydown',event=>{
  if(event.key.toLowerCase()==='f')fullscreenButton?.click();
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='p'){
    event.preventDefault();
    window.print();
  }
});
