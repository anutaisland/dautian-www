// ---------- start of jQuery document.ready() ----------
  
$(document).ready(function() {   
  
  //links
  $("#services").append("<span id='co-nabizim'>&nbsp;</span>");
  $("#about-me").append("<span id='o-mne'>&nbsp;</span>");
  $("#contact").append("<span id='kontakt'>&nbsp;</span>");
  
  $("#services .inside").append("<a class='nav aboutme' href='#o-mne'>着陆<span></span></a> <span class='hide'>|</span>");
  $("#services .inside").append(" <a class='nav contact' href='#kontakt'>找组织<span></span></a>");
  
  $("#about-me .inside").append("<a class='nav services' href='#co-nabizim'>找朋友<span></span></a> <span class='hide'>|</span>");
  $("#about-me .inside").append(" <a class='nav contact' href='#kontakt'>找组织<span></span></a>");
  
  $("#contact .inside").append("<br /><a class='nav aboutme' href='#o-mne'>着陆<span></span></a> <span class='hide'>|</span>");
  $("#contact .inside").append(" <a class='nav services' href='#co-nabizim'>找朋友<span></span></a>");
  
  
  
  //anchors
  function filterPath(string) {
	return string
	  .replace(/^\//,'')
	  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	  .replace(/\/$/,'');
  }
  
  $('a[href*=#]').each(function() {
	if ( filterPath(location.pathname) == filterPath(this.pathname)
	&& location.hostname == this.hostname
	&& this.hash.replace(/#/,'') ) {
	  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
	  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	   if ($target) {
		 var targetOffset = $target.offset().top;
		 $(this).click(function() {
		   $('html, body').animate({scrollTop: targetOffset}, 600);
		   return false;
		 });		 
	  }
	}
  });
  
  $('a[href*=#]').each(function() {
	if ( filterPath(location.pathname) == filterPath(this.pathname)
	&& location.hostname == this.hostname
	&& this.hash.replace(/#/,'') ) {
	  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
	  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	   if ($target) {
		 var targetOffset = $target.offset().top;
		 $('html, body').animate({scrollTop: targetOffset}, 600);
		 return false;
	  }
	}
  });
  
  //what do I offer
  $("#services ul").append("<em></em>");
  $("#contact address").append("<em></em>");
  
  $("div.special blockquote").hover(function() {
    $(this).find("em").css("display", "block");
  }, function() {
    $(this).find("em").css("display", "none");
  }
  );
  
});


// ---------- end of jQuery document.ready() -------------------