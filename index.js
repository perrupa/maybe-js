var noop = () => ({});

export function Maybe(val) {
	if( !val ) {
		return None();
	}
	return Some( val );
}

export function None() {
	return {
		map: () => None()
	};
}

export function Some(val) {
	return {
		map: (fn) => Maybe(fn(val))
	};
}

