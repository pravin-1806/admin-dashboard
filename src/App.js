import './index.css'
import { ColorModeContext, useMode } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './Scenes/Global/TopBar'
import SideBar from './Scenes/Global/SideBar'
import {Route, Routes} from 'react-router-dom'
import Dashboard from './Scenes/DashBoard/index';
import Team from './Scenes/Teams/index';
// import Invoices from './Scenes/invoices';
import Contact from './Scenes/Contact/index';
import Bar from './Scenes/Bar/index';
import Form from './Scenes/Form/index';
import Line from './Scenes/Line/index';
import Pie from './Scenes/Pie/index';
import FAQ from './Scenes/Faq/index';
// import Geography from './Scenes/geography';
import Calendar from './Scenes/Calendar/index';
//import { Routes, Route } from 'react-router-dom';

function App() {
  const[theme,ColorMode]=useMode();
  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        {console.log('================>',theme)}
        <CssBaseline>
          <div className="app">
              <SideBar />
            <main className='content'>
              <TopBar />
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/team' element={<Team/>}/>
                {/* <Route path='/invoices' element={<Invoices/>}/>*/}
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/bar' element={<Bar/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/faq' element={<FAQ/>}/>
                <Route path='/pie' element={<Pie/>}/>
                <Route path='/line' element={<Line/>}/>
                {/*<Route path='/geography' element={<Geography/>}/>*/}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
