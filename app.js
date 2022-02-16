const start = document.querySelector('.start')
const screen = document.querySelector('.screen')
const time = document.querySelectorAll('.time-btn')
const sec = document.getElementById('time')
const board = document.querySelector('.board')
const cir = document.createElement('div')
const score = document.querySelector('.score')
const back = document.querySelector('.back')
const sturt = document.querySelector('.sturt')
let count = 0
let num 
let congrat = document.createElement('h1')
congrat.textContent = `Congratulations! Your score is: ${count}`

sturt.addEventListener('click', () => { setInterval(countdown, 1000)
    cir.classList.add('circle')
    board.append(cir) })

let coin = function countDown() {
    num-=1
    sec.textContent = `00:${num}`
    if (num === 0) {
        clearInterval(coin)
        screen.classList.add('up')
    }
}

start.addEventListener('click', ()=>{
    screen.classList.add('up')
})

for (let t of time) {
    t.addEventListener('click', (element)=>{
    screen.classList.add('down')
    if (t.value == '10 sec') {
        num = 10
        sec.textContent = `${num}`
    } else if (t.value == '20 sec') {
        num = 20
        sec.textContent = `${num}`
    } else if (t.value == '30 sec') {
        num = 30
        sec.textContent = `${num}`
    }
    
    })

}


board.addEventListener('click', ()=>{
    })


    

    cir.addEventListener('click', ()=> {
        count+=1
        console.log(`${count}`)
        cir.style.position = 'absolute'
        cir.style.top = `${Math.floor(Math.random()*400)}px`
        cir.style.left = `${Math.floor(Math.random()*400)}px`
        cir.style.width = cir.style.height = `${Math.floor(Math.random()*40)}px`
        cir.style.minWidth = cir.style.minHeight = `7px`
        cir.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        if (count>0) {
            congrat.textContent = `Congratulations! Your score is: ${count}`
        } else if (count===0) {
        congrat.textContent = `Something went wrong... Your score is 0`
        }
    })




    function countdown() {
        if (num < 0) {
            clearInterval(num)
            board.append(congrat)
            congrat.classList.add('ct')
            cir.classList.add('hide')
        } else {
            sec.textContent = num
            num--
        }
    }


