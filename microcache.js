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
		remove	: function(key){ delete _values[key];	},
		set	: function(key, value){	_values[key] = value;},
		values	: function(){ return _values;	},
		getSet	: function(key, value){
			if( !this.contains(key) ){
				this.set(key, typeof value == 'function' ? value() : value )
			}
			return this.get(key);
		}
	}
}


// export in common js
if( typeof module !== "undefined" && ('exports' in module)){
	module.exports	= MicroCache;
}
