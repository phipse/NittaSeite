/*
 * © Uwe Nauck
 * 
 * Created on 28/02/2008 by Uwe Nauck
 * Last changed on 28/02/2008 by Uwe Nauck
 *
 * This script implements some necessary IE hacks
 */

if(typeof(window.external) != 'undefined'){

	// overload getElementsByName() function for IE
	document.getElementsByName = function(name, tag){
	
		if(!tag){
		
			tag = '*';
		}
		
		var elems = document.getElementsByTagName(tag);
		var res = []
		for(var i=0;i<elems.length;i++){
		
			att = elems[i].getAttribute('name');
			if(att == name) {
			
				res.push(elems[i]);
			}
		}
		
		return res;
	}
}
