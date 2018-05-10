import { combineReducers } from 'redux'

import About from "./modules/about"

const rootReducer = combineReducers({
    about: About
})
  
export default rootReducer