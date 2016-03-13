$(document).ready(function() {
	//Storing combo box values into vars
    $('.submit').click(function(){
        var comboArray = [];
		var i = 0;

        $('.combo').each(function(){
            comboArray[i] = $('#combo-'+ (i+1) +'').val();
            console.log('combo array: ' + comboArray[i]);
            i++;
        });

        var join_combos = comboArray.join(' __ ');
        console.log('cOMBO STRING: ' + join_combos);

        $.post("send_form_email.php", {
			combos: join_combos
		});
    });



	$(".submit_butt").click(function() {
		var name = $(".contact-us-con .name").val();
		var email = $(".contact-us-con .contact-email").val();
		var msg = $(".contact-us-con .msg").val();

		// console.log('name: ' + name);
		// console.log('email: ' + email);
		// console.log('msg: ' + msg);

		if (name == '' || email == '' || msg == '') {
			// alert("Please fill in all fields.");
			$('.contact-us-con .error-msg').addClass(' show-error');
		} else {
			// console.log("POSTED");
			// Returns successful data submission message when the entered information is stored in database.
			$.post("send_form_email.php", {
			name1: name,
			email1: email,
			msg1: msg
		}, function(data) {
		// alert(data);
		$('.contact-us-con .contact-msg').addClass(' show-msg');
		$('.contact-us-con .error-msg').removeClass(' show-error');
		$('.contact-us-con .contactform')[0].reset(); // To reset form fields
		$('.contact-us-con .name').val('');
		$('.contact-us-con .contact-email').val('');
		$('.contact-us-con .msg').val('');
		// console.log("RESET FIRED");
		});
		}
	});
});
