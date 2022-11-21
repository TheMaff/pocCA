import React from 'react'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { ExtensionProvider2 } from '@looker/extension-sdk-react'
import { Looker40SDK } from '@looker/sdk'
import { hot } from 'react-hot-loader/root'
import { Main } from './styles'

import Header from './components/Header'
import DashboardHome from './components/Home'
import Sidebar from './components/Sidebar'

export const App = hot(() => (
  <ExtensionProvider2 type={Looker40SDK}>
    <Header />
    <Main>
      <DashboardHome />
      <Sidebar />
    </Main>
  </ExtensionProvider2>
))
