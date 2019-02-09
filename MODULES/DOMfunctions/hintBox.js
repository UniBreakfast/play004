
function hintBox(x,y,el,str,t,cls) {
  if (el.hintBox) el.hintBox.remove()
  if (str===undefined) return
  const h = el.hintBox = document.createElement('span'), {style:s} = h
  h.className = 'hintBox'+ (cls? ' '+cls : '')
  h.innerText = str
  h.onclick =()=> h.remove()
  s.position = 'fixed'
  s.left = x+'px'
  s.top  = y+'px'
  s.cursor = 'default'
  el.after(h)
  if (t!==0) setTimeout(()=>h.remove(), (t? t:5)*1000)
  return h
}

let hintBoxR = (el,str,t,cls) =>
  hintBox(el.offsetLeft+el.offsetWidth, el.offsetTop-7, el,str,t,cls)
