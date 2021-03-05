function sq(){
t.fd(50);t.rt(90);t.fd(50);t.rt(90);
t.fd(50);t.rt(90);t.fd(50);t.rt(90);
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


function sqs (t,j,len){
	if(j==0){}
	else{
		squs(t,j-1,len);
		t.bk(len*(j-1));t.lt(90);t.bk(len);t.rt(90);
	for(let k=0;k<j;k++){
		sq(t,len);t.fd(len);
	}
	}
}


function chaos(t,n){
	if(n<2){}
	else{
		t.fd(10);t.rt(Math.random()*180);
		chaos(t,n-1);
	}
}

