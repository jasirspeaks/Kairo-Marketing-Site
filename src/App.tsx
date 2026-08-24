import Nav from './components/Nav'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import PainSection from './components/PainSection'
import CentralQuestion from './components/CentralQuestion'
import DemoSection from './components/DemoSection'
import ProductSection from './components/ProductSection'
import DealReviewSection from './components/DealReviewSection'
import HowItWorks from './components/HowItWorks'
import WhoItsFor from './components/WhoItsFor'
import Pricing from './components/Pricing'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <CategorySection />
      <PainSection />
      <CentralQuestion />
      <DemoSection />
      <ProductSection />
      <DealReviewSection />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <FinalCta />
      <Footer />
    </div>
  )
}