function makeVal(valCase, hint) {
  return function() {
    if ((new RegExp(({
      'login3to32': '^\\w{3,32}$',
      'email': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]'+
      '\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]'+
      '{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
      'startConf': '^[2-9]$|^10$'
    })[valCase])).test(this.value)) {
      hintBoxR(this)
      return this.value
    } else hintBoxR(this, hint)
  }
}

const inpVal = inp=> inp.val? inp.val() : inp.value
