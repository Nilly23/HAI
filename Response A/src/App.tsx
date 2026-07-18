import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LegacyPage } from './pages/LegacyPage'
import { ShowroomPage } from './pages/ShowroomPage'
import { PartnerPortalPage } from './pages/PartnerPortalPage'
import { SiteLayout } from './components/SiteLayout'

function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/partner-portal" element={<PartnerPortalPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App
