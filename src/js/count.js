var inttt;
function timer10() {
	clearInterval(inttt)
	var i = 10;
	inttt = setInterval(function(){
		i--;
		if (i <= 0)
			{i = 10}
		$('#timer10').text(i);
	},1000);
}



function startTimer1(){
setInterval(function(){
if (timer1.seconds == 0){
timer1.seconds = 59;
if (timer1.minutes == 0){
timer1.minutes = 59;
if (timer1.hours == 0){
timer1.hours = 23;
timer1.days--; } else {
timer1.hours--; }
} else { timer1.minutes--;
} } else { timer1.seconds--; }
rendertimer1(); }, 1000);
rendertimer1(); }
function rendertimer1(){
$('#tournament1 .countDays .digit.static').html((timer1.days < 10 ? '0' : '') + timer1.days);
$('#tournament1 .countHours .digit.static').html((timer1.hours < 10 ? '0' : '') + timer1.hours);
$('#tournament1 .countMinutes .digit.static').html((timer1.minutes < 10 ? '0' : '') + timer1.minutes);
$('#tournament1 .countSeconds .digit.static').html((timer1.seconds < 10 ? '0' : '') + timer1.seconds); }
function startTimer2(){
setInterval(function(){
if (timer2.seconds == 0){
timer2.seconds = 59;
if (timer2.minutes == 0){
timer2.minutes = 59;
if (timer2.hours == 0){
timer2.hours = 23;
timer2.days--; } else {
timer2.hours--; }
} else { timer2.minutes--;
} } else { timer2.seconds--; }
renderTimer2(); }, 1000);
renderTimer2(); }
function renderTimer2(){
$('#tournament2 .countDays .digit.static').html((timer2.days < 10 ? '0' : '') + timer2.days);
$('#tournament2 .countHours .digit.static').html((timer2.hours < 10 ? '0' : '') + timer2.hours);
$('#tournament2 .countMinutes .digit.static').html((timer2.minutes < 10 ? '0' : '') + timer2.minutes);
$('#tournament2 .countSeconds .digit.static').html((timer2.seconds < 10 ? '0' : '') + timer2.seconds); }
function startTimer3(){
setInterval(function(){
if (timer3.seconds == 0){
timer3.seconds = 59;
if (timer3.minutes == 0){
timer3.minutes = 59;
if (timer3.hours == 0){
timer3.hours = 23;
timer3.days--; } else {
timer3.hours--; }
} else { timer3.minutes--;
} } else { timer3.seconds--; }
renderTimer3(); }, 1000);
renderTimer3(); }
function renderTimer3(){
$('#tournament3 .countDays .digit.static').html((timer3.days < 10 ? '0' : '') + timer3.days);
$('#tournament3 .countHours .digit.static').html((timer3.hours < 10 ? '0' : '') + timer3.hours);
$('#tournament3 .countMinutes .digit.static').html((timer3.minutes < 10 ? '0' : '') + timer3.minutes);
$('#tournament3 .countSeconds .digit.static').html((timer3.seconds < 10 ? '0' : '') + timer3.seconds); }