function makeInp(props) {
  if (typeof props == 'string') var text = props
  else var {el, text, elClass, numForId, id, type, compact,
            validation, complaint} = props

  const inp = document.createElement('input'),
        lbl = compact? 0: document.createElement('label')

  if (type) inp.setAttribute('type', type)
  if (el && elClass) el.classList.add(elClass)
  if (id || numForId) {
    inp.id = id || 'inp'+numForId
    lbl? lbl.setAttribute('for', id || 'inp'+numForId) :0
  }
  if (lbl) {
    if (numForId) lbl.id = 'lbl'+numForId
    lbl.innerText = text
    el.append(lbl)
  }
  else inp.setAttribute('placeholder', text)
  el.append(inp)

  if (validation) inp.val = makeVal(validation, complaint)

  return {lbl, inp}
}