

var cvs= document.getElementById("canvas");
var ctx= cvs.getContext("2d");




//load images

var bird= new Image();
var bg= new Image();
var fg= new Image();
var pipeNorth= new Image();;
var pipeSouth= new Image();


bird.src="images/bird.png";
bg.src="images/bg.png";
fg.src="images/fg.png";
pipeNorth.src="images/pipeNorth.png";
pipeSouth.src="images/pipeSouth.png";


//variable 

var gap = 70;
var constant = pipeNorth.height+gap;
var grass= cvs.height- fg.height;

var bX=10;
var bY= 150;
var gravity=1;
var score=0;

//on key down

document.addEventListener("keydown", moveUp);

function moveUp(){
    
    bY -=25;
      
}

//pipe coordinates
var pipe=[];
pipe[0]={
    
    x : cvs.width,
    y : 0
};


function draw(){
    
    // background
    ctx.drawImage(bg,0,0);
    
    // pipes
    for(var i=0; i<pipe.length; i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y + constant);
        pipe[i].x--;
        
        if( pipe[i].x ==120){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height)- pipeSouth.height
                
                
            });
                
                }
        
        //collision
      /*  if(bX + bird.width >= pipe[i].x && bX <= pipe[i].x+pipeNorth.width
          &&(bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+ constant)){
            
            location.reload(); //reload the page
           
        }*/
        
        // score
        if(pipe[i].x ==5){
            
            score++;
        }
                
    }
    
    
    //floor
    ctx.drawImage(fg,0,cvs.height-fg.height);
    
    //bird
    ctx.drawImage(bird,bX,bY);
    
    bY +=gravity;
    //ctx.fillStyle("#000");
    
    ctx.fillText("Score:  "+score, 10, cvs.height - 20);
    
    requestAnimationFrame(draw);
     
    
}



draw();