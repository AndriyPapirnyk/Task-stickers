$('#add').click(function() {
$('#place').append('<div class="block"><p class="p1">'+inp1.value+'</p></div>');
inp1.value = '';
$('.block').click(function() {
$(this).hide(300);
})
});


document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if(e.keyCode === 13) {
        $('#place').append('<div class="block"><p class="p1">'+inp1.value+'</p></div>');
inp1.value = '';
$('.block').click(function() {
$(this).hide(300);
})
    } else{};
};
