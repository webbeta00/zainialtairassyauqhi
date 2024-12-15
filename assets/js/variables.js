var defaultval = {
	theme: 'orange',
	header: 'light',
	header_align: 'center',
	menu: 'light',
	menu_icons: 'on',
	menu_type: 'left',
	footer: 'light',
	footer_type: 'center',
	//menu_animation: "slide_left",
	site_mode: 'light',
	footer_menu: 'show',
	footer_menu_style: 'light'
};

var charts_primary_color = '#9575CD';
var charts_icon_color = '#bdbdbd';
var charts_accent_color = '#80CBC4';

var charts_color_1 = '#81C784';
var charts_color_2 = '#0097A7';
var charts_color_3 = '#FF8A65';
var charts_color_4 = '#7986CB';
var charts_color_5 = '#F06292';
var charts_color_6 = '#536DFE';

var charts_xaxis_split_line_color = '#ffffff';
var charts_yaxis_split_line_color = '#ffffff';
var charts_yaxis_line_color = '#ff0000';
var charts_timeline_border_color = '#eaeaea';

var charts_series_title_color = '#333333';
var charts_series_border_color = '#cccccc';

var charts_transparent_color = 'rgba(0,0,0,0)';
var charts_tooltip_line_color = 'rgba(0,0,0,0.5)';
var charts_tooltip_shadow_color = 'rgba(0,0,0,.1)';

var charts_series_area_color = 'rgba(63,81,181,0)';
var charts_series_pointer_color = 'rgba(255, 255, 255, 0.8)';

function getCounter() {
	var countDownDate = new Date("Dec 22, 2024 10:00:00").getTime();
  
	var x = setInterval(function () {
	  var now = new Date().getTime();
  
	  var distance = countDownDate - now;
  
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	  );
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	  var textDays = document.getElementById("days");
	  var textHours = document.getElementById("hours");
	  var textMinutes = document.getElementById("minutes");
	  var textSeconds = document.getElementById("seconds");
  
	  textDays.innerHTML = days < 10 ? "0" + days : days;
	  textHours.innerHTML = hours < 10 ? "0" + hours : hours;
	  textMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
	  textSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  
	  if (distance < 0) {
		clearInterval(x);
	  }
	}, 1000);
  }
  