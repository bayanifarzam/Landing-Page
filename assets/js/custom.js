$(function(){

$('#alertSuccess').hide();

$('.msg').click(function(){
    $('#alertSuccess').slideDown(500);
    $('#alertSuccess').removeClass('alert-success');
    $('#alertSuccess').addClass('alert-danger');

    $(this).hide();
});

$('.close-btn').on('click',function(){
    $('#alertSuccess').slideUp('fast');
    $('.msg').show();
});





});



/* 
DOM : Document Object Model
Event : 



*/