import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { Ui } from '@biblioteca-personal/ui';
import './App.scss';
import { Provider } from 'react-redux';
import {store} from '@biblioteca-personal/redux';

const Mangame = React.lazy(() => import('mangame/Module'));

export function App() {
  return (
    <Provider store={store}>
    <Ui>
      <React.Suspense fallback={null}>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mangame">Mangame</Link>
          </li>
        </ul> */}
        {/* revisar si el session es válido, caso contrario redirigir siempre a / */}
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/mangame" element={<Mangame />} />
        </Routes>
      </React.Suspense>
    </Ui>
    </Provider>
  );
}

export default App;
