import cartReducer from './cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'cart',
  storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cartReducer: persistedCartReducer,
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
