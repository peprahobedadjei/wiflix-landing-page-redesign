
import FAQ from '../components/Home/FAQ'
import Footer from '../components/Home/Footer'
import HeroSection from '../components/Home/HeroSection'
import Intro from '../components/Home/Intro'
import Pricing from '../components/Home/Pricing'
import Category from '../components/Home/NewCategory'
import MainCategories from '../components/Home/MainCategories'


export default function Home() {
  return <>

    <HeroSection />
    <Intro/>
    <Category/>
    <MainCategories/>
    <Pricing/>
    <FAQ />
    <Footer/>

  </>
}
