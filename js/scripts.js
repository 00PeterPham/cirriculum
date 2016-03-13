$( document ).ready(function() {
	$('.week-label').click(function(){
        $(this).children().toggleClass(' arrow-down');
        $(this).children().toggleClass(' arrow-up')
        $(this).next().slideToggle();
    });
});

