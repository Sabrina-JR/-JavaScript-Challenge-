//取DOM
const Canvas = document.getElementById('canvas-panel');
const Ctx = Canvas.getContext('2d');
Canvas.width = innerWidth;
Canvas.height = innerHeight;

//畫筆的顏色粗細
Ctx.strokeStyle = 'block'; //色筆顏色
Ctx.lineJoin = 'round'; //兩條線交會的地方 是圓角
Ctx.lineCap = 'round'; //繪製結束的線帽
Ctx.lineWidth = 10; //色筆大小

let isDrowing = false;
let lastX = 0;
let lastY = 0;


let Draw = (e) =>{
    if(!isDrowing) return;
    Ctx.beginPath;
    Ctx.moveTo(lastX,lastY); //開始 
    Ctx.lineTo(e.offsetX,e.offsetY); //結束
    Ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
 let value = e.target

//  console.log(e)
}


Canvas.addEventListener('mousemove', Draw); //滑鼠移動
Canvas.addEventListener('mousedown',(e)=>{  //放開按下後
    isDrowing =true; //判斷是否正在畫畫
    [lastX, lastY] = [e.offsetX, e.offsetY] //畫下的位置

    // console.log(lastX, lastY)
    // console.log(isDrowing)
});

Canvas.addEventListener('mouseup',(e)=>{ //滑鼠放開後
 isDrowing = false; //判斷是否正在畫畫

//  console.log(isDrowing)
})

Canvas.addEventListener('mouseout',()=>{ //滑鼠放開畫框
    isDrowing = false;

//  console.log(isDrowing)
})

console.log(Canvas)

