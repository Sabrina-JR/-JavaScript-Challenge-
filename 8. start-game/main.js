// DOM

const startBtn = document.querySelector('.start-btn'); //開始btn
const restartBtn = document.querySelector('.restart-btn'); //重新遊戲btn
const crossBtn = document.querySelector('.cross-btn'); //x btn
const circleBtn = document.querySelector('.circle-btn'); // o btn
const tieBtn = document.querySelector('.tie-btn'); // tie btn
const beginStartScreen = document.querySelector('.begin-start'); //開始畫面
const startScreen = document.querySelector('.satrt'); //遊戲畫面
const crossWinScreen = document.querySelector('.cross-win') //cross畫面
const circleWinScreen = document.querySelector('.circle-win') //circle畫面

const tieScreen = document.querySelector('.tie')  //tie畫面


const Score = document.querySelectorAll('.start-scoring'); //計分欄
const crossScore = document.querySelectorAll('.cross-scoring'); //x記分欄
const circleScore = document.querySelectorAll('.circle-scoring'); //o計分欄
const tieScore = document.querySelectorAll('.tie-scoring'); //tie 計分欄
console.log(circleScore )


const boxes = document.querySelectorAll('.game-box');//九個格子



const player_1 = 1 //圈
const player_2 = -1 //叉

let step = 1;
let winner= null;
let player_O = 0;
let player_X = 0;
let map =[0,0,0,0,0,0,0,0,0]

window.onload = () =>{
    if(beginStartScreen.style.display = 'block'){
        startScreen.style.display = 'none';
        crossWinScreen.style.display = 'none';
        circleWinScreen.style.display = 'none';
        tieScreen.style.display = 'none'
    }
}


//開始按鈕
startBtn.addEventListener('click',()=>{
    const body = document.body;
    body.style.backgroundColor = '#FF6D70';
    startScreen.style.display = 'block';
    beginStartScreen.style.display = 'none';
    Score[1].innerHTML =  0;
    Score[0].innerHTML =  0;

    if(player_O > 0 ){
        Score[1].innerHTML =  player_O;
        Score[0].innerHTML =  player_X;
    }else if(player_X > 0){
        Score[1].innerHTML =  player_O;
        Score[0].innerHTML =  player_X;
    }

})

restartBtn.addEventListener('click', Restart)

// x重新
crossBtn.addEventListener('click', ()=>{
    startScreen.style.display = 'block';
    crossWinScreen.style.display = 'none';
    Restart();
})

// o重新
circleBtn.addEventListener('click', ()=>{
    startScreen.style.display = 'block';
    circleWinScreen.style.display = 'none';
    Restart();    
})

//tie 重新
tieBtn.addEventListener('click', ()=>{
    startScreen.style.display = 'block';
    tieScreen.style.display = 'none';
    Restart();     
})




boxes.forEach((box, index) => {
    box.addEventListener('click', function() {
            if(box.innerHTML !== ''){ 
                return
            }

            if(step % 2 !== 0){
               map[index] = player_1 //0 first
               box.innerHTML = `<div class='game-box-circle'></div>`
               
            }else{
                map[index] = player_2;  //x  
                box.innerHTML= `<div class='game-box-cross'></div>`
         
            }
            step ++
            GameResult(map);
            
            
    })
 
  
})

function Restart(){
    boxes.forEach((box)=>{
        box.innerHTML = ''
    })
    map =[0,0,0,0,0,0,0,0,0];
    step= 1;
    winner=null;
    console.log('重新:'+map,step)
}


let  GameResult = (map) =>{
    let GameRule =[
        map[0]+map[1]+map[2],
        map[3]+map[4]+map[5],
        map[6]+map[7]+map[8], // 行
        map[0]+map[3]+map[6],
        map[1]+map[4]+map[7],
        map[2]+map[5]+map[8], // 直
        map[0]+map[4]+map[8],
        map[2]+map[4]+map[6], // 交叉
    ]

    //單數o 雙數x
    GameRule.forEach((box)=>{
            if(box == 3 ){
                winner = 'CIRCLE WIN';
                startScreen.style.display = 'none';
                circleWinScreen.style.display = 'block';
            }else if(box == -3  ){
                winner = 'CROSS WIN';
                startScreen.style.display = 'none';
                crossWinScreen.style.display = 'block';
            }else if (step == 10){
                winner = 'TIE';
                startScreen.style.display = 'none';
                tieScreen.style.display = 'block';
            }
           
            console.log(winner,map,box,step)
    })
    UpdateScoring(winner)
}

let UpdateScoring = (winner) =>{

 
    switch(winner){

        case 'CIRCLE WIN':
           player_O++
           console.log('PLAYER_O:'+player_O);

           Score[1].innerHTML =  player_O;
           crossScore[1].innerHTML = player_O;
           circleScore[1].innerHTML = player_O;

           localStorage.setItem('player_O', player_O )
            break;
        case 'CROSS WIN':
           player_X++
           console.log('PLAYER_X:'+player_X)

           Score[0].innerHTML =  player_X;
           crossScore[0].innerHTML = player_X;
           circleScore[0].innerHTML = player_X;
           
           localStorage.setItem('player_X', player_X )
            break;
       default:
            break;
    }
    if(winner = 'TIE'){
        tieScore[1].innerHTML = player_O
        tieScore[0].innerHTML = player_X
    }
 
}

let Data = () =>{

    player_O = localStorage.getItem('player_O');
    player_X = localStorage.getItem('player_X');
} 
   Data();














