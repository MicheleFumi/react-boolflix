import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './app.css';

import { MovieProvider } from './Context/MyContextData.jsx'
import AppHeader from './Components/AppHeader/AppHeader';
import AppMain from './Components/AppMain/AppMain';

export default function App() {

  return (
    <>
      <MovieProvider>

        <AppHeader />

        <AppMain />

      </MovieProvider>

    </>

  );
}
