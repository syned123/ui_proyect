import { configureStore } from "@reduxjs/toolkit";
import { authSlice, clientSlice } from "./";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    client: clientSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
