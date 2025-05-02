import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { App } from './App'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <StrictMode> */}
      <App />
    {/* </StrictMode> */}
    </PersistGate>
  </Provider>
);
