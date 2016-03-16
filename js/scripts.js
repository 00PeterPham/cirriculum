$( document ).ready(function() {
	//Get Combos of date
	//Date select
	var cc_date_selected;
	var cc_date_select_month;
	var cc_date_select_day;
	var month;
	var day;
    var combo_returned;
    var combo_returned_array = [];

	var d = new Date();

	var month_today = d.getMonth()+1;
	var day_today = d.getDate();
	var month_ini;

    //convert date numerical to string
     if (month_today == 01){
    	month_ini = 'jan';
    }else if(month_today == 02){
    	month_ini = 'feb';
    }else if(month_today == 03){
    	month_ini = 'march';
    }else if(month_today == 04){
    	month_ini = 'april';
    }else if(month_today == 05){
    	month_ini = 'may';
    }else if(month_today == 06){
    	month_ini = 'june';
    }else if(month_today == 07){
    	month_ini = 'july';
    }else if(month_today == 08){
    	month_ini = 'aug';
    }else if(month_today == 09){
    	month_ini = 'sept';
    }else if(month_today == 10){
    	month_ini = 'oct';
    }else if(month_today == 11){
    	month_ini = 'nov';
    }else if(month_today == 12){
    	month_ini = 'decem';
    }

    var day_ini = day_today;

	console.log('TODAYS DAY: ' + month_ini + day_ini);

     $.get( 
        "get_combos.php",
        {
            month_: month_ini,
            day_: day_ini
        },
        function(data) {
           // $('.combo').val(data);
           combo_returned = data;
           combo_returned_array = combo_returned.split(" __ ");
           console.log('combo returned array length: ' + combo_returned_array + combo_returned_array.length);

           var box_count = combo_returned_array.length;

           $('.today_date').text(combo_returned_array[0]);
           $("<textarea readonly='true' id='combo-1' class='combo' placeholder='combo'></textarea>").insertAfter(".go");

           var box_inc = 1;
           $("#combo-" + box_inc + "").val(combo_returned_array[box_inc]);

           for (var j = 0; j <= combo_returned_array.length-2; j++) {
               $("<textarea readonly='true' id='combo-"+ (j+1) +"'class='combo' placeholder='combo'></textarea>").insertAfter("#combo-" + j + "");

               // var box_inc = 1;
               $("#combo-" + (j+1) + "").val(combo_returned_array[j+1]);
               // box_inc++;

                 box_count += 1;

           };
        }
    );

    $('.go').click(function(){
    	$(".combo").remove();

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

	        $.get( 
	            "get_combos.php",
	            {
	                month_: month,
	                day_: day
	            },
	            function(data) {
	               // $('.combo').val(data);
	               combo_returned = data;
	               combo_returned_array = combo_returned.split(" __ ");
	               console.log('combo returned array length: ' + combo_returned_array + combo_returned_array.length);

	               var box_count = combo_returned_array.length;

	               $('.today_date').text(combo_returned_array[0]);
	               $("<textarea readonly='true' id='combo-1' class='combo' placeholder='combo'></textarea>").insertAfter(".go");

	               var box_inc = 1;
	               $("#combo-" + box_inc + "").val(combo_returned_array[box_inc]);

	               for (var i = 0; i <= combo_returned_array.length-2; i++) {
	                   $("<textarea readonly='true' id='combo-"+ (i+1) +"'class='combo' placeholder='combo'></textarea>").insertAfter("#combo-" + i + "");

	                   // var box_inc = 1;
	                   $("#combo-" + (i+1) + "").val(combo_returned_array[i+1]);
	                   // box_inc++;

	                     box_count += 1;

	               };
	            }
	        );
        }
    });

	// $('.week-label').click(function(){
 //        $(this).children().toggleClass(' arrow-down');
 //        $(this).children().toggleClass(' arrow-up')
 //        $(this).next().slideToggle();
 //    });
});

