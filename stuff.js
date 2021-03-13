function sq(t,len){
for(let j=0; j<4; j++){
	t.fd(len);t.rt(90);
}
}

function multisqs (t,len,num){
for (let j=0; j<num;j++){
	sq(t,j*len);
}
}

function stairs(t,len,num){
	for(let j=1;j<num+1;j=j+1){
		sq(t,len);t.fd(len);t.rt(90);
		t.fd(len);t.lt(90);
	}
}

function v1(len,t) {
	if(len<15) {}
	else{t.rt(30);t.fd(len);v1(2*len/3,t);t.bk(len);t.rt(30);
	t.lt(60);t.fd(len);v1(2*len/3,t);t.bk(len);t.rt(30);
	t.lt(60);t.fd(len);v1(2*len/3,t);t.bk(len);t.rt(30);
	}
}


function v(len,t) {
	if(len<15) {let x=t.xpos(); let y=t.ypos();
	let a=t.dir();chaos(t,20);t.set1(x,y,a);}
	
	else{t.rt(30);t.fd(len);v(2*len/3,t);t.bk(len);
	t.lt(60);t.fd(len);v(2*len/3,t);t.bk(len);t.rt(30);
	}
	
}



function chaos(t,n){
	if(n<2){}
	else{
		t.fd(10);t.rt(Math.random()*180);
		chaos(t,n-1);
	}
}


function shapes(t2,len){
	for(let j=0; j<8; j++){
	t2.fd(len);t2.rt(95);
	
}}
