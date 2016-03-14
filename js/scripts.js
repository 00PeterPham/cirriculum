$( document ).ready(function() {
	//Get Combos of date
	//Date select
	var cc_date_selected;
	var cc_date_select_month;
	var cc_date_select_day;
	var month;
	var day;

    $('.go').click(function(){
        cc_date_selected = $('.date').val();

        if(cc_date_selected.length){
            console.log ('cc_date: ' + $('.date').val());
            $('.date-select, .overlay').addClass('hide');

            cc_date_select_month = cc_date_selected.substring(5, 7);
            cc_date_select_day = cc_date_selected.substring(8, 10);

            console.log('cc_date_select_month: ' + cc_date_select_month);
            console.log('cc_date_select_day: ' + cc_date_select_day);

            //convert date numerical to string
             if (cc_date_select_month == 01){
	        	month = 'jan';
	        }else if(cc_date_select_month == 02){
	        	month = 'feb';
	        }else if(cc_date_select_month == 03){
	        	month = 'march';
	        }else if(cc_date_select_month == 04){
	        	month = 'april';
	        }else if(cc_date_select_month == 05){
	        	month = 'may';
	        }else if(cc_date_select_month == 06){
	        	month = 'june';
	        }else if(cc_date_select_month == 07){
	        	month = 'july';
	        }else if(cc_date_select_month == 08){
	        	month = 'aug';
	        }else if(cc_date_select_month == 09){
	        	month = 'sept';
	        }else if(cc_date_select_month == 10){
	        	month = 'oct';
	        }else if(cc_date_select_month == 44){
	        	month = 'nov';
	        }else if(cc_date_select_month == 12){
	        	month = 'decem';
	        }

	        day = cc_date_select_day.replace(/0/g , "");
	        console.log('month and day: '+ month + day);

            $.post("index.php", {
				month_: month,
				day_: day
			});
        }
    });

	// $('.week-label').click(function(){
 //        $(this).children().toggleClass(' arrow-down');
 //        $(this).children().toggleClass(' arrow-up')
 //        $(this).next().slideToggle();
 //    });
});

