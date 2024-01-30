let level=0
let first=false
let h3=document.querySelector('h3')
let buttons=['btn1','btn2','btn3','btn4']
let gameSeq=[]
let userSeq=[]
let arr=[] 

document.addEventListener('keypress',function(){
    if(first===false){
    first=true
    }
    levelUp()
})

function levelUp(){
    userSeq=[]
    level++;
    h3.innerText=`Level:${level}`
    let rndNum=Math.floor(Math.random()*3)
    let rndIdx=buttons[rndNum]
    gameSeq.push(rndIdx)
    console.log(gameSeq)
    let btn=document.querySelector(`.${rndIdx}`)
    flashBtn(btn)
    
}

function flashBtn(btn){
    btn.classList.add('flash')
    setTimeout(()=>{
     btn.classList.remove('flash')
    },500)
}

function userflash(btn){
    btn.classList.add('userflash')
    setTimeout(()=>{
     btn.classList.remove('userflash')
    },500)
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length===gameSeq.length)
    setTimeout(levelUp,1000)
    }
    else{
        arr.push(level)
        let max=Math.max(...arr)
    h3.innerHTML=`Game Over Your score was <b>${level}</b>
<br /> <b> high Score ${max}</b> <br /> press Any key to Restart!`
document.querySelector('body').style.backgroundColor='red'
setTimeout(function(){
    document.querySelector('body').style.backgroundColor='white'
},250)
    gameReset()
    }
}

function btnPress(){
   let btn=this
   userflash(btn)
   let btnName=btn.getAttribute('id')
   userSeq.push(btnName)
   checkAns(userSeq.length-1)
}
let allBtns=document.querySelectorAll('button')

for(allBtn of allBtns){
    allBtn.addEventListener('click',btnPress)
}

function gameReset(){
    level=0
    first=false
    userSeq=[]
    gameSeq=[]
}


