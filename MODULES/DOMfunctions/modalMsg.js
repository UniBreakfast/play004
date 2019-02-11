function modalMsg(props, more) {
  if (typeof props == 'string') var text = props
  else var {el, text, cls, id, w, e, onshow, onclose, local} = props

  const scr = document.createElement('div'), {style:s}=scr
        box = document.createElement('span'),
        msg = document.createElement('p'),
        ok  = document.createElement('button')
  if (cls) scr.className = cls
  if (id)  scr.id = id
  if (el && local) el.style.position = 'relative'
  s.position = 'absolute'
  s.top  = '0'
  s.left = '0'
  s.width  = '100%'
  s.height = '100%'
  s.zIndex = '8'
  scr.append(box)
  msg.innerText = text
  if (w) box.style.width = w
  box.append(msg, ok)
  ok.innerText = 'Ok'
  el? el.append(scr) : document.body.append(scr)
  ok.focus()

  const modal = {scr, box, msg, ok}
  if (onshow) onshow(modal, e, more)

  function closeModal() {
    scr.remove()
    if (onclose) onclose(modal, e, more)
  }
  scr.onclick   =e=> e.target==scr || e.target==ok ? closeModal() :0
  scr.onkeydown =e=>                 e.keyCode==27 ? closeModal() :0

  return modal
}