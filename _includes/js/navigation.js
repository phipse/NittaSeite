/*
 * � Uwe Nauck
 * 
 * Created on 28/02/2008 by Uwe Nauck
 * Last changed on 23/03/2009 by Uwe Nauck
 *
 * This script contains all client side script for browsing through the site
 */

/*
 * Initializes the mootools navigation effects
 * 
 * @return 
 */
function initNavigationFx() {
	
	var navElements	= document.getElementsByName('navElement');
	var slideObjs	= new Array();
	var cgid		= getCGId();
	var tlCgid		= getTopLevelCGId();
	
	// check if this is the first visit for in this top level category
	var firstVisit	= tlCgid != Cookie.read('tlCgid') ? true : false;
	if(firstVisit) {
	
		// set cookie with current top level category id
		Cookie.write('tlCgid', tlCgid);
	}
	
	// loop over all navigation item
	for(var navItemCount = 0; navItemCount <= navElements.length; navItemCount++) {
	
		// is html object
		if(navElements[navItemCount]) {
		
			var navElementIdProperty	= navElements[navItemCount].id;
			var navElementId			= navElementIdProperty.replace('navEl', '');
			var subNavElementId			= 'sub' + navElementId;
			
			// put slide object and navigation element id to slide objects array
			if($(subNavElementId)) {
			
				slideObjs.push(
					new Array(
						navElementId, 
						new Fx.Slide(subNavElementId)
				));
			}
		}
	}
	
	// loop over slide objects
	for(var i = 0; i < slideObjs.length; i++) {
	
		// hide the the current slide object if this is not the first visit of the current top level category
		// or if the top level category id is not equal to the navigation element id in the slide objects array
		if((tlCgid != slideObjs[i][0]) || firstVisit) {
		
    		slideObjs[i][1].hide();
    	}
    	
		// slide out/in the the current slide object if this is the first visit of the current top level category
		// and if the top level category id is equal to the navigation element id in the slide objects array
		if((tlCgid == slideObjs[i][0]) && firstVisit) {

			$('sub' + slideObjs[i][0]).setStyle('display', 'block');
			slideObjs[i][1].toggle();
		}
		else if(tlCgid == slideObjs[i][0]){
		
			$('sub' + slideObjs[i][0]).setStyle('display', 'block');
		}
  	}
}

/*
 * Returns the category id
 * 
 * @return String category id
 */
function getCGId() {

	return isSEOEnabled() ? getCGIdFromSEOURL() : getCGIdFromURL();
}

/*
 * Returns the category id from a regular url
 * Only for internal use!
 * 
 * @return String category id
 */
function getCGIdFromURL() {

	return getQueryStringParam('cgid');
}

/*
 * Returns the category id from a SEO url
 * Only for internal use!
 * 
 * @return String category id
 */
function getCGIdFromSEOURL() {

	var pathName = window.location.pathname;
	var fileName = pathName ? pathName.substring(pathName.lastIndexOf('/') + 1, pathName.length) : null;
	var cgid = fileName ? fileName.substring(0, fileName.indexOf(',')) : null;
	
	return cgid;
}

/*
 * Returns the top level category id
 * 
 * @return String top level category id
 */
function getTopLevelCGId() {

	var cgid		= getCGId();
	var returnValue	= null;
	
	if(cgid != null) {
	
		var cgidLength	= cgid != null ? cgid.length : null;
		var indexOfZero	= cgid != null ? cgid.indexOf('0') : null;
		
		var firstPartOfCGId	= cgid.substring(0, indexOfZero - 1);
		var topLevelCGId	= firstPartOfCGId;
		
		while(topLevelCGId.length < cgidLength) {
		
			topLevelCGId += '0';
		}
		
		returnValue = topLevelCGId;
	}
	
	return returnValue;
}
