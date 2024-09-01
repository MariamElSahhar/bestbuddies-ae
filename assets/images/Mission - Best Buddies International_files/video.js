jQuery(document).ready(function () {
    jQuery(".various").fancybox({
        maxWidth: 800,
        maxHeight: 350,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

    jQuery('#top-login-widget a').text('Members Area');
    jQuery('#top-login-widget a').attr('href', 'http://bestbuddies.org/members-area');
	
	var busy = false;

    jQuery(window).scroll(function(){

		// Check the user is at the bottom of the element
		if(  jQuery(window).scrollTop() + jQuery(window).height() > jQuery('.timeline').height() && !busy) {
		                   
			if(busy == false){     
			    busy = true;
			    jQuery(".load-more").trigger('click');
				console.log('scroll bottom');
			}
		   setTimeout(function() {
				                  
			  busy = false;
									 
			}, 3000);
		                             
		}   


    });

});


function reorder_timeline()
{
	
	
	var even_height = 0;
	var odd_height = 0;
	var last_odd_top = 0;
	jQuery( "ul.timeline li" ).each( function( index, element ){
		var post_height = jQuery(this).height();
		console.log( '==================== Post Year : ' +  jQuery(this).find('.title a').html()  );
		console.log( '==================== Post Height : ' +  post_height  );
		//console.log( 'Post Top : ' +  jQuery(this).css('top')  );
		

		if( jQuery(this).hasClass('even') ){
			if((even_height   >= ( odd_height - 83)) && even_height > 0 ){
				console.log( 'Post is Even => Send to Odd'  );	
				jQuery(this).removeClass('even');
				jQuery(this).addClass('odd');
				jQuery(this).data('class','odd');
				odd_height = odd_height + post_height + 40 ;
			}else{
				even_height = even_height + post_height + 40 ;
			}
			
			
		}else {
			 
			if( ((odd_height - 83 )  >= even_height) && odd_height > 0 ) {
				console.log( 'Post is Odd => Send to Even'  );	
				jQuery(this).removeClass('odd');
				jQuery(this).addClass('even');
				jQuery(this).data('class','even');		
				
				even_height = even_height + post_height + 40 ;
			}else{
				odd_height = odd_height + post_height + 40 ;
			}
			
		}


		console.log( 'Odd Height : ' +  odd_height  );
		console.log( 'Even Height : ' +  even_height  );
	});	

//	jQuery('.timeline').bind("DOMSubtreeModified", function () {
//		setTimeout(function () { update_timeline(); }, 1000);
//	});	

}

function update_timeline()
{
	
	console.log('Function Has been called');
    var sumodd = 0;
    var totalodd = 0;
    var sumeven = 0;
    var totaleven = 0;
	var topodd = 0;
	var topeven = 0;
	var old_year = "";
    jQuery('.timeline li').each(function () {
		var current_year = jQuery(this).find('.title a').html() ;
		console.log( '==================== Post Year : ' +  jQuery(this).find('.title a').html()  );
        var _this = jQuery(this);
		if(_this.hasClass('odd')){
			_this.css('top', sumodd);
			topodd = parseInt(sumodd , 10);
			sumodd += _this.outerHeight() + 20;

			totalodd += parseInt(_this.outerHeight() + 20, 10);
		}else{


			_this.css('top', sumeven);
			topeven = parseInt(sumeven , 10);
			sumeven += _this.outerHeight() + 20;
			totaleven += parseInt(_this.outerHeight() + 20, 10);
			
			if(((topeven + 88) >= ( topodd  )) &&  (( topeven + 78) <= (topodd  )) && (current_year !=  old_year)  ){
				console.log( 'Arrow Overlapping Detected : ' +  (topeven - topodd)  );
				
				sumeven = topeven;
				sumeven += 30;
				_this.css('top', sumeven);
				topeven = parseInt(sumeven , 10);
				sumeven += _this.outerHeight() + 50;
				totaleven += parseInt(_this.outerHeight() +50, 10);
			}			
		}
		old_year = current_year;
		console.log('topodd : ' + topodd);
		console.log('topeven : ' + topeven);

    });


    if (totaleven > totalodd) {
        jQuery('.timeline').css('min-height', totaleven);
    }
    else if (totalodd > totaleven) {
        jQuery('.timeline').css('min-height', totalodd);
    }
}



jQuery(window).load(function () {
	reorder_timeline();
    update_timeline();
	
});

jQuery(window).resize(function () {
    //update_timeline();
});
