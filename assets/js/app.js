/*! CIC Visual adjustments.*/
console.log("	  ______________ ");
console.log("	 / ___/  _/ ___/ ");
console.log("	/ /___/ // /__ ");
console.log("	\\___/___/\\___/ ");
console.log("\"I thought of writing something Cool, Witty and Catchy here.");
console.log("But then I got Hungry.\"");
console.log("-Prashant S.");
console.log("CIC website is powered by TwoDot7. TwoDot7 is a project in development. You can help take it shape.");
console.log("Push your changes to github.com/PrashntS/TwoDotSeven");
console.log("We're looking for awesome people. Contact us: prashant@ducic.ac.in");

fblur();
fShowAltBar();

function fGetOpacity(x,a,b) {
	if (x<a) {
		return 0;
	}
	else if (x>b) {
		return 1;
	}
	else {
		return 1-((Math.sin( (x*Math.PI)/(b-a) - (Math.PI*a)/(b-a) - 3*Math.PI/2) + 1)/2);
	}
}

function fblur() {
	var Scroll = $(".scroller").scrollTop();
	var Start = 0;
	var End = (window.innerHeight)*.3;
	var Opacity = fGetOpacity(Scroll, Start, End);
	$("#BlurTarget").css({"display":"block", "opacity":Opacity});
}

function fShowAltBar() {
	var Scroll = $(".scroller").scrollTop();
	var Trigger = 128;
    //console.log(Scroll);
	if (Scroll>=Trigger)
		$("#navbar-alt-img").fadeIn(300);
	else
		$("#navbar-alt-img").fadeOut(300);
}

$(".scroller").scroll(function() {
	fShowAltBar();
	fblur();
});

console.log("DEBUG: Success: Parsed through Resize events.");

function init_map() {
	var myOptions = {
		zoom: 15,
		center: new google.maps.LatLng(28.691406323465984, 77.21442428298951),
		streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: false, // allow users to zoom the Google Map
        disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [{"featureType":"all","stylers":[{"hue":"#0000b0"},{"invert_lightness":"true"},{"saturation":-30}]}]
	};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(28.691406323465984, 77.21442428298951)
	});
	infowindow = new google.maps.InfoWindow({
		content: "<b>Cluster Innovation Centre</b><br/>Rugby Sevens<br/>110007 New Delhi"
	});
	google.maps.event.addListener(marker, "click", function () {
		infowindow.open(map, marker);
	});
	infowindow.open(map, marker);
}

$("#SubmitButtonAJAX").click(function(E){
	var EMAIL = $("#TextContainer").val();
	console.log(EMAIL);
	$.ajax({
		url: 'ajaxEmail.php',
		type: 'GET',
		timeout: 20000,
		data: {
			'EMail' : EMAIL
		},
		statusCode: {
			200: function() {
				$("#SuccessMessageAJAX").slideDown();
				$("#FORMAJAX").slideUp();
				$("#ErrorMessageAJAX").slideUp();
			},
			201: function() {
				$("#ErrorMessageAJAX").slideDown();
				$("#FORMAJAX").slideDown();
				$("#SuccessMessageAJAX").slideUp();
			}
		}
	});
});

console.log("DEBUG: Success: Parsed through AJAX.");

(function(c){var k={init:function(a){var b={color:c(this).css("background-color"),reach:20,speed:1E3,pause:0,glow:!0,repeat:!0,onHover:!1};c(this).css({"-moz-outline-radius":c(this).css("border-top-left-radius"),"-webkit-outline-radius":c(this).css("border-top-left-radius"),"outline-radius":c(this).css("border-top-left-radius")});a&&c.extend(b,a);b.color=c("<div style='background:"+b.color+"'></div>").css("background-color");!0!==b.repeat&&(!isNaN(b.repeat)&&0<b.repeat)&&(b.repeat-=1);return this.each(function(){b.onHover?
c(this).bind("mouseover",function(){g(b,this,0)}).bind("mouseout",function(){c(this).pulsate("destroy")}):g(b,this,0)})},destroy:function(){return this.each(function(){clearTimeout(this.timer);c(this).css("outline",0)})}},g=function(a,b,d){var f=a.reach;d=d>f?0:d;var h=(f-d)/f,e=a.color.split(","),h="rgba("+e[0].split("(")[1]+","+e[1]+","+e[2].split(")")[0]+","+h+")",e={outline:"2px solid "+h};a.glow?(e["box-shadow"]="0px 0px "+parseInt(d/1.5)+"px "+h,userAgent=navigator.userAgent||"",/(chrome)[ \/]([\w.]+)/.test(userAgent.toLowerCase())&&
(e["outline-offset"]=d+"px",e["outline-radius"]="100 px")):e["outline-offset"]=d+"px";c(b).css(e);b.timer&&clearTimeout(b.timer);b.timer=setTimeout(function(){if(d>=f&&!a.repeat)return c(b).pulsate("destroy"),!1;if(d>=f&&!0!==a.repeat&&!isNaN(a.repeat)&&0<a.repeat)a.repeat-=1;else if(a.pause&&d>=f)return l(a,b,d+1),!1;g(a,b,d+1)},a.speed/f)},l=function(a,b,c){innerfunc=function(){g(a,b,c)};b.timer=setTimeout(innerfunc,a.pause)};c.fn.pulsate=function(a){if(k[a])return k[a].apply(this,Array.prototype.slice.call(arguments,
1));if("object"===typeof a||!a)return k.init.apply(this,arguments);c.error("Method "+a+" does not exist on jQuery.pulsate")}})(jQuery);


$("#pulse").pulsate({pause:1000, reach: 10, speed: 400});
console.log("DEBUG: Success: Parsed through Pulse.");

google.maps.event.addDomListener(window, 'load', init_map);
google.maps.event.addDomListener(window, 'load', init_map);

console.log("DEBUG: Success: Parsed through Google Init.");