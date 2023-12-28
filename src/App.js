import './index.css'
import { ColorModeContext, useMode } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './Scenes/Global/TopBar'
import SideBar from './Scenes/Global/SideBar'
// import Dashboard from './Scenes/dashBoard';
// import Team from './Scenes/team';
// import Invoices from './Scenes/invoices';
// import Contact from './Scenes/contact';
// import Bar from './Scenes/bar';
// import Form from './Scenes/form';
// import Line from './Scenes/line';
// import Pie from './Scenes/pie';
// import FAQ from './Scenes/faq';
// import Geography from './Scenes/geography';
// import Calendar from './Scenes/calendar';
// import { Routes, Route } from 'react-router-dom';

function App() {
  const[theme,ColorMode]=useMode();
  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
              <SideBar />
            <main className='content'>
              <TopBar />
              {/* <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/bar' element={<Bar/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/line' element={<Line/>}/>
                <Route path='/pie' element={<Pie/>}/>
                <Route path='/faq' element={<FAQ/>}/>
                <Route path='/geography' element={<Geography/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
              </Routes> */}
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
