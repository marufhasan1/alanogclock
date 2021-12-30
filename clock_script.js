$(document).ready(function(){
	function show_time(){
		var d = new Date();
		var sec = d.getSeconds();
		var min = d.getMinutes();
		var hour = d.getHours();
		if (hour>12) {
			hour-=12;
		}
		hour += min/60; //Its for Analogly Moving the Hour Spike
		min += sec/60; //Its for Analogly Moving the Minuit Spike

		$(".second").css('transform', 'rotate('+(sec*6)+'deg)');
		$(".minuit").css('transform', 'rotate('+(min*6)+'deg)');
		$(".hour").css('transform', 'rotate('+(hour*30)+'deg)');
	}
	show_time();
	setInterval(show_time,1000);
});