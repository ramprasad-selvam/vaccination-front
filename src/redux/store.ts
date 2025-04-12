import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import { rootReducer } from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor};