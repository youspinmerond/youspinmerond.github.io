console.clear()
const doc = document
const country = {}
let c = 0
for(i=0;i<= doc.getElementsByTagName('map')[0].children.length-1; i++)
{
b = doc.getElementsByTagName('map')[0].children[i].alt
country[b] = b
}
const menu = doc.createElement('div')
menu.className = 'menu'
addEventListener("click", e => {
    if(e.target.alt)
    {
        c++
        console.log(e)
        menu.style.left = e.clientX/2 + 'px'
        menu.style.top  = e.clientY + 'px'
        menu.textContent = e.target.alt
        c % 2 ? doc.body.append(menu) : doc.getElementsByClassName('menu')[0] = null
    }
})