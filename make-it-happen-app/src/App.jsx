import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/shared/ScrollToTop.jsx'
import PageTransition from './components/shared/PageTransition.jsx'
import FloatingConcierge from './components/shared/FloatingConcierge.jsx'

// Pages
import Home from './pages/Home/Home.jsx'
import OurStory from './pages/OurStory/OurStory.jsx'
import Services from './pages/Services/Services.jsx'
import Events from './pages/Events/Events.jsx'
import Packages from './pages/Packages/Packages.jsx'
import OurWork from './pages/OurWork/OurWork.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Contact from './pages/Contact/Contact.jsx'
import PlanYourEvent from './pages/PlanYourEvent/PlanYourEvent.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default function App() {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col relative selection:bg-primary/30 selection:text-primary">
      <ScrollToTop />
      {/* Shared Header — implemented once across all pages */}
      <Header />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-grow flex flex-col" id="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan-your-event" element={<PlanYourEvent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>

      {/* Shared Footer — implemented once across all pages */}
      <Footer />

      {/* Persistent Atelier Floating Concierge */}
      <FloatingConcierge />
    </div>
  )
}
