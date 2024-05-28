const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const sizeEl = document.getElementById('size')
let text = "I am Keerthana Gunasekaran"
let idx = 1
let speed = 300 / speedEl.value
let size = "18px"

writeText()
function writeText() {
    textEl.style.fontSize = size;
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
    
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
sizeEl.addEventListener('input',(e) => size = e.target.value + "px")
