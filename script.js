const doc = document;



// styles for skills dashboard

// // JS
const js = doc.getElementById('js')
js.style.width = '80%'
js.style.background = '#5026A7'

// // HTML&CSS
const html_css = doc.getElementById('html_css')
html_css.style.width = '75%'
html_css.style.background = '#5026A7'

// // native science
const native = doc.getElementById('native_science')
native.style.width = '67%'
native.style.background = '#8D448B'

// // Administration
const admins = doc.getElementById('administration')
admins.style.width = '44%'
admins.style.background = '#CC6A87'

// // English
const english = doc.getElementById('English')
english.style.width = '40%'
english.style.background = '#ECCD8F'


function scroll_below()
{
  if(window.scrollY == 0)
  {
    let length = document.getElementsByClassName('wrapper')[0].offsetHeight
    let way = 0;
    let inter = setInterval(() => {
      way += 5
      window.scroll(0, way)
      if(way >= length) clearInterval(inter)
    }, 1)
  } else {
    let length = document.getElementsByClassName('wrapper')[0].offsetHeight*2
    let way = window.scrollY;
    let inter = setInterval(() => {
      way += 5
      window.scroll(window.scrollY, way)
      if(way >= length) clearInterval(inter)
    }, 1)
  }
  // window.scroll(0, length)
}