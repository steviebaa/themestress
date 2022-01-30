import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {SettingsProvider} from '@stores/SettingsContext';
import {Theme} from '@core/Theme';
import {createSectionRoutes} from '@core/routeMap';
import {System} from '@controllers/System';
import {Home} from '@controllers/Home';
import {Components} from '@controllers/Components';
import {SnackbarProvider} from '@themestress/components/Snackbar';
import {ThemeVariables} from '@themestress/core/ThemeVariables';
import {Color} from '@themestress/core/classes/Color';
import {TonalPalette} from '@themestress/core/classes/TonalPalette';

export const App: React.FC = () => {
  return (
    <SettingsProvider>
      <Theme>
        <ThemeVariables />
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path={'*'} element={<Home />}>
                <Route path={'system/'} element={<System />}>
                  {createSectionRoutes('system')}
                </Route>

                <Route path={'components/'} element={<Components />}>
                  {createSectionRoutes('components')}
                </Route>
              </Route>
            </Routes>
          </Router>
        </SnackbarProvider>
      </Theme>
    </SettingsProvider>
  );
};
const app = document.getElementById('app');
ReactDOM.render(<App />, app);
