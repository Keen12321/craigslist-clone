import axios from 'axios'
import store from '../store'

export function getCategories() {
	axios.get('/api/categories').then(resp => {
		store.dispatch({
			type: 'GET_CATEGORIES',
			payload: resp.data
		})
	})
}

export function getListings(id) {
	axios.get('/api/listings/' + id).then(resp => {
		store.dispatch({
			type: 'GET_LISTINGS',
			payload: resp.data
		})
	})
}

export function getAllListings(id) {
	axios.get('/api/alllistings/' + id).then(resp => {
		store.dispatch({
			type: 'GET_ALL_LISTINGS',
			payload: resp.data
		})
	})
}

export function getSpecificFunction(id) {
	axios.get('/api/specificlisting/' + id).then(resp => {
		store.dispatch({
			type: 'GET_SPECIFIC',
			payload: resp.data
		})
	})
}

export function post(listing) {
	axios.post('/api/listings', listing).then(resp => {
	})
}