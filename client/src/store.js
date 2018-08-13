import { createStore } from 'redux'

import frontPageReducer from './reducers/frontPageReducers'

const store = createStore(frontPageReducer)

export default store