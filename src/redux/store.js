import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./slices/contactsSlice";
import filtersReducer from "./slices/filtersSlice";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const appPersistReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

   reducer: persistedReducer(appPersistReducer, appReducer),

},


middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

  
export const persistor = persistStore(store);
