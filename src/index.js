import "./styles.css"
import { htmlM,htmlH,htmlA } from "./barrell.js"


(()=>{
const opt = [htmlH,htmlM,htmlA]
opt[0]()
const content = document.getElementById('content')
const btns = document.querySelectorAll('button')
btns.forEach((element,k) => {
    element.addEventListener('click',()=>{
            for (const btn in btns) {
                if (btns[btn]===btns[k]){
                    element.disabled = true
                }
                else{
                    element.disabled = false
                }
            }
        content.innerHTML = ""
        opt[k]()
    })
});
})()
