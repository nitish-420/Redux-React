import {createStore} from "redux";
import rootReducer from "./reducers";

// import { composeWithDevTools } from 'redux-devtools-extension'

// import thunk from "redux-thunk" 

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))


// const store = createStore(
//     rootReducer,
//     composedEnhancer
// );
// I know why I added this in comments here ;)
const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store
