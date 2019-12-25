function stopStimer(){
	document.getElementById('title').innerHTML = "HAPPY NEW YEAR!";
	document.getElementById('days').innerHTML = "<center><h1>00</h1></center>";
	document.getElementById('hrs').innerHTML = "<center><h1>00</h1></center>";
	document.getElementById('min').innerHTML = "<center><h1>00</h1></center>";
	document.getElementById('sec').innerHTML = "<center><h1>00</h1></center>";
}

function startCountDownTimer(){
	var today = new Date();
	var target = new Date("June 3, 2020 00:00:00");
	var currentTime = today.getTime();
	var targetTime = target.getTime();
	
	var time = targetTime - currentTime;
	
	var sec = Math.floor(time/1000);
	var min = Math.floor(sec/60);
	var hrs = Math.floor(min/60);
	var days = Math.floor(hrs/24);
	
	hrs = hrs % 24;
	min = min % 60;
	sec = sec % 60;
	
	
	hrs = (hrs<10) ? "0"+hrs : hrs;
	min = (min<10) ? "0"+min : min;
	sec = (sec<10) ? "0"+sec : sec;
	
	document.getElementById('days').innerHTML = "<center><h1>"+days+"</h1></center>";
	document.getElementById('hrs').innerHTML = "<center><h1>"+hrs+"</h1></center>";
	document.getElementById('min').innerHTML = "<center><h1>"+min+"</h1></center>";
	document.getElementById('sec').innerHTML = "<center><h1>"+sec+"</h1></center>";
	
	if(time > 0){
		setTimeout(startCountDownTimer, 1000);
	}else{
		stopStimer();
	}
}
