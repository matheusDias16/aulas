const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'yellow');
gradient.addColorStop(0.4, 'green');
gradient.addColorStop(0.6, 'cyan');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'magenta');

class Simbolo {
  constructor(x, y, fontSize, canvasHeight) {
    this.caractereres = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y
    this.fontSize = fontSize;
    this.texto = '';
    this.canvasHeight = canvasHeight;
  }
  chamar(context) {
    this.texto = this.caractereres.charAt(Math.floor(Math.random()*this.caractereres.length));
    
    context.fillText(this.texto,this.x * this.fontSize, this.y * this.fontSize );
    if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){
      this.y = 0;
    } else{
      this.y += 1
    }

  }
}

class Efeito {
  constructor(canvaswidth, canvasHeight) {
    this.canvaswidth = canvaswidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvaswidth / this.fontSize;
    this.simbolos = []
    this.#inicializar();
    console.log(this.simbolos);
  }
  #inicializar() {
    for (let i = 0; i < this.columns; i++) {
      this.simbolos[i] = new Simbolo(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width,height){
this.canvasHeight= height;
this.canvaswidth = width;
this.columns = this.canvaswidth/this.fontSize;
this.simbolos = [];
this.#inicializar();
  }
}

const efeito = new Efeito(canvas.height,canvas.width);
let ultimo = 0;
const fps = 30;
const proximoFrame = 1000/fps;
let tempo = 0;

function animacao(tempoCerto) {
  const tempoD = tempoCerto - ultimo;
  ultimo = tempoCerto;
  if(tempo > proximoFrame){
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.textAlign = 'center'
    ctx.fillRect(0 , 0 , canvas.width , canvas.height)
    ctx.fillStyle =  gradient//'#0aff0a';
  ctx.font = efeito.fontSize + 'px monospace';
  efeito.simbolos.forEach(simbolo=>simbolo.chamar(ctx));
  tempo = 0;
  }else{
    tempo += tempoD
  }

requestAnimationFrame(animacao);
}
animacao(0);

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
efeito.resize(canvas.width,canvas.height); 
})