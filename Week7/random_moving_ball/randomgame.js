var canvas = document.querySelector("canvas"); 
var ctx = canvas.getContext("2d"); 


//Ahmed Alsasa sep 4 2018 



var timer = setInterval(main, 1000/60); //calls the main function to be at around 60fps

//var x = 0; 
//var y = 0; 
//var w = 50; 
//var h = 50; 
//var vx = 5; 
//var vy = 5; 

var s = new GameObject(); 
s.color = "red"; 
s.x= 400; 
s.y= 300; 
s.vx = (Math.random() * 10) -10; //these are random numbers from 10 to -10, it applies for both the x and y 
s.vy= (Math.random() * 10) -10; 

s.w= 100; 

function main()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height) //erases the screen 
    //s.vx = Math.cos(s.angle*Math.PI/180)*2; //it's doing trigonometery 
    //s.vy = Math.sin(s.angle*Math.PI/180)*2; 
   
//ctx.strokeStyle = "red"; makes the outline red

    if(s.x > canvas.width - s.w/2)
    {
        s.vx = -10; 
        
    }
    if(s.x < 0 + s.w/2)
    {
        s.vx = 10; 
         
    }
    if(s.y > canvas.height - s.w/2)
    {
        s.vy = -10; 
         
    }
    if(s.y < 0 + s.w/2)
    {
        s.vy= 10; 
         
    }
    /*if(s.x <= 0+s.w/2)
    {
        s.vx = 10; 
    }
    */

//ctx.strokeRect(0, 0, 50, 50); 
    //s.angle+=s.vr; 
 
    s.move();
    s.drawCircle();
}