import storage from 'redux-persist/es/storage'
import { applyMiddleware, compose, createStore } from 'redux'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import apiMiddleware from './middleware';
import rootReducer from './reducers'

export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']);
  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedFilter]
    },
    rootReducer)
  const store = createStore(
    connectRouter(history)(reducer), 
    {},
    compose(
      applyMiddleware(
        apiMiddleware,
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  )
  const persistor = persistStore(store);
  return { store, persistor }
}