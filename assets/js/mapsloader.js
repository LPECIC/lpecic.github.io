function init_map() {
	var myOptions = {
		zoom: 17,
		center: new google.maps.LatLng(28.691406323465984, 77.21442428298951),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
				    {
				        "featureType": "water",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#193341"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#2c5a71"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#29768a"
				            },
				            {
				                "lightness": -37
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#406d80"
				            }
				        ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#406d80"
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.stroke",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#3e606f"
				            },
				            {
				                "weight": 2
				            },
				            {
				                "gamma": 0.84
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.fill",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "weight": 0.6
				            },
				            {
				                "color": "#1a3541"
				            }
				        ]
				    },
				    {
				        "elementType": "labels.icon",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#2c5a71"
				            }
				        ]
				    }
				]
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
google.maps.event.addDomListener(window, 'load', init_map);