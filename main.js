const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;


/*ctx.fillStyle = '#00a'; 
ctx.fillRect(59, 50, 80, 120);
ctx.strokeStyle = '#90a';
ctx.strokeText('ALGOSUP', 50, 30, 50);
ctx.font =' 30px Arial';
ctx.strokeText('JavaScript', 200, 50, 200);

console.log(ctx);
console.log(canvas.width);
console.log(canvas.height);

//ctx.strokeRect(250, 50, 100, 100);
//ctx.strokeRect(150, 75, 100, 100);
//ctx.fillRect(50, 50, 80, 100);

//ctx.strokeText('ALGOSUP', 120, 30, 50);
//ctx.fillText('ALGOSUP', 200, 10, 50);

const w = 50, h = 50;

ctx.fillStyle = '#0a0';
ctx.fillRect((cw - w )/2, (ch - h )/2, w, h);

ctx.ellipse(150, 150, 40, 50, 0, 0, Math.PI );
ctx.fill();

ctx.beginPath();
ctx.setLineDash([10, 15]);
ctx.moveTo(50, 0);
ctx.lineTo(0, 100);
ctx.lineTo(100, 100);*/
class Ghost {
    image = null;
    rect ={};
    constructor(w, h, source){
        this.w = w;
        this.h = h;

        this.x = 0;
        this.y = (ch - h)/2;

        this.prevRect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };

        this.image = new Image();
        this.image.src ='ghost-solid.svg';

        this.image.addEventListener('load', () => {
        this.drawImage();
    
        });
    }
    saveRect(){
        this.rect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };
    }

    drawImage(){
        ctx.clearRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    moveRight(){
        this.rect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };
        this.x += 2;
        if(x > 500){
            this.x -=2;
        }
        
       
    }
    moveLeft(){
        this.rect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };
        this.x -= 2;
        if (x < 0){
            this.x += 2;
        }
       
    }
    increase(){
        this.saveRect();
        this.w += 2;
        this.h += 2;
    }
    decrease(){
        this.saveRect();
        this.w -= 2;
        this.h -= 2;
    }

}
const ghost = new Ghost(50, 50, 'ghost-solid.svg');
document.addEventListener('keydown', e => {
    if(e.key == 'ArrowRight'){  
        ghost.moveRight();
    }
    if(e.key == 'ArrowLeft'){  
        ghost.moveLeft();
    }
    if(e.key == 'ArrowUp'){  
        ghost.increase();
    }
    if(e.key == 'ArrowDown'){  
        ghost.decrease();
    }
    ghost.drawImage();
});


/*document.addEventListener('keydown', e => {
    if(e.key == 'ArrowRight'){
        ctx.clearRect(x, y, w, h);
        x+= 2;
        ctx.drawImage(img, x, y, w, h);
    }
});*/





