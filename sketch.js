
function start(){
 t=new logo(300,500,-90,"can1");
 t2=new logo(100,50,-90,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="black";
//sq(t);
v(100,t);
t.rt(90);
chaos(t2,50);
sqs(t2,8,20);
}


function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 
 function a(){
	t=new logo(300,500,-90,"can1"); 
	t.c.lineWidth=1;
t.c.strokeStyle="black";
v1(100,t);
 } 
 
 function b(){
	t=new logo(300,500,-90,"can1"); 
	t.c.lineWidth=1;
t.c.strokeStyle="black";
multisqs(t,10,10); 
 }
 
 function c(){
 t=new logo(300,500,-90,"can1"); 
	t.c.lineWidth=1;
t.c.strokeStyle="black";
stairs(t,30,10);
shapes(t24,30)
 }
 
