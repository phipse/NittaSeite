/*
 * © Uwe Nauck
 * 
 * Created on 28/02/2008 by Uwe Nauck
 * Last changed on 28/02/2008 by Uwe Nauck
 *
 * This script contains a collection of common JavaScript tools
 */

/*
 * Returns a list of all query string parameters
 * 
 * @return Array query string parameters
 */
function getQueryStringParams() {

	var qsParams	= new Array();
	var query		= window.location.search.substring(1);
	var params		= query.split('&');
	
	for (var i = 0; i < params.length; i++) {
	
		var pos = params[i].indexOf('=');
		if (pos > 0) {
		
			var key			= params[i].substring(0, pos);
			var val			= params[i].substring(pos + 1);
			qsParams[key]	= val;
		}
	}
	
	return qsParams;
}

/*
 * Returns a query string parameter by a given id
 * 
 * @return String query string parameter
 */
function getQueryStringParam(qsParamId) {

	var qsParams = getQueryStringParams();
	
	return qsParams[qsParamId] ? qsParams[qsParamId] : null;
}

/*
 * Checks if SEO is enabled
 * 
 * @return Boolean SEO enabled flag
 */
function isSEOEnabled() {

	return $('SEOEnabled') != null ? $('SEOEnabled').value : false;
}
