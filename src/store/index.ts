import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const initialState = {};
const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, composedEnhancers);
const persistor = persistStore(store);

export const getStore = () => ({ store, persistor });

export type AppDispatch = typeof store.dispatch;
