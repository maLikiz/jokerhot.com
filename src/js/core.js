function getCookie(name){
var cookie=' '+document.cookie,
search=' '+name+'=',
setStr=null,
offset=0,
end=0;
if(cookie.length>0){
offset=cookie.indexOf(search);
if(offset!=-1){
offset+=search.length;
end=cookie.indexOf(';',offset);
if(end==-1){
end=cookie.length; }
setStr=unescape(cookie.substring(offset, end)); }
} return (setStr); }
function reg(){ $.ajax({
beforeSend: function(){ $('#reg_button').prop('disabled', true); },
complete: function(){ $('#reg_button').prop('disabled', false); },
type: 'POST',
url: '/core/ajax/signup/',
data:{ js: 1,
user: $('#user').val(),
email: $('#reg_email').val(),
pass: $('#reg_password').val(),
currency: $('#reg_currency').val(),
gift: $('#reg_gift').val(),
news: $('#reg_news').val(),
terms: $('#reg_terms').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data){ $('#reg_error').html('');
$('#reg_error').html(data);
}else{ if(getCookie('lng')=='EN'){
location.replace('/en/'); }else{
location.replace('/'); } } }
catch (e){ alert('Error!'); } } }); }



function finish(){ $.ajax({
beforeSend: function(){ $('#fin_button').prop('disabled', true); },
complete: function(){ $('#fin_button').prop('disabled', false); },
type: 'POST',
url: '/core/ajax/finish/',
data:{ js: 1,
currency: $('#fin_currency').val(),
gift: $('#fin_gift').val(),
news: $('#fin_news').val(),
terms: $('#fin_terms').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data){ $('#fin_error').html('');
$('#fin_error').html(data);
}else{ if(getCookie('lng')=='EN'){
location.replace('/en/'); }else{
location.replace('/'); } } }
catch (e){ alert('Error!'); } } }); }


function signup(){ $.ajax({
beforeSend: function(){ $('#signup_button').prop('disabled', true); },
complete: function(){ $('#signup_button').prop('disabled', false); },
type: 'POST',
url: '/core/ajax/signup/',
data:{ js: 1,
user: $('#signup_user').val(),
email: $('#signup_email').val(),
pass: $('#signup_password').val(),
currency: $('#signup_currency').val(),
gift: $('#signup_gift').val(),
news: $('#signup_news').val(),
terms: $('#signup_terms').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data){ $('#signup_error').html('');
$('#signup_error').html(data);
}else{ if(getCookie('lng')=='EN'){
location.replace('/en/'); }else{
location.replace('/'); } } }
catch (e){ alert('Error!'); } } }); }







function winners(){
$.ajax({ type: 'POST',
url: '/core/winners/',
data: {js: 1},
cache: false,
success: function(html){
$('#winners').html(html); } }); }
















function login(){ $.ajax({
beforeSend: function(){ $('#log_button').prop('disabled', true); },
complete: function(){ $('#log_button').prop('disabled', false); },
type: 'POST',
url: '/core/ajax/login/',
data:{ js: 1,
log_user: $('#log_user').val(),
log_pass: $('#log_pass').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data){
$('#log_error').html('');
$('#log_error').html(data);
}else{ if(getCookie('lng')=='EN'){
location.replace('/en/'); }else{
location.replace('/'); } } }
catch (e){ alert('Error!'); } } }); }

function restore(){ $.ajax({
beforeSend: function(){ $('#res_button').prop('disabled', true); },
complete: function(){ $('#res_button').prop('disabled', false); },
type: 'POST',
url: '/core/ajax/restore/',
data:{ js: 1,
res_email: $('#res_email').val(),
res_phone: $('#res_phone').val(),
res_user: $('#res_user').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data){ $('#res_error').html('');
$('#res_error').html(data); } }
catch (e){ alert('Error!'); } } }); }


function jackpot(){ $('#jackpot').load('/core/jackpot/'); }
function withdraw(){ $.ajax({
type: 'POST',
url: '/core/ajax/withdraw/',
data:{ js: 1,
wit_system: $('.withdraw .payment.active').data('system'),
wit_account: $('#wit_account').val(),
wit_amount: $('#wit_amount').val()},
cache: false,
error: function(){
alert('Error!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data){ $('#wit_error').html('');
$('#wit_error').html(data); } }
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
try{ data=JSON.parse(data);
if(data['text']){
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
try{ data=JSON.parse(data);
if(data['text']){
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
try{ data=JSON.parse(data);
if(data['text']){
$('#st_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Error!'); } } }); }



function support(){ $.ajax({
type: 'POST',
url: '/core/support/',
data:{ js: 1,
sup_nam: $('#sup_nam').val(),
sup_con: $('#sup_con').val(),
sup_mes: $('#sup_mes').val()},
cache: false,
error: function(){
alert('Error!');},
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#sup_error').html('');
$('#'+data['where']).html(data['text']);
} } catch (e){ alert('Error!'); } } }); }










$(document).ready(function(){




$('.gamebrand').on('keyup click', function(){
brand=$(this).data('value');
if(brand.length==2){
$.ajax({ type: 'POST',
url: '/core/sort/',
data: {'brandquery':brand,
'typequery':1},
cache: false,
success: function(html){
$('#games').html(html);}}); } });

$('.gametype').on('keyup click', function(){

    var $this = $(this);

    $('.gametype').removeClass('active');

    if ($this.hasClass('active')) {
      $this.removeClass('active');
    } else {
      $this.addClass('active');
    }


type=$(this).data('value');
if(type.length==2){
$.ajax({ type: 'POST',
url: '/core/sort/',
data: {'brandquery':1,
'typequery':type},
cache: false,
success: function(html){
$('#games').html(html);}}); } });



$('#gamesearch').on('keyup input change click', function(){
searchquery=$(this).val();
if(searchquery.length>=2){
$.ajax({ type: 'POST',
url: '/core/search/',
data: {'searchquery':searchquery},
cache: false,
success: function(html){
$('#games').html(html);}}); } });

});