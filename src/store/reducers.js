import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    login: () =>({}),
    loginForm: formReducer
})

export default rootReducer