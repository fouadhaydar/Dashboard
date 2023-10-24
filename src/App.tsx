import { CssBaseline, ThemeProvider, Theme } from '@mui/material';
// import { unstable_createCssVarsProvider as createCssVarsProvider } from '@mui/system';

import { useMode, ColorModeCtx } from './theme';
import Topbar from './scenes/global/Topbar';
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SideBar from './scenes/global/SideBar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contact';
import Bar from './scenes/bar';
import Pie from './scenes/Pie';
import FQA from './scenes/fqa';
import Line from './scenes/line';
import Calendar from './scenes/calender';
import Geography from './scenes/geography';
import WrongPath from './scenes/wrongPath';
import ProfileForm from './scenes/form';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="profile-form" element={<ProfileForm />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="fqa" element={<FQA />} />
      <Route path="calender" element={<Calendar />} />
      <Route path="geography" element={<Geography />} />

      <Route path='*' element = {<WrongPath/>}/>
    </Route>
  )
)

function App() {
  const [theme, colorMode] = useMode() as unknown as [Theme,() => void]
  
  return (
    <ColorModeCtx.Provider value = {colorMode}>
        <ThemeProvider theme = {theme}>
          <CssBaseline/>
            <div className="app" >
              <SideBar/>
              <main className='content'>
                <Topbar/>
                <Outlet/>
              </main>
            </div>
        </ThemeProvider>
    </ColorModeCtx.Provider>
  )
}

export default App
