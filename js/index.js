$(function() {
  // $('a[href*="#"]:not([href="#"])')
  $('.scroll').click(function() {
    $('li.active').removeClass('active');
    var li = $(this).parent();
    if (!$(li).hasClass('active')) {
      $(li).addClass('active');
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -36,
        }, 1000);
        return false;
      }
    }
  });
});
$(function() {
"use strict";
	//Contact
	$('form.contactForm').submit(function(){
		var f = $(this).find('.form-group'), 
		ferror = false, 
		emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
		f.children('input').each(function(){ // run all inputs
			var i = $(this); // current input
			var rule = i.attr('data-rule');
			if( rule !== undefined ){
			var ierror=false; // error flag for current input
			var pos = rule.indexOf( ':', 0 );
			if( pos >= 0 ){
				var exp = rule.substr( pos+1, rule.length );
				rule = rule.substr(0, pos);
			}else{
				rule = rule.substr( pos+1, rule.length );
			}
			switch( rule ){
				case 'required':
				if( i.val()==='' ){ ferror=ierror=true; }
				break;
				
				case 'maxlen':
				if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
				break;

				case 'email':
				if( !emailExp.test(i.val()) ){ ferror=ierror=true; }
				break;

				case 'checked':
				if( !i.attr('checked') ){ ferror=ierror=true; }
				break;
				
				case 'regexp':
				exp = new RegExp(exp);
				if( !exp.test(i.val()) ){ ferror=ierror=true; }
				break;
			}
				i.next('.validation').html( ( ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
			}
		});
		f.children('textarea').each(function(){ // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');

			if( rule !== undefined ){
			var ierror=false; // error flag for current input
			var pos = rule.indexOf( ':', 0 );
			if( pos >= 0 ){
				var exp = rule.substr( pos+1, rule.length );
				rule = rule.substr(0, pos);
			}else{
				rule = rule.substr( pos+1, rule.length );
			}
			
			switch( rule ){
				case 'required':
				if( i.val()==='' ){ ferror=ierror=true; }
				break;
				
				case 'maxlen':
				if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
				break;
			}
				i.next('.validation').html( ( ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
			}
		});
		if( ferror ) return false; 
			else var str = $(this).serialize();		
				$.ajax({
				type: "POST",
				url: "contact.php",
				data: str,
				success: function(msg){
			$("#sendmessage").addClass("show");
      $('#contactForm').hide();
      
			$("#errormessage").ajaxComplete(function(event, request, settings){
		
			if(msg == 'OK')
			{
				$("#sendmessage").addClass("show");		
        $('#contactForm').hide();
			}
			else
			{
				$("#sendmessage").removeClass("show");
				var result = msg;
			}
		
			$(this).html(result);});}});
				return false;
	});

});