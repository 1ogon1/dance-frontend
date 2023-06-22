import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './components/auth/Login';
import { JudgePage } from './components/judge/JudgePage'
import { AdminAddUsers } from 'components/admin/AdminAddUsers';
import { AdminPage } from 'components/admin/AdminPage';
import { JudgeBattle } from 'components/judge/JudgeBattle';
import { ScreenBattleProcess } from 'components/screen/ScreenBattleProcess';
import { ScreenBattleResult } from 'components/screen/ScreenBattleResult';
import { ScreenPage } from 'components/screen/ScreenPage';
import React from 'react';
import { TablePage } from 'components/shared/Table/TablePage';
function App() {
  return (
    <>
        <Router>
          <Routes>
          {/* judge */}
            <Route path='/judge' element={<JudgePage/>}>
                <Route path='table' element={<TablePage/>}/>
                <Route path='battle/:id/' element={<JudgeBattle/>}/>
            </Route>
          {/* screen */}
            <Route path='/screen' element={<ScreenPage/>}>
                <Route path='table' element={<TablePage/>}/>
                <Route path='battle/:id/' element={<ScreenBattleProcess/>}/>
                <Route path='result/:id/' element={<ScreenBattleResult/>}/>
            </Route>
          {/* admin */}
            <Route path='/admin'  element={<AdminPage/>}>
                <Route path='users' element={<AdminAddUsers/>}/>
                <Route path='table' element={<TablePage/>}/>
            </Route>
          {/* auth */}
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
