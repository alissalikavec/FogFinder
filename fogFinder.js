function submit(){
	var fbcase = $('input#case').val();
	window.location.href="https://fogbugz.autoloop.us/default.asp?" + fbcase;
}

$(function(){
	$('input#case').focus();
	$('input#case').keypress(function(e){
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if (keycode == '13') {
			if ($('input#case').val().length <= 0 || !$.isNumeric($('input#case').val())) {
				alert("Please enter a case number.");
			}
			
			else {
				submit();
			}
		}
	});
});