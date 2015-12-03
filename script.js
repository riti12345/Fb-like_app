$(document).ready(function()
{
	$('.chat-head').click(function()
	{
      $('.chat-body').slideToggle('slow');
	});

	$('.msg-head').click(function()
	{
      $('.msg-wrap').slideToggle('slow');
	});

	$('.close').click(function() {
	$('.msg-box').hide();
	});

	$('.user').click(function()
	{
		$('.msg-wrap').show();
		$('.msg-box').show();
	});

	$('.msg-input').keypress(
    function(e){
        if (e.keyCode == 13) {
        	var msg=$(this).val();
        	$(this).val("");
        	$("<div class='msg-b'>"+msg+"</div>").insertBefore(".msg-insert");
        	$('.msg-body').scrollTop($('.msg-body')[0].scrollHeight);
        }
    });

     $(document).on('click','#button',function()
    {
      var feed=$('#feedbox').val();
      if(!feed)
        alert('enter');
      else
      {
        $(' <div id="feed"><div class="row">\
            <div class="col-md-2"><img src="DP from bestprofilepix.jpg" class="img-circle" width="100%"/></div>\
            <div class="col-md-10"><div><b>RITI </b></div>\
            <div class="pull-right text-muted" id="delete">delete</div>\
            <div>'+feed+' </div>\
            <div class="text-muted"><small> Posted 2 min ago <small></div>\
    </div>\
      </div><hr></div>').insertAfter('#insert').hide().slideDown();
      }
      $("#feedbox").val('');
    });
    $(document).on('click','#delete',function()
    {
       $(this).closest('#feed').slideUp();
    });
    
});
