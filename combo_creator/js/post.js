$(document).ready(function() {
	//Storing combo box values into vars
    $('.submit').click(function(){
    	//COMBOS
        var comboArray = [];
		var i = 0;

        $('.combo').each(function(){
            comboArray[i] = $('#combo-'+ (i+1) +'').val();
            console.log('combo array: ' + comboArray[i]);
            i++;
        });

        var join_combos = comboArray.join(' __ ');
        console.log('cOMBO STRING: ' + join_combos);

        //DATE
        var month;
        var day;

    	// console.log('month and day: before conversion - '+ date_select_month + date_select_day);

        if (date_select_month == 01){
        	month = 'jan';
        }else if(date_select_month == 02){
        	month = 'feb';
        }else if(date_select_month == 03){
        	month = 'march';
        }else if(date_select_month == 04){
        	month = 'april';
        }else if(date_select_month == 05){
        	month = 'may';
        }else if(date_select_month == 06){
        	month = 'june';
        }else if(date_select_month == 07){
        	month = 'july';
        }else if(date_select_month == 08){
        	month = 'aug';
        }else if(date_select_month == 09){
        	month = 'sept';
        }else if(date_select_month == 10){
        	month = 'oct';
        }else if(date_select_month == 44){
        	month = 'nov';
        }else if(date_select_month == 12){
        	month = 'decem';
        }

        day = date_select_day.replace(/0/g , "");
        console.log('month and day: '+ month + day);


        $.post("send_form_email.php", {
			combos: join_combos,
			month_: month,
			day_: day
		});
    });
});
