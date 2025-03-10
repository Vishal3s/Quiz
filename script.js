const body=document.body
const div=document.createElement('div')
const strong=document.createElement('strong')
strong.innerHTML="This is<br>"
div.innerHTML="Hello World"
div.append(strong)
body.append(div)
const hi=document.querySelector(".hi")
hi.remove()

