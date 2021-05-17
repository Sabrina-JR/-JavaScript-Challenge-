//DOM

// const startBtn = document.querySelector('.start-btn');
// const beginStartScreen = document.querySelector('.begin-start');
// const startScreen = document.querySelector('.satrt');
const restartBtn = document.querySelector('.restart-btn');
console.log(restartBtn)
const boxes = document.querySelectorAll('.game-box')//九個格子




const PLAYER_1 = 1 //圈
const PLAYER_2 = -1 //叉

let Step = 1;

let map =[0,0,0,0,0,0,0,0,0]


 


boxes.forEach((box, index) => {
    box.addEventListener('click', function() {
            if(box.innerHTML !== ''){ 
                return
            }

            if(Step % 2 !== 0){
               map[index] = PLAYER_1 //0 first
               box.innerHTML = `<div class='game-box-circle'></div>`
               
            }else{
                map[index] = PLAYER_2;  //x  
                box.innerHTML= `<div class='game-box-cross'></div>`
         
            }
            Step ++
            console.log(map)
            // console.log(Step)
            GameResult(Step);
    })
 
  
})



let  GameResult = () =>{
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
            if(box === 3){
                console.log('Circle win'+ Step)
            }else if(box === -3){
                console.log('Cross win'+ Step)
            }else if (Step === 10){
                console.log('draw'+ Step)
            }
            console.log(map,Step)
    })
    
}

restartBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML = ''
    })
    map =[0,0,0,0,0,0,0,0,0];
    Step= 1;
    GameResult(Step);
    console.log('重新:'+map,Step)
})
  


   

    
    



// window.onload = () =>{
//     if()
// }





//開始按鈕

// startBtn.addEventListener('click',()=>{
//     const body = document.body;
//     body.style.backgroundColor = '#FF6D70';
//     startScreen.style.display = 'block';
//     beginStartScreen.style.display = 'none';

// })



