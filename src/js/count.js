function startTimer(){
setInterval(function(){
if (timer.seconds == 0){
timer.seconds = 59;
if (timer.minutes == 0){
timer.minutes = 59;
if (timer.hours == 0){
timer.hours = 23;
timer.days--; } else {
timer.hours--; }
} else { timer.minutes--;
} } else { timer.seconds--; }
renderTimer(); }, 1000);
renderTimer(); }
function renderTimer(){
$('#tournament1 .countDays .digit.static').html((timer.days < 10 ? '0' : '') + timer.days);
$('#tournament1 .countHours .digit.static').html((timer.hours < 10 ? '0' : '') + timer.hours);
$('#tournament1 .countMinutes .digit.static').html((timer.minutes < 10 ? '0' : '') + timer.minutes);
$('#tournament1 .countSeconds .digit.static').html((timer.seconds < 10 ? '0' : '') + timer.seconds); }
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