//waits until page is ready
$(document).ready(function(){


//creates slide toggle on paragraph on button click
$("button").click(function(){
	$(this).prev().slideToggle(1000);	 

}); 
$("ex-button").click(function(){
	$("p").prev().slideToggle(1000);	 

}); 
});
