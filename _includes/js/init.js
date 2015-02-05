/*
 * © Uwe Nauck
 * 
 * Created on 28/02/2008 by Uwe Nauck
 * Last changed on 25/01/2009 by Uwe Nauck
 *
 * This script initializes some global JavaScripts
 */

window.addEvent('load', function() {
	
	// initialize navigation effects
	initNavigationFx();
  	
  	// initialize gallery effects  	
  	if (typeof initImageFolderBrowser == 'function') {
  	
  		initImageFolderBrowser();
  	}
  	
  	// initialize accordion plugin (karate page)  	
  	if (typeof initAccordionPlugin == 'function') {
  	
  		initAccordionPlugin();
  	}
  	
  	// initialize link object effects  	
  	if (typeof initLinkObject == 'function') {
  	
  		initLinkObject();
  	}
	
	// set position of nitta japanese font watermark
	var linkListCoord	= $('linkList').getCoordinates().bottom;
	var extraDiv1Coord	= $('pageContent').getCoordinates().bottom - 165;
	extraDiv1Coord		= extraDiv1Coord >= linkListCoord ? extraDiv1Coord : linkListCoord;
	$('extraDiv1').setStyles({
  		visibility: 'visible', 
		top: extraDiv1Coord
  	});
});
