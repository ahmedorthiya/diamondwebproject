import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';
import axios from "axios";
import logger from "redux-logger";


const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:8000",
    headers:{
        "Accept": "application/json",
        "Content-type": "application/json",
    }
});

const middlewares = [];
middlewares.push(thunk.withExtraArgument(axiosInstance));
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middlewares));
const persistStoreState = persistStore(store);



export {
    store,
    persistStoreState as persistStore,
};
