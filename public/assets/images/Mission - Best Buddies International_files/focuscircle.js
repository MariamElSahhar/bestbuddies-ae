jQuery(function($){
	$(window).load(function(){
		if($('.wpgmza_custom_focus_circle').length > 0){
			var cId = $('.wpgmza_custom_focus_circle').data('circle');
			var zoom = $('.wpgmza_custom_focus_circle').data('zoom');

			wpgmza_focus_circle(cId, zoom);
		}
	});

	function wpgmza_focus_circle(circle, zoom){
		if(typeof WPGMZA !== 'undefined' && typeof WPGMZA.maps !== 'undefined'){
			if(typeof WPGMZA.maps[0] !== 'undefined'){
				var circleMatch = wpgmza_get_circle_location(circle);
				if(circleMatch !== false){
					WPGMZA.maps[0].setCenter(
						new WPGMZA.LatLng(
							circleMatch.lat,
							circleMatch.lng
						)
					);

					if(zoom > 0){
						WPGMZA.maps[0].setZoom(zoom);
					}
				}
			}
		}
	}

	function wpgmza_get_circle_location(circle){
		if(typeof circle_array !== 'undefined'){
			for(var i in circle_array){
				if(parseInt(circle_array[i].id) === circle){
					return {
						'lat' : circle_array[i].center.lat(), 
						'lng' : circle_array[i].center.lng() 
					};
				}
			}
		}
		return false;
	}
});