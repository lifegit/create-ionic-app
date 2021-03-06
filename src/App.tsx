import React from "react";
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import '@ant-design/mobile-styles/dist/antd-mobile-style.min.css'

import renderRouter from "./components/Router";
import config from "./config";
import AppContextProvider from "./models/AppContext";


const App: React.FC = () => (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          { renderRouter(config.routes, config.history.type) }
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>
)

export default App;
