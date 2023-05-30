let playerState = 'run'
const dropdown = document.getElementById('animations');

dropdown.addEventListener("change", (e)=>{
    playerState = e.target.value;
})
const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 600;

const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();

const spriteWidth = 575;

const spriteHeight = 523;

let gameFrame = 0;

const staggerFrame = 5;

const spriteAnimations = [];

const animationStates = [
    {name: 'idle', frames:6},
    {name: 'jump', frames:6},
    {name: 'fall', frames:6},
    {name: 'run', frames:8},
    {name: 'dizzy', frames:11},
    {name: 'sit', frames:4},
    {name: 'roll', frames:6},
    {name: 'bite', frames:6},
    {name: 'ko', frames:11},
    {name: 'getHit', frames:3},
];

animationStates.forEach((state,index)=>{
let frames = {
    loc:[],
}
for(let currentPos = 0;currentPos<= state.frames; currentPos++){
    let positionX = currentPos * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({
        x:positionX,
        y:positionY
    })
}
spriteAnimations[state.name] = frames;
console.log("this is spriteAnimations :",spriteAnimations)
})



playerImage.src = './assets/shadow_dog.png';

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  
   let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState ].loc.length;
   let frameX = spriteWidth * position;
   let frameY = spriteAnimations[playerState ].loc[position].y;
  ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

  gameFrame++;
    requestAnimationFrame(animate);
}

animate();