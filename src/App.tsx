import React from 'react'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'
import { Main } from './styles'

import Header from './components/Header'
import DashboardHome from './components/Home'
import Sidebar from './components/Sidebar'


export const App = hot(() => (
  <ExtensionProvider>
    <Header/>
    <Main>
      <DashboardHome/>
      <Sidebar />
    </Main>
  </ExtensionProvider>
))
