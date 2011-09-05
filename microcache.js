/**
 * Micro Cache
 * - a micro library to handle a inmemory cache
 * - works in node and browser.
 * 
 * @tags inmemory, keyvalue, cache, node, browser
*/
var MicroCache	= function(){
	var _values	= {};
	return {
		get	: function(key){ return _values[key];	},
		contains: function(key){ return key in _values;	},
		set	: function(key, value){	_values[key]	= value;},
		getSet	: function(key, value){
			if( !this.contains(key) )	this.set(key, value)
			return this.get(key);
		},
		values	: _values
	}
}


// export in common js
if( typeof module !== "undefined" && ('exports' in module)){
	module.exports	= MicroCache;
}
