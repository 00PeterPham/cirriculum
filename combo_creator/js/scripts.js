$( document ).ready(function() {
	var tech = null;
	var combo_val = $('.combo.focus').val();
	var window_width = $(window).width();
    var flag = 0;
    var mflag = 0;
    var no_plus = 0;
    var box_count = 2;
    var i = 0;
    // var join_combos;

    //Focus on combo box
    box_focus();
    //Mobile Menu display
    $('.hamburger').click(function(){
        $('.close-text, .technique-con').toggleClass(' active');
        $('.mobile-menu').slideToggle(200);
        if (!$('.mod').hasClass('active')){
            // $('.toggle').slideToggle(200);
            $('.toggle, .multi-con').toggleClass('show');
        } else {
            // $('.toggle:not(.active)').slideToggle(200);
            $('.toggle:not(.active)').toggleClass('show');
            $('.multi-con:not(.active)').toggleClass('show');
        }
        
        // if ($(this).hasClass('menu-open')){
        //      //Moves Techniques down
        //     var box_count_real = $('.combo').length;
        //     console.log('box count real up: ' + box_count_real);
        //     var marg_top = parseInt($('.technique-con').css('margin-top'), 10);
        //     marg_top = marg_top - 110;
        //     console.log('marg top: ' + marg_top);
        //     var marg_new_box = marg_top - (50*box_count_real);
        //     $('.technique-con').css('margin-top', marg_new_box + 'px');
        //     // $(".technique-con").css('margin-top','160px');
        // }else {
        //      //Moves Techniques up
        //     var box_count_real  = $('.combo').length;
        //     console.log('box count real: ' + box_count_real);
        //     var marg_top = parseInt($('.technique-con').css('margin-top'), 10);
        //     marg_top = marg_top + 110;
        //     console.log('marg top: ' + marg_top);
        //     var marg_new_box = marg_top + (50*box_count_real);
        //     $('.technique-con').css('margin-top', marg_new_box + 'px');
        // }
        
        $(this).toggleClass('menu-open');
        //  $('.menu-open').click(function(){
        //     console.log('menu-open fire');
        //     $('.technique-con').css('margin-top','160px');
        // });
    });
	//Adds technique to combo textarea
    $('.technique').click(function(){
    	tech = $(this).text();
    	// console.log('tech: ' + tech);
    	// console.log('combo val: ' + combo_val);

    	update_combo(tech);
    });
    //Double tap on textarea to manually edit
    fire_doubleTap();

    //Clears combo textarea
    $('.clear-combo').click(function(){
    	$('.combo.focus').val("");
    	combo_val = "";
        $('.mod, .inner, .multi-inputs').removeClass(' active');
        $('.submit').removeClass('prevent-click');
        if(!$('.hamburger').hasClass('menu-open')){
            $('.switch, .multi-con, .submit').removeClass(' show');
        }
        flag = 0; 
        mflag = 0; 
        no_plus = 0;

        // console.log('FLAG RESET: ' + flag, mflag, no_plus);
    });
    //Add combo box
    $('.add-combo').click(function(){
        $('.combo').removeClass(' focus');
        $("<textarea readonly='true' id='combo-"+ box_count +"'class='combo focus' placeholder='combo'></textarea>").insertAfter("#combo-" + (box_count-1) + "");
        box_count += 1;

        //Moves Techniques down
        // var marg_top = parseInt($('.technique-con').css('margin-top'), 10);
        // console.log('marg top: ' + marg_top);
        // var marg_new_box = marg_top + 50;
        // $('.technique-con').css('margin-top', marg_new_box + 'px');

        //Resets combo val to new box
        combo_val = $('.combo.focus').val();

        //Focus on combo box
        box_focus();

        //Double tap on textarea to manually edit
        fire_doubleTap();
    });
    //Remove combo box
    $('.remove-combo').click(function(){
        // console.log('box_count: ' + box_count);
        if (box_count >= 3){
            $("#combo-" + (box_count-2) + "").addClass(' focus');
            $("#combo-" + (box_count-1) + "").remove();
            box_count -= 1;

             //Moves Techniques up
            // var marg_top = parseInt($('.technique-con').css('margin-top'), 10);
            // console.log('marg top: ' + marg_top);
            // var marg_new_box = marg_top - 50;
            // $('.technique-con').css('margin-top', marg_new_box + 'px');
        }
        
    });
    //Storing combo box values into vars
    // $('.submit').click(function(){
    //     console.log('BOX COUNT: ' + box_count);

    //     var num_of_boxes = box_count-1;
    //     var comboArray = [];

    //     i = 0;

    //     $('.combo').each(function(){
    //         comboArray[i] = $('#combo-'+ (i+1) +'').val();
    //         console.log('combo array: ' + comboArray[i]);
    //         i++;
    //     });

    //     var join_combos = comboArray.join(' __ ');
    //     console.log('cOMBO STRING: ' + join_combos);
    // });

    //Accordions
    $('h2').click(function(){
        $(this).children().toggleClass(' arrow-down');
        $(this).children().toggleClass(' arrow-up')
        $(this).next().slideToggle(200);
    });
    $('h3').click(function(){
    	$(this).children().toggleClass(' arrow-down');
    	$(this).children().toggleClass(' arrow-up')
    	$(this).next().slideToggle(200);
    });
    $('.expand').click(function(){
    	$('.tech-wrapper .table').slideDown();
    	$('h3 span').removeClass(' arrow-up')
    	$('h3 span').addClass(' arrow-down');

        $('.strikes-con, .defense-con').slideDown();
        $('h2 span').removeClass(' arrow-up')
        $('h2 span').addClass(' arrow-down');
    });
    $('.collapse').click(function(){
    	$('.tech-wrapper .table').slideUp();
    	$('h3 span').removeClass(' arrow-down');
    	$('h3 span').addClass(' arrow-up')
    });
    //Adjusts Arrows on desktop
    // console.log('window width: ' + window_width);
    if(window_width >= 967){
    	$('h3 span').removeClass(' arrow-up')
    	$('h3 span').addClass(' arrow-down');
    }else {
    	$('h3 span').removeClass(' arrow-down');
    	$('h3 span').addClass(' arrow-up')
    }
    //Modifiers
    $('.mod').click(function(){

        if($(this).hasClass('active') && !$('.hamburger').hasClass('menu-open')){
            $(this).removeClass('show');
            $('.multi-con').removeClass('show');
        }

        $(this).toggleClass(' active');
        $('.inner').toggleClass(' active');
    });
    //Prevents click on submit when modifiers are active
    $('.mod:not(".submit")').click(function(){
        $('.submit').toggleClass(' prevent-click');
    });
    //Switch Stance
    $('.switch').click(function(){
         //If Multiplier active - position switch stance on top
        if($('.multi').hasClass('active')){
            $('.switch').addClass(' active-top');
            $('.inner').addClass(' active-top');
        } 
        else {
            $('.switch').removeClass(' active-top');
            $('.inner').removeClass(' active-top');
        }

        if (flag == 0){
            tech = 'switch stance(';
            flag = 1;
        }
        else if (flag == 1){
            tech = ')';
            flag = 0;
        }
        update_combo(tech);
    });
    //Multiplier
    $('.multi').click(function(){
        $('.multi-inputs').toggleClass(' active');
        //If switch stance active - position mutli on top
        if($('.switch').hasClass('active')){
            $('.multi').addClass(' active-top');
            $('.multi-inputs').addClass(' active-top');
            $('.inner').addClass(' active-top');
        } 
        else {
            $('.multi').removeClass(' active-top');
            $('.multi-inputs').removeClass(' active-top');
            $('.inner').removeClass(' active-top');
        }

        if (mflag == 0){
            tech = '(';
            mflag = 1;
        }
        else if (mflag == 1){
            tech = ')' + $('.multi').text();
            mflag = 0;
        }
        update_combo(tech);
    });
    $('.multi-select').change(function(){
        var multi_select_val = $('.multi-select').val();
        $('.multi-val').text(multi_select_val);
    });
    $('.multi-input').on('input', function() {
        var multi_input_val = $('.multi-input').val();
        $('.multi-val').text(multi_input_val);
    });

    //FUNCTIONS
    //Update Combo function
    function update_combo(tech){
        //Checks to see if combo field is empty, if not then adds + sign
        // console.log("tech: " + tech);
        var multi_val = $('.multi').text();
        // console.log('multi_val: ' + multi_val);

        if (combo_val == "" || combo_val == undefined){
            $('.combo.focus').val(tech);
        }
        else if (combo_val == 'switch stance(' || combo_val == '('){
            $('.combo.focus').val(combo_val + tech);
        }
        else if (tech == 'switch stance(' && no_plus == 0){
            $('.combo.focus').val(combo_val + ' + ' + tech);
            no_plus = 1;
        }
        else if (tech == '(' && no_plus == 0){
            $('.combo.focus').val(combo_val + ' + ' + tech);
            no_plus = 1;
        }
        else if (tech == ')' || tech == ')' + multi_val){
            $('.combo.focus').val(combo_val + tech);
        }
        else if (no_plus == 1){
            $('.combo.focus').val(combo_val + tech);
            no_plus = 0;
        }
        else {
            // console.log('FIRST FIRE');
            $('.combo.focus').val(combo_val + ' + ' + tech);
        }
        
        combo_val = $('.combo.focus').val();
    };

    //Focus on combo box
    function box_focus(){
        $('.combo').focus(function(){
            $('.combo').removeClass(' focus');
            $(this).addClass(' focus');
            combo_val = $('.combo.focus').val();

            $(this).bind('input propertychange', function() {
                console.log('text area change');
                combo_val = $('.combo.focus').val();
            });
        });
    };
     //Double tap on textarea to manually edit
    function fire_doubleTap(){
        $(".combo").doubleTap(function(){
            console.log('dbl tap fired');
            $(this).addClass(' edit');
            $(this).prop('readonly',false);

            $(this).blur(function(){
                $(this).prop('readonly',true);
                $(this).removeClass(' edit');
            });        
        });
    };
});

(function($) {
     $.fn.doubleTap = function(doubleTapCallback) {
         return this.each(function(){
            var elm = this;
            var lastTap = 0;
            $(elm).bind('vmousedown', function (e) {
                var now = (new Date()).valueOf();
                var diff = (now - lastTap);
                lastTap = now ;
                if (diff < 250) {
                    if($.isFunction( doubleTapCallback ))
                        {
                           doubleTapCallback.call(elm);
                        }
                }      
            });
        });
    }
})(jQuery);

