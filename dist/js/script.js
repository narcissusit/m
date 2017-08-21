$(document).ready(function(){
	$('.new_slide').click(function(){
		$('.no').toggleClass('slide');
	})
	$('#mail_form').submit(function(e){
		e.preventDefault();
		var email = $('#contact_mail').val();
		var url = $(this).attr('action');
		$.ajax({
			type: "POST",
			url: url,
			data: {email: email},
			success: function(data) {
				console.log(data);
			}
		});
	})
})