import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { Ui } from '@biblioteca-personal/ui';
import './App.scss';

const Mangame = React.lazy(() => import('mangame/Module'));

export function App() {
  return (
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
  );
}

export default App;
