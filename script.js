// const canvas = document.createElement("canvas");
// document.querySelector(".particles").appendChild(canvas);

// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let particlesArray = [];

// class Particle{
//     constructor(){
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2;
//         this.speedY = Math.random() * 0.5;
//     }
//     update(){
//         this.y += this.speedY;
//         if(this.y > canvas.height){
//             this.y = 0;
//         }
//     }
//     draw(){
//         ctx.fillStyle = "#d4af37";
//         ctx.beginPath();
//         ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
//         ctx.fill();
//     }
// }

// function init(){
//     for(let i=0;i<100;i++){
//         particlesArray.push(new Particle());
//     }
// }

// function animate(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     particlesArray.forEach(p=>{
//         p.update();
//         p.draw();
//     });
//     requestAnimationFrame(animate);
// }

// init();
// animate();