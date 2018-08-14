const initialState = {
	categories: [],
	listings: [],
	allListings: [],
	specificListing: []
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_CATEGORIES':
			return {...state, categories: action.payload}
		case 'GET_LISTINGS':
			return {...state, listings: action.payload}
		case 'GET_ALL_LISTINGS':
			return {...state, allListings: action.payload}
		case 'GET_SPECIFIC':
			return {...state, specificListing: action.payload}
		default:
			return state
	}
}