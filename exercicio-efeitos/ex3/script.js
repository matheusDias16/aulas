const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'white'

console.log(ctx);

// ctx.fillStyle = 'white';
// ctx.fillRect(50,150,10,50)  
 
class Particula{
constructor(efeito){
this.efeito = efeito;
this.radius = Math.random() * 40 + 5;
this.x = this.radius + Math.random() * (this.efeito.width - this.radius * 2) ;
this.y = this.radius + Math.random() * (this.efeito.height - this.radius *2);
this.vx = Math.random() * 4 -2;
this.vy = Math.random() * 4 -2;

}
chamar(context){
    context.fillStyle = 'hsl(' + this.x * 0.5 + ',100% , 50% )'
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}
update(){
this.x += this.vx;
if(this.x > this.efeito.width - this.radius || this.x < this.radius) this.vx *= -1;
this.y += this.vy;
if(this.y > this.efeito.height - this.radius || this.y < this.radius) this.vy *= -1;
}

}

class Efeito{
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particulas = [];
        this.numeroDeParticulas = 360;
        this.criarParticulas();
    }
    criarParticulas(){
        for(let i = 0; i< this.numeroDeParticulas; i++){
            this.particulas.push(new Particula(this))

        }
    }
    lidarComParticula(context){
        this.particulas.forEach(particula =>{
            particula.chamar(context);
            particula.update();
        })
    }
}
const efeito = new Efeito(canvas);


function animacao(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    efeito.lidarComParticula(ctx);
    requestAnimationFrame(animacao)
}
animacao()