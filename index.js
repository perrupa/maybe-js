var noop = () => ({});

function Maybe(val) {
	if( !val ) {
		return None();
	}
	return Some( val );
}

function None() {
	return {
		map: () => None()
	};
}

function Some(val) {

	return {
		map: (fn) => Maybe(fn(val))
	};
}

var log = (val) => {
	console.log(val) 
	return val;
}

Maybe(7).map(log).map(log).map(log);
Maybe(null).map(log);
