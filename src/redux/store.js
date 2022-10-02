import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedClickReducer = persistReducer(persistConfig, persistedClickReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
// export const persistor = persistStore(store);
