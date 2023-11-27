

var   BUDDIES_A_DONATE_SELECTOR = '#top-custom-link-widget-donate a';
var   BUDDIES_A_SHOP_SELECTOR = '#top-custom-link-widget-shop a';
var   BUDDIES_SPAN_SIDEBAR_STATE = 'div.hb-sidebar > div.widget > div.textwidget > a > h2 > span';
var   BUDDIES_JSON_URL = '/wp-content/themes/HighendWP-child/js/links.json';
  
function getJsonUr(jsonurl){
	return jQuery.ajax({ // ajax call starts
	  url: jsonurl,
	  dataType: 'json',
	  success: function(data, textStatus, jqXHR){

	  },
	  error: function(){
		console.log('Error Getting Data!');
	  }
	});
}
  
function checkUrlForString(string){
string = string.toString().toLowerCase();
var state = window.location.href.toString().toLowerCase().indexOf("/" + string + "/");
if(state != -1){
  return true;
}
}
 
function checkState(){
getJsonUr(BUDDIES_JSON_URL).done(function(data){
  if(data){
	jQuery.each( data.states, function(k, v){
	  var urlMatch = checkUrlForString(k);
	  var stringMatch = compareStrings(k);
	  if(urlMatch===true || stringMatch===true){
		replaceLinks(v.shop, v.donate);
	  }
	});
  }
});
}
  
function replaceLinks (shop, donate){
	jQuery(BUDDIES_A_SHOP_SELECTOR).attr('href', shop);
	jQuery(BUDDIES_A_DONATE_SELECTOR).attr('href', donate);
}
  
function compareStrings(string){
	string = string.toString().toLowerCase();
	var state = jQuery(BUDDIES_SPAN_SIDEBAR_STATE).text().toLowerCase().indexOf(string);
	//state = state.replace(/\s+/g, '-').toLowerCase();
	if(state != -1){
	  return true;
	}
}
  
jQuery(document).ready(function() {
  checkState();
});