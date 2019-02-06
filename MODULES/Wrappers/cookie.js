function setCookie(name, value, minutes) {
  const miliseconds = minutes*60*1000,
        now = new Date(),
        expire = new Date(now.getTime()+miliseconds)
  document.cookie =
    name+'='+value+'; path=/; expires='+expire.toUTCString()
}

function delCookie(name) {
  setCookie(name, '', -60*24)
}

function getCookie(name) {
  const regExp = new RegExp('(^| )' + name + '=([^;]+)'),
        match = document.cookie.match(regExp);
  if (match) return match[2];
}

Object.defineProperty(window, "cookies", {
  get: () =>
    document.cookie.split(';').reduce((cookies, cookie) => {
      cookies[(cookie.split("=")[0]).replace(/ /g,'')] =
        unescape(cookie.split("=")[1]);
      return cookies
    }, {})
});