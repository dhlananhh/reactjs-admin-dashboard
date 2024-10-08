import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';

import './index.css';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/Dashboard';
import Team from './scenes/team/Team';
import Invoices from './scenes/invoices/Invoices';
import Contacts from './scenes/contacts/Contacts';

import Bar from './scenes/bar/Bar';
import Form from './scenes/form/Form';
import Line from './scenes/line/Line';
import Pie from './scenes/pie/Pie';
import Faq from './scenes/faq/Faq';
import Geography from './scenes/geography/Geography';
import Calendar from './scenes/calendar/Calendar';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';


function App() {
    const [ theme, colorMode ] = useMode();
    const [ isSidebar, setIsSidebar ] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className='content'>
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/team' element={<Team />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/invoices' element={<Invoices />} />
                            <Route path='/form' element={<Form />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/line' element={<Line />} />
                            <Route path='/faq' element={<Faq />} />
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/geography' element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;