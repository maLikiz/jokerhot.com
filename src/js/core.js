function getCookie(name){
var cookie = ' ' + document.cookie,
search = ' ' + name + '=',
setStr = null,
offset = 0,
end = 0;
if (cookie.length > 0){
offset = cookie.indexOf(search);
if (offset != -1){
offset += search.length;
end = cookie.indexOf(';', offset);
if (end == -1){
end = cookie.length; }
setStr = unescape(cookie.substring(offset, end)); }
} return (setStr); }
function login(){ $.ajax({
type: 'POST',
url: '/core/login/',
data:{ js: 1,
log_log: $('#log_log').val(),
log_pas: $('#log_pas').val()},
cache: false,
error: function(){
alert('Error!');},
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#log_error').show();
$('#log_error').html('');
$('#'+data['where']).html(data['text']);
}else{ if(getCookie('lng')=='EN'){
location.replace('/en/'); }
if(getCookie('lng')=='TR'){
location.replace('/tr/'); }else{
location.replace('/'); } }
} catch (e){ alert('Error!'); } } }); }
function signup(){ $.ajax({
type: 'POST',
url: '/core/signup/',
data:{ js: 1,
reg_log: $('#reg_log').val(),
reg_pas: $('#reg_pas').val(),
reg_ema: $('#reg_ema').val(),
reg_cur: $('#reg_cur').val(),
reg_gif: 1},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#reg_error').show();
$('#reg_error').html('');
$('#'+data['where']).html(data['text']);
}else{ if(getCookie('lng')=='EN'){
location.replace('/en/'); }
if(getCookie('lng')=='TR'){
location.replace('/tr/'); }else{
location.replace('/'); } } }
catch (e){ alert('Error!'); } } }); }
function recovery(){ $.ajax({
type: 'POST',
url: '/core/recovery/',
data:{ js: 1,
rec_log: $('#rec_log').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#rec_error').show();
$('#rec_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Error!'); } } }); }
function jackpot(){ $('#jackpot').load('/core/jackpot/'); }
function withdraw(){ $.ajax({
type: 'POST',
url: '/core/withdraw/',
data:{ js: 1,
wit_sys: $('#wit_sys').val(),
wit_acc: $('#wit_acc').val(),
wit_sum: $('#wit_sum').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#wit_error').html('');
$('#'+data['where']).html(data['text']); } }
catch (e){ alert('Error!'); } } }); }
function points(){
$.ajax({
type: 'POST',
url: '/core/points/',
data:{ js: 1,
cp_sum: $('#cp_sum').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#cp_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Error!'); } } }); }
function profile(){
$.ajax({
type: 'POST',
url: '/core/profile/',
data:{ js: 1,
pr_ema: $('#pr_ema').val(),
pr_pho: $('#pr_pho').val(),
pr_ful: $('#pr_ful').val(),
pr_bir: $('#pr_bir').val(),
pr_cou: $('#pr_cou').val(),
pr_cit: $('#pr_cit').val(),
pr_adr: $('#pr_adr').val(),
pr_zip: $('#pr_zip').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#pr_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Error!'); } } }); }
function settings(){
$.ajax({
type: 'POST',
url: '/core/settings/',
data:{ js: 1,
set_pas: $('#set_pas').val(),
set_new: $('#set_new').val(),
set_dep: $('#set_dep').val(),
set_car: $('#set_car').val(),
set_bon: $('#set_bon').val(),
set_nws: $('#set_nws').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data = JSON.parse(data);
if (data['text']){
$('#st_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Error!'); } } }); }