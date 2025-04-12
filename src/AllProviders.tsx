import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AllProviders;