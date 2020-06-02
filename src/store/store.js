import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer,applyMiddleware(thunk));
const persistStoreState = persistStore(store);
export {
    store,
    persistStoreState as persistStore,
};
