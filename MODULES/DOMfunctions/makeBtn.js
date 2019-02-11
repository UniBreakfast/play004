function makeBtn(props, more) {
  if (typeof props == 'string') var text = props
  else var {el, text, cls, id, func} = props

  const btn = document.createElement('button')

  if (id)   btn.id = id
  if (cls)  btn.className = cls
  if (text) btn.innerText = text
  el.append(btn)

  if (func) btn.onclick =e=> {
    e.preventDefault()
    func(e, more)
  }
  return btn
}