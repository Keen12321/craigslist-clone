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
	axios.get('/api/d/' + id).then(resp => {
		store.dispatch({
			type: 'GET_ALL_LISTINGS',
			payload: resp.data
		})
	})
}

export function getSpecificFunction(id) {
	axios.get('/api/l/' + id).then(resp => {
		store.dispatch({
			type: 'GET_SPECIFIC',
			payload: resp.data
		})
	})
}

export function getFirstPostPage() {
	axios.get('/api/i').then(resp => {
		store.dispatch({
			type: 'GET_FIRST_POST_PAGE',
			payload: resp.data
		})
	})
}

export function postOne(id) {
	axios.post('/api/i', {
		parent_id:id
	}).then(resp => {
	})
}

export function getSecondPostPage() {
	axios.get('/api/a').then(resp => {
		store.dispatch({
			type: 'GET_SECOND_POST_PAGE',
			payload: resp.data
		})
	})
}